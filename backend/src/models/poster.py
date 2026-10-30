from sqlmodel import Field, SQLModel


class Poster(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(index=True)
    price: int | None = Field(default=None, index=True)
    description: str = Field(index=True)

