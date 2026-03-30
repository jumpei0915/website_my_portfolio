FROM python:3.11-slim

WORKDIR /app

# System deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgomp1 \
    curl \
    ca-certificates \
    fontconfig \
    fonts-noto-cjk \
 && fc-cache -f -v \
 && rm -rf /var/lib/apt/lists/*

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install uv
RUN pip install --no-cache-dir uv

# ---- deps layer (cache-friendly) ----
COPY pyproject.toml uv.lock ./
RUN uv sync --no-install-project

# ---- app code ----
COPY . .

CMD ["bash"]