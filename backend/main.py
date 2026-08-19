@app.get("/api/menu")
def menu():
    return [
        {
            "id": 1, 
            "name": "Fuji Roll", 
            "price": 15.0, 
            "desc": "Rollo tempurizado con cobertura de cereal, queso crema, aguacate, cebollín y camarones.", 
            "img": "/fuji-roll.jfif" 
        },
        {
            "id": 2, 
            "name": "Saiteki Ocean", 
            "price": 18.0, 
            "desc": "Ensalada de wakame y cangrejo, salmón al grill y sashimi de atún sellado.", 
            "img": "/saiteki-ocean.jfif"
        },
        {
            "id": 3, 
            "name": "Zen Roll", 
            "price": 12.0, 
            "desc": "Uramaki con zanahoria kimpa, pepino, aguacate y cebollín.", 
            "img": "/zen-roll.jfif"
        },
        {
            "id": 4, 
            "name": "Sashimi de Salmón", 
            "price": 14.0, 
            "desc": "Cortes frescos de salmón premium de alta calidad.", 
            "img": "/sashimi-de-salmon.jfif"
        },
        {
            "id": 5, 
            "name": "Bushi Crispy Pizza", 
            "price": 16.0, 
            "desc": "Nuestra deliciosa pizza sushi crujiente con los mejores ingredientes.", 
            "img": "/bushi-crispy-pizza.jfif"
        }
    ]