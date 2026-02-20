# Networking Learning Site

A beginner-friendly networking learning platform with a **React + Tailwind** frontend and a **FastAPI** backend.

## Features

- Lessons for:
  - OSI model
  - IPv4 addressing
  - Subnetting basics
  - Routing basics
  - Common ports and protocols
- Quiz after each lesson
- Subnetting practice generator
- Progress tracking dashboard (stored in browser local storage)
- Responsive, mobile-friendly UI

## Project Structure

```text
networking-learning-site/
├── frontend/
│   ├── src/
│   │   ├── components/      # Dashboard, modules, quizzes, subnet practice
│   │   ├── context/         # Progress tracking context
│   │   ├── data/            # Lesson + quiz sample content
│   │   ├── utils/           # Subnet generator utilities
│   │   ├── App.jsx
│   │   └── App.test.jsx
│   └── ...
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── services/
│   │   └── main.py
│   └── tests/
└── README.md
```

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Tests

### Frontend tests

```bash
cd frontend
npm test
```

### Backend tests

```bash
cd backend
pytest
```
