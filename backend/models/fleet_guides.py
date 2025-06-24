# models/fleet_guides.py
from models.ext import db
import json

class FleetGuides(db.Model):
    __tablename__ = 'fleet_guides'
    id = db.Column(db.Integer, primary_key=True)
    heroTitle = db.Column(db.String(200))
    heroSubtitle = db.Column(db.String(200))
    heroImage = db.Column(db.Text)
    operatorsTitle = db.Column(db.String(200))
    operatorsContent = db.Column(db.Text)
    staffTitle = db.Column(db.String(200))
    staffMembers = db.Column(db.Text)
    privateTourGuideTitle = db.Column(db.String(200))
    privateTourGuideText = db.Column(db.Text)
    faqTitle = db.Column(db.String(200))
    faqs = db.Column(db.Text) 

    def serialize(self):
        return {
            "heroTitle": self.heroTitle,
            "heroSubtitle": self.heroSubtitle,
            "heroImage": self.heroImage,
            "operatorsTitle": self.operatorsTitle,
            "operatorsContent": self.operatorsContent,
            "staffTitle": self.staffTitle,
            "staffMembers": json.loads(self.staffMembers) if self.staffMembers else [],
            "privateTourGuideTitle": self.privateTourGuideTitle,
            "privateTourGuideText": self.privateTourGuideText,
            "faqTitle": self.faqTitle,
            "faqs": json.loads(self.faqs) if self.faqs else []
        }
