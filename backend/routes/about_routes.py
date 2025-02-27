# routes/about_routes.py
from flask import Blueprint, jsonify
from models.about import OurCompany
from models.fleet_guides import FleetGuides
from models.media import Media

about_bp = Blueprint('about', __name__)

@about_bp.route("/api/about/our-company", methods=["GET"])
def get_our_company():
    company = OurCompany.query.first()
    return jsonify(company.serialize()), 200

@about_bp.route("/api/about/fleet-guides", methods=["GET"])
def get_fleet_guides():
    fleet = FleetGuides.query.first()
    return jsonify(fleet.serialize()), 200

@about_bp.route("/api/about/media", methods=["GET"])
def get_media():
    media = Media.query.first()
    return jsonify(media.serialize()), 200
