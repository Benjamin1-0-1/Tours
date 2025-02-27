# models/request_quote.py
from models.ext import db
import json

class RequestQuote(db.Model):
    __tablename__ = 'request_quote'
    id = db.Column(db.Integer, primary_key=True)
    heroTitle = db.Column(db.String(200))
    heroSubtitle = db.Column(db.String(200))
    heroImage = db.Column(db.Text)
    formFields = db.Column(db.Text)  # JSON array of field definitions

    def serialize(self):
        return {
            "heroTitle": self.heroTitle,
            "heroSubtitle": self.heroSubtitle,
            "heroImage": self.heroImage,
            "formFields": json.loads(self.formFields) if self.formFields else []
        }
