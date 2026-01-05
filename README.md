# DevOps Project

Monorepo for a free-tier stack:

- `frontend/` - Create React App
- `backend/` - Django + DRF
- `docker-compose.yml` - local Postgres

## Local setup

1) Start Postgres

```bash
docker compose up -d
```

2) Backend

```bash
cd backend
.\.venv\Scripts\python -m pip install -r requirements.txt
.\.venv\Scripts\python manage.py migrate
.\.venv\Scripts\python manage.py runserver
```

Health check:

```
http://127.0.0.1:8000/health/
```

3) Frontend

```bash
cd frontend
npm.cmd install
npm.cmd start
```

## Env files

- Copy `.env.example` → `.env` at repo root for local Postgres.
- Never commit `.env`.
