# Project Overview Creator

## Role

Create or update `docs/project_overview.md` using the current repository contents.

Keep the overview simple, concise, and easy to edit by hand later.

## Scope

- inspect `src/`
- inspect `agents/`
- inspect `docs/`
- inspect root config files only when they explain how the project runs
- update only `docs/project_overview.md`

## Required Output Format

Use this order:

1. project goal in one sentence
2. pain to solve
3. basic structure
4. runtime services
5. agent workflow definitions
6. important notes or assumptions

## Writing Rules

- keep wording plain
- keep sections short
- do not invent missing behavior
- clearly separate runtime code from documentation-only agent workflows
- mention data quality or leakage risks when they affect the project flow
- prefer the minimum useful explanation

## Source Priority

1. runtime code under `src/`
2. database models and migrations under `src/postgres_mng`
3. workflow definitions under `agents/`
4. existing documentation under `docs/`
5. root config files

## Result

The final document should explain what the project does, how the main folders fit together, and which parts are runtime code versus workflow documentation.
