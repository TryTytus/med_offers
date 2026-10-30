from contextlib import asynccontextmanager

from database import SessionDep, init_db
from fastapi import FastAPI
from models.poster import Poster
from seeder import seed_db
from sqlmodel import select


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    seed_db()
    yield


app = FastAPI(lifespan=lifespan)

@app.get('/posters')
async def posters(session: SessionDep):
    return session.exec(select(Poster)).all()


