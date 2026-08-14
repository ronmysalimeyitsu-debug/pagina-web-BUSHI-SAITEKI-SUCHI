from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow local frontend dev to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/menu")
def menu():
    return [
        {"id": 1, "name": "Sushi Rolls", "price": 12.5, "desc": "Rolls variados", "img": "/menu/item1.png"},
        {"id": 2, "name": "Nigiri", "price": 9.0, "desc": "Pescado sobre arroz", "img": "/menu/item2.png"},
        {"id": 3, "name": "Sashimi", "price": 14.0, "desc": "Pescado en láminas", "img": "/menu/item3.png"},
    ]
