from collections.abc import Sequence
from contextlib import asynccontextmanager

from database import DB, init_db
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.poster import Poster
from seeder import seed_db
from sqlmodel import select


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    seed_db()
    yield

origins = [
    "http://localhost:5173",
]


app = FastAPI(
    title="Med Offers API",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

def query_pagination(page: int, size = 15):
    if page < 0 or size <= 0:
        return (0, 15)
    offset = page * size
    return (offset, size)


@app.get(
    "/posters",
    operation_id="get_posters",
    response_model=Sequence[Poster],
    tags=["posters"],
)
async def posters(db: DB, page: int = 0, size: int = 15) -> Sequence[Poster]:
    offset, limit = query_pagination(page, size)
    return db.exec(select(Poster).offset(offset).limit(limit)).all()
