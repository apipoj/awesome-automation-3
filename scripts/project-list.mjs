export const projectSectionTitles = new Set([
  "Agent runtimes and assistants",
  "Prompt-native platforms",
  "Agent frameworks and orchestration",
  "Schedules, triggers, and durable execution",
  "Workflow automation bridges",
  "Tools, MCP, and sandboxes",
  "Browser and computer use",
  "Memory and context",
  "Observability and evaluation",
  "Safety and human approval",
]);

const projectEntryPattern =
  /^- \[([^\]]+)\]\((https:\/\/github\.com\/([^)\s/]+)\/([^)\s/]+))\)(?: (`†`))? - (.+)$/;

export function parseProjectEntries(readme) {
  const entries = [];
  const errors = [];
  const sectionCounts = new Map(
    [...projectSectionTitles].map((title) => [title, 0]),
  );
  let section;

  for (const [index, line] of readme.split("\n").entries()) {
    if (line.startsWith("## ")) {
      section = line.slice(3);
      if (projectSectionTitles.has(section)) {
        sectionCounts.set(section, sectionCounts.get(section) + 1);
      }
      continue;
    }

    if (!projectSectionTitles.has(section) || line.length === 0) {
      continue;
    }

    const match = line.match(projectEntryPattern);
    if (!match) {
      errors.push(
        `Malformed project entry on line ${index + 1} in "${section}": ${line}`,
      );
      continue;
    }

    entries.push({
      name: match[1],
      url: match[2],
      owner: match[3],
      repository: match[4],
      hasLicenseMarker: Boolean(match[5]),
      description: match[6],
      section,
      lineNumber: index + 1,
    });
  }

  for (const [title, count] of sectionCounts) {
    if (count !== 1) {
      errors.push(
        `Expected exactly one "## ${title}" section; found ${count}.`,
      );
    }

    if (!entries.some((entry) => entry.section === title)) {
      errors.push(`Expected at least one project in "${title}".`);
    }
  }

  return { entries, errors };
}
