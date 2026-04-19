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

1: Run this in Host: export GCP_ACCESS_TOKEN="$(gcloud auth print-access-token)"
2: Rebuild the container (devcontainer.json must have the following command)
"containerEnv": {
  "GCP_ACCESS_TOKEN": "${localEnv:GCP_ACCESS_TOKEN}"
},
3: Check with echo ${GCP_ACCESS_TOKEN:0:20}


## 6. Gemini Authentication (Service Account) for Gemini API
- Using Gemini API only with the permission from the company (assuming that there is a limit for the GeminiAPI usage)
- **GCP service account JSON** is stored securely on the **host** (`~/.config/secrets/gcp/sa.json`).
- The json credential is **mounted read-only into the container** and never stored in the repo or image.
- Example repo using GeminiAPI is the "attrition_analysis".
- The container references it via `GOOGLE_APPLICATION_CREDENTIALS` for remote env.
- Test with echo $GOOGLE_APPLICATION_CREDENTIALS (in terminal)
- Another testing command in a python script
from google.cloud import bigquery
client = bigquery.Client()
print(client.project)

## 7. Claude Installation
- curl -fsSL https://claude.ai/install.sh | bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
