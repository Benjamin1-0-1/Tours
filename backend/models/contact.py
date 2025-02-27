# models/contact.py
from models.ext import db
import json

class Contact(db.Model):
    __tablename__ = 'contacts'
    id = db.Column(db.Integer, primary_key=True)
    heroTitle = db.Column(db.String(200))
    heroSubtitle = db.Column(db.String(200))
    heroImage = db.Column(db.Text)
    phone = db.Column(db.String(50))
    locationTitle = db.Column(db.String(100))
    locationAddress = db.Column(db.Text)  # JSON array
    locationTitle2 = db.Column(db.String(100))
    locationAddress2 = db.Column(db.Text)  # JSON array
    mapEmbed = db.Column(db.Text)

    def serialize(self):
        return {
            "heroTitle": self.heroTitle,
            "heroSubtitle": self.heroSubtitle,
            "heroImage": self.heroImage,
            "phone": self.phone,
            "locationTitle": self.locationTitle,
            "locationAddress": json.loads(self.locationAddress) if self.locationAddress else [],
            "locationTitle2": self.locationTitle2,
            "locationAddress2": json.loads(self.locationAddress2) if self.locationAddress2 else [],
            "mapEmbed": self.mapEmbed
        }
