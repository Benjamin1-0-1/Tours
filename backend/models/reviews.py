from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from models.ext import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    author = Column(String(100), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=True)
    destination_id = Column(Integer, ForeignKey("destinations.id"), nullable=False)


    destination = relationship("Destination", back_populates="reviews")
