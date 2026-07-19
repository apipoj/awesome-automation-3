# Contributing to Awesome Automation 3.0

Thank you for helping curate the Automation 3.0 ecosystem.

This is a selective list, not a directory of every AI project. A submission should help an agent turn intent into reliable action through execution, triggers, tools, memory, observation, evaluation, or control.

## Before submitting

Please check that the project:

- has a public source repository;
- is usable today and is not archived;
- has meaningful documentation and a clearly stated license;
- directly supports agent-powered automation rather than only model inference or chat;
- is not already listed under another category;
- has evidence of maintenance beyond an initial code dump.

Commercial projects are eligible only when the linked repository contains a useful self-hostable or open component. Mark fair-code or source-available projects with `†`.

## Add a project

1. Add one entry to the most relevant section in `README.md`.
2. Keep entries alphabetized within the section.
3. Use this format:

   ```markdown
   - [Project](https://github.com/owner/project) - One factual sentence explaining how it contributes to Automation 3.0.
   ```

4. Do not include star counts, pricing, promotional claims, referral links, or tracking parameters.
5. Run `npm test` or `node scripts/validate-list.mjs`.
6. In the pull request, explain why the project belongs and disclose your relationship to it.

## Description style

- Start with what the project enables.
- Prefer specific capabilities over slogans.
- Keep the description to one sentence.
- End the description with a period.
- Use the canonical GitHub repository URL.

## Removing or moving projects

A project may be removed or moved when it is archived, becomes unavailable, changes license materially, is no longer maintained, or no longer fits the list. Open an issue when the decision needs discussion.

## Pull request checklist

- [ ] The repository URL is canonical and reachable.
- [ ] The project is active and its license is clear.
- [ ] The entry is in the best category and alphabetized.
- [ ] The description is factual and ends with a period.
- [ ] I disclosed whether I maintain or am affiliated with the project.
- [ ] The validation script passes.
