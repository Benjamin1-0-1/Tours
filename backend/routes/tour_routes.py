# routes/tour_routes.py
from flask import Blueprint, jsonify
from models.tour import Tour

tour_bp = Blueprint('tours', __name__)

@tour_bp.route("/api/tours", methods=["GET"])
def get_tours():
    tours = Tour.query.all()
    return jsonify({"tours": [t.serialize() for t in tours]}), 200
