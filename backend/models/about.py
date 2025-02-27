# models/about.py
from models.ext import db
import json

class OurCompany(db.Model):
    __tablename__ = 'our_company'
    id = db.Column(db.Integer, primary_key=True)
    heroTitle = db.Column(db.String(200))
    heroSubtitle = db.Column(db.String(200))
    heroImage = db.Column(db.Text)
    whoWeAre = db.Column(db.Text)
    # We store JSON data (e.g., whyChooseUs, reviews) as a text string.
    whyChooseUs = db.Column(db.Text)  # e.g., JSON array
    reviewsIntro = db.Column(db.String(200))
    reviews = db.Column(db.Text)       # JSON array
    accreditationsTitle = db.Column(db.String(200))
    accreditationsLogos = db.Column(db.Text)  # JSON array

    def serialize(self):
        return {
            "heroTitle": self.heroTitle,
            "heroSubtitle": self.heroSubtitle,
            "heroImage": self.heroImage,
            "whoWeAre": self.whoWeAre,
            "whyChooseUs": json.loads(self.whyChooseUs) if self.whyChooseUs else [],
            "reviewsIntro": self.reviewsIntro,
            "reviews": json.loads(self.reviews) if self.reviews else [],
            "accreditationsTitle": self.accreditationsTitle,
            "accreditationsLogos": json.loads(self.accreditationsLogos) if self.accreditationsLogos else []
        }
