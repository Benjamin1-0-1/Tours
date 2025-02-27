# models/tour.py
from models.ext import db

class Tour(db.Model):
    __tablename__ = 'tours'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    image = db.Column(db.Text, nullable=False)  # store base64 or URL
    description = db.Column(db.Text, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image": self.image,
            "description": self.description
        }
