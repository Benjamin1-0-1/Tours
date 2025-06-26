# seed.py
from app import app
from models.ext import db
from models.tour import Tour
from models.reviews import Review


def seed():
    with app.app_context():
        # DEV ONLY: reset schema
        db.drop_all()
        db.create_all()
        print("Seeding database...")

        # --- Seed Tours ---
        tours = [
            Tour(
                title="Kenya Road Safaris",
                image="/images/img1.jpeg",
                description="Experience the savannah and wildlife up close on our classic road safari."
            ),
            Tour(
                title="Kenya Luxury Safaris",
                image="/images/img2.jpeg",
                description="Indulge in top-class lodges, fine dining, and unmatched service in style."
            ),
            Tour(
                title="Kenya–Tanzania Migration Safari",
                image="/images/img3.jpeg",
                description="Witness the Great Migration across the Masai Mara and Serengeti borders."
            ),
            Tour(
                title="Masai Mara Adventures",
                image="/images/img4.jpeg",
                description="Get close to the Big Five with our expert guides in the heart of the Mara."
            ),
            Tour(
                title="Amboseli Day Trip",
                image="/images/img5.jpeg",
                description="Marvel at the herds of elephants against the backdrop of Mount Kilimanjaro."
            )
        ]
        db.session.add_all(tours)
        db.session.commit()
        print(f"Added {len(tours)} tours.")

        # --- Seed Reviews ---
        reviews = [
            Review(author="Alice Johnson", rating=5, comment="An unforgettable experience!"),
            Review(author="Michael Lee", rating=4, comment="Guides were excellent, highly recommend."),
            Review(author="Sophie Martinez", rating=5, comment="Best safari ever, will book again."),
            Review(author="David Kim", rating=3, comment="Great tour but long drives."),
            Review(author="Emma Clark", rating=4, comment="Loved every moment in the Mara.")
        ]
        db.session.add_all(reviews)
        db.session.commit()
        print(f"Added {len(reviews)} reviews.")

if __name__ == "__main__":
    seed()
