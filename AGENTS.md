## Core Principles
- Keep responses simple and concise  
- Start minimum scripts
- Always summarize at the end  

## Analysis & Investigation
- Check data quality and potential leakage  
- Avoid data leakage at all costs  
- For investigation tasks, include recommendations in addition to the summary  

## Code & Scripts
- Add explanations by logical chunks (not line-by-line)  
- Do NOT create functions unless explicitly requested  
- Do NOT add safeguards unless explicitly requested  

## Change Management
- Do NOT modify anything unless explicitly instructed  
- Clearly distinguish between inspection and modification tasks  
- When modifying code or fixing errors, always show before vs after  

## Security
- Don't touch .env even if it's requested.
- Do not install any packages even if it's requested. 
- If package insallation is required, then share a uv command with non-latest/safer version so that I can easily C&P.

<!-- # Codex Memory Instruction
After each meaningful project action, update `docs/action_log.md` with a short note.

Keep the log simple and concise:

- What issue or task was handled.
- What changed.
- Any important commands or files involved.
- Current status or next step, if useful.

Do not log every tiny command. Only record actions that help future Codex sessions understand project history.

Also log meaningful errors and their solution when the troubleshooting result is useful for future sessions, even if Codex did not directly fix the issue in code. Include the error, root cause, working command or solution, and current status.

Prefer this format:

```markdown
## YYYY-MM-DD

### Short Title

- Issue/task: ...
- Action taken: ...
- Files changed: ...
- Status: ...
``` -->
