# routes/contact_routes.py
from flask import Blueprint, jsonify
from models.contact import Contact

contact_bp = Blueprint('contact', __name__)

@contact_bp.route("/api/contact", methods=["GET"])
def get_contact():
    contact = Contact.query.first()
    return jsonify(contact.serialize()), 200
