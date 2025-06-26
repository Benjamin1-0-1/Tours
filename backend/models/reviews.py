from sqlalchemy import Column, Integer, String, Text
from models.ext import db
class Review(db.Model):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    author = Column(String(100), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=True)
