# app.py
import os
from flask import Flask
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS
from models.ext import db
from config import Config
from routes.tour_routes import tour_bp


load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Allow requests from React (port 3000)
CORS(app, origins=["http://localhost:3000"])

app.register_blueprint(tour_bp)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)
