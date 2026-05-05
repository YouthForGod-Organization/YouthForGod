# Codex Project Instructions

You are the engineering agent for this repository. Work like a careful senior developer using documentation-first, test-driven development.

## Core Rule

Do not write production code until you have first:

1. Read the existing project documentation.
2. Inspected the relevant source files.
3. Understood the existing architecture, patterns, naming, and testing setup.
4. Written or updated a short implementation plan.
5. Written failing tests for the intended behavior when practical.

If any of these steps are skipped, stop and complete them before coding.

## Required Workflow For Every Task

### 1. Read Context First

Before making changes, read the most relevant files, including when available:

- `README.md`
- `AGENTS.md`
- `CODESTYLE.md`
- `docs/`
- `package.json`
- `tsconfig.json`
- `webpack.config.js`
- `playwright.config.ts`
- Existing feature files related to the task
- Existing tests related to the task

If documentation is missing, create or update it.

### 2. Create Or Update A Task Plan Before Coding

Before writing production code, create or update a short plan in:

`docs/agent-plans/`

Use a filename like:

`YYYY-MM-DD-task-name.md`

The plan must include:

```md
# Task Plan: <task name>

## Goal
Explain what needs to be built or fixed.

## Existing Context
List the files, components, APIs, routes, tests, and docs that were reviewed.

## Expected Behavior
Describe what the app should do after the change.

## Test Plan
List the tests that should be added or updated.

## Implementation Plan
Write the smallest safe steps needed to complete the task.

## Documentation Plan
List which docs need to be created or updated.
```

Do not write production code until this plan exists.

### 3. Use Test-Driven Development

For every feature, bug fix, refactor, or behavior change:

1. Find existing tests.
2. Add or update tests first.
3. Run the tests and confirm they fail for the right reason.
4. Implement the smallest possible code change.
5. Run the tests again.
6. Refactor only after tests pass.
7. Update docs after the final behavior is confirmed.

Prefer testing real user behavior over implementation details.

For frontend work, prioritize:

- Component behavior tests
- User interaction tests
- Route/page behavior tests
- Form validation tests
- Loading, error, and empty states
- Accessibility checks where practical

For backend/API work, prioritize:

- Request/response tests
- Validation tests
- Error handling tests
- Database/service logic tests
- Integration tests where practical

### 4. Always Discover And Use Existing Commands

Before running commands, inspect the repo to find the correct ones.

Look in:

- `package.json`
- `README.md`
- Framework config files
- CI config files

Use the project's existing commands whenever possible.

Known commands for this repository:

- `npm install` installs dependencies.
- `npm start` runs the local development server on port `3000`.
- `npm test` runs Playwright end-to-end tests.
- `npm run test:e2e` also runs Playwright end-to-end tests.
- `npm run build` creates the production bundle.
- `npm run preview:test` builds and serves `dist` on port `4173` for Playwright.

Do not invent commands if the repo already defines them.

### 5. Documentation Is Required

Every meaningful code change must include documentation updates.

Update the most relevant docs, such as:

- `README.md`
- `CODESTYLE.md`
- `docs/architecture.md`
- `docs/features.md`
- `docs/api.md`
- `docs/testing.md`
- `docs/setup.md`
- `docs/agent-plans/*.md`

If those docs do not exist and the change needs them, create them.

Documentation should explain:

- What changed
- Why it changed
- How to run it
- How to test it
- How future developers should work with it

Never leave new behavior undocumented.

## Coding Standards

Follow the style already used in the repository.

Prefer:

- Simple code
- Small functions
- Clear naming
- Typed code
- Readable components
- Minimal dependencies
- Predictable file structure
- Reusable utilities only when they remove real duplication

Avoid:

- Unnecessary abstractions
- Large rewrites
- Unrelated refactors
- Changing formatting across unrelated files
- Adding dependencies without a strong reason
- Hiding errors silently
- Hardcoding values that should be config

## Safety Rules

- Do not delete or rewrite large parts of the project unless the task explicitly requires it.
- Do not change public APIs, routes, database schemas, auth logic, payment logic, or environment variable behavior without documenting the impact.
- Do not modify secrets, `.env` files, production config, or deployment settings unless explicitly asked.
- If a task is ambiguous, make the safest reasonable assumption, document that assumption in the task plan, and continue.

## Definition Of Done

A task is not complete until all of these are true:

- Relevant docs were read.
- A task plan was created or updated.
- Tests were added or updated when practical.
- The implementation is complete.
- Tests were run.
- Build was run when available.
- Documentation was updated.
- No unrelated files were changed.

## Final Response Format

At the end of every task, respond with:

```md
## Summary
- What was changed.

## Files Changed
- List files changed and why.

## Tests
- List tests added/updated.
- List commands run.
- State whether they passed or failed.

## Documentation
- List docs created or updated.

## Notes
- Mention assumptions, limitations, or follow-up work.
```

Work carefully. Read first, document first, test first, then code.
