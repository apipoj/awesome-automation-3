import { readFile } from "node:fs/promises";

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
const errors = [];

if (!readme.endsWith("\n")) {
  errors.push("README.md must end with a newline.");
}

if (/[ \t]+$/m.test(readme)) {
  errors.push("README.md contains trailing whitespace.");
}

const projectEntryPattern = /^- \[([^\]]+)\]\((https:\/\/github\.com\/[^)\s]+)\)(?: `†`)? - (.+)$/gm;
const entries = [...readme.matchAll(projectEntryPattern)].map((match) => ({
  name: match[1],
  url: match[2].replace(/\/$/, ""),
  description: match[3],
}));

if (entries.length < 40) {
  errors.push(`Expected at least 40 curated GitHub entries; found ${entries.length}.`);
}

const urls = new Set();
for (const entry of entries) {
  const normalizedUrl = entry.url.toLowerCase();
  if (urls.has(normalizedUrl)) {
    errors.push(`Duplicate project URL: ${entry.url}`);
  }
  urls.add(normalizedUrl);

  if (!entry.description.endsWith(".")) {
    errors.push(`Description must end with a period: ${entry.name}`);
  }
}

const sections = readme.split(/^## /m).slice(1);
for (const section of sections) {
  const [title, ...bodyLines] = section.split("\n");
  const names = [...bodyLines.join("\n").matchAll(projectEntryPattern)].map(
    (match) => match[1],
  );
  if (names.length < 2) continue;

  const sortedNames = [...names].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" }),
  );

  if (names.some((name, index) => name !== sortedNames[index])) {
    errors.push(`Entries in "${title}" must be alphabetized.`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${entries.length} curated Automation 3.0 projects.`);
}
