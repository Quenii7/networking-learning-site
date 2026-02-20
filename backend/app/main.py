from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.learning import router as learning_router

app = FastAPI(title="Networking Learning API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(learning_router)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
