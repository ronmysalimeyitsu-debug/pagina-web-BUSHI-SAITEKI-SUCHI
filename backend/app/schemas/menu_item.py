from pydantic import BaseModel

class MenuItemSchema(BaseModel):
    id: int
    name: str
    price: float
