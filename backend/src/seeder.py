from database import engine
from faker import Faker
from models import Poster
from sqlalchemy import delete
from sqlmodel import Session


def seed_db():
    fake = Faker()

    with Session(engine) as session:
        session.exec(delete(Poster))
        session.add_all([
                Poster(
                    title=fake.name(),
                    description=fake.text(),
                    price=fake.random_int(0, 1000)
                ) for _ in range(1000)
            ])
        session.commit()