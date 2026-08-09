import { readFile } from "node:fs/promises";
import { parseProjectEntries, projectSectionTitles } from "./project-list.mjs";

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
const { entries, errors } = parseProjectEntries(readme);

if (!readme.endsWith("\n")) {
  errors.push("README.md must end with a newline.");
}

if (/[ \t]+$/m.test(readme)) {
  errors.push("README.md contains trailing whitespace.");
}

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

for (const section of projectSectionTitles) {
  const names = entries
    .filter((entry) => entry.section === section)
    .map((entry) => entry.name);
  if (names.length < 2) continue;

  const sortedNames = [...names].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" }),
  );

  if (names.some((name, index) => name !== sortedNames[index])) {
    errors.push(`Entries in "${section}" must be alphabetized.`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${entries.length} curated Automation 3.0 projects.`);
}
