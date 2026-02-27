# AI / Development Security Policy

## 1. Agent Control
- Only **one AI agent (Codex)** is allowed.
- All other assistants (e.g., Copilot) are disabled.
- AI agent runs **only inside Docker containers**.

## 2. Container Isolation
- (Maybe Network disabled (`--network=none`))
- Filesystem access limited to project code (ideally `/src` only).
- **No secrets or credentials mounted.**
- Minimal privileges (no extra capabilities).

## 3. Git Security
- All Git operations run **only on the host machine**.
- Containers do not require Git access.
- No Git credentials nor SSH key mounts (`~/.ssh` not mounted).

## 4. Data Security
- Sensitive data (client data, production data) is **never stored locally**.
- Data remains in secure cloud environments (e.g., BigQuery).
- Only minimal or anonymized extracts may be used locally if required but won't be stored locally.

## 5. Google Cloud Authentication
- Use **short-lived access tokens (~1 hour)** only.
- The tokens will be expired in an hour
- Need to perform the following script only when necessary
gcloud auth application-default print-access-token
