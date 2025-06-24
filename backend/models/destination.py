# models/destination.py
from models.ext import db
from models.reviews import Review
from sqlalchemy.orm import relationship

class Destination(db.Model):
    __tablename__ = 'destinations'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.Text, nullable=False)
    intro_text = db.Column(db.Text)
    slug = db.Column(db.String(100),
    unique=True, nullable=False)

    accreditationsTitle = db.Column(db.String(100), nullable=True)
    accreditationsLogos = db.Column(db.Text, nullable=True)

    whyChooseUs = db.Column(db.Text, nullable=True)
    reviewsIntro = db.Column(db.String(100), nullable=True)
    reviews = relationship(
        "Review",
        back_populates="destination",
        cascade="all, delete-orphan",
    )

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "slug": self.slug,
            "introText": self.intro_text
        }
