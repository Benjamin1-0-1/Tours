# routes/request_quote_routes.py
from flask import Blueprint, jsonify
from models.request_quote import RequestQuote

request_quote_bp = Blueprint('request_quote', __name__)

@request_quote_bp.route("/api/request-quote", methods=["GET"])
def get_request_quote():
    rq = RequestQuote.query.first()
    return jsonify(rq.serialize()), 200
