# models/media.py
from models.ext import db
import json

class Media(db.Model):
    __tablename__ = 'media'
    id = db.Column(db.Integer, primary_key=True)
    heroTitle = db.Column(db.String(200))
    heroSubtitle = db.Column(db.String(200))
    heroImage = db.Column(db.Text)
    photosHeading = db.Column(db.String(200))
    photos = db.Column(db.Text)  # JSON array


    def serialize(self):
        return {
            "heroTitle": self.heroTitle,
            "heroSubtitle": self.heroSubtitle,
            "heroImage": self.heroImage,
            "photosHeading": self.photosHeading,
            "photos": json.loads(self.photos) if self.photos else []
        }
