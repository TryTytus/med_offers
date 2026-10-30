from contextlib import asynccontextmanager
from typing import Sequence

from database import SessionDep, init_db
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

@app.get(
    "/posters",
    operation_id="get_posters",
    response_model=Sequence[Poster],
    tags=["posters"],
)
async def posters(session: SessionDep) -> Sequence[Poster]:
    return session.exec(select(Poster).offset(0).limit(30)).all()
