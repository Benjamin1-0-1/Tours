# routes/destination_routes.py
from flask import Blueprint, jsonify
from models.destination import Destination

destination_bp = Blueprint('destinations', __name__)

@destination_bp.route("/api/destinations", methods=["GET"])
def get_destinations():
    destinations = Destination.query.all()
    return jsonify({"destinations": [d.serialize() for d in destinations]}), 200

@destination_bp.route("/api/destinations/<slug>", methods=["GET"])
def get_destination_detail(slug):
    destination = Destination.query.filter_by(slug=slug).first()
    if not destination:
        return jsonify({"message": f"No destination found for slug: {slug}"}), 404
    return jsonify(destination.serialize()), 200
