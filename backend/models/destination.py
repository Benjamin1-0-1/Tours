# models/destination.py
from models.ext import db

class Destination(db.Model):
    __tablename__ = 'destinations'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.Text, nullable=False)
    slug = db.Column(db.String(100), unique=True, nullable=False)
    intro_text = db.Column(db.Text)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "slug": self.slug,
            "introText": self.intro_text
        }
