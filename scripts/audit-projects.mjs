import { readFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { parseProjectEntries } from "./project-list.mjs";

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
const { entries: projects, errors } = parseProjectEntries(readme);

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

if (projects.length < 40) {
  console.error(
    `Expected at least 40 curated GitHub entries; found ${projects.length}.`,
  );
  process.exit(1);
}

const token = process.env.PROJECT_AUDIT_TOKEN;
if (!token) {
  console.error(
    "PROJECT_AUDIT_TOKEN is required to avoid GitHub's unauthenticated API limit.",
  );
  process.exit(1);
}

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "User-Agent": "awesome-automation-3-project-audit",
  "X-GitHub-Api-Version": "2022-11-28",
};

let nextProject = 0;

async function fetchRepository(project) {
  const url = `https://api.github.com/repos/${project.owner}/${project.repository}`;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers,
        signal: AbortSignal.timeout(15_000),
      });

      if (response.status !== 429 && response.status < 500) {
        return response;
      }

      if (attempt === 3) {
        return response;
      }
    } catch (error) {
      if (attempt === 3) {
        throw error;
      }
    }

    await delay(attempt * 500);
  }
}

async function auditNextProject() {
  while (nextProject < projects.length) {
    const project = projects[nextProject];
    nextProject += 1;

    let response;
    try {
      response = await fetchRepository(project);
    } catch (error) {
      errors.push(`${project.name}: GitHub request failed (${error.message}).`);
      continue;
    }

    if (!response.ok) {
      const rateLimit = response.headers.get("x-ratelimit-remaining");
      const reason =
        response.status === 403 && rateLimit === "0"
          ? "GitHub API rate limit exhausted"
          : `GitHub returned ${response.status}`;
      errors.push(`${project.name}: ${reason} for ${project.url}.`);
      continue;
    }

    const repository = await response.json();
    const canonicalUrl = `https://github.com/${repository.full_name}`;

    if (project.url.toLowerCase() !== canonicalUrl.toLowerCase()) {
      errors.push(
        `${project.name}: use canonical URL ${canonicalUrl} instead of ${project.url}.`,
      );
    }

    if (repository.private || repository.visibility !== "public") {
      errors.push(`${project.name}: repository is not public.`);
    }

    if (repository.archived) {
      errors.push(`${project.name}: repository is archived.`);
    }

    if (repository.disabled) {
      errors.push(`${project.name}: repository is disabled.`);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, () => auditNextProject()));

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Audited ${projects.length} Automation 3.0 repositories: all are canonical, public, reachable, and available.`,
  );
}
