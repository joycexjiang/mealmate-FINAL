from core import app

@app.route('/')
def index():
    return 'MealMate'