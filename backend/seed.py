# seed.py
import json
from app import app
from models.ext import db
from models.tour import Tour
from models.destination import Destination
from models.about import OurCompany
from models.reviews import Review
from models.fleet_guides import FleetGuides
from models.media import Media
from models.contact import Contact
from models.request_quote import RequestQuote


def seed():
    with app.app_context():
        # Drop all tables and recreate them (use with caution in production)
        db.drop_all()
        db.create_all()
        print("Database being seeded.")

        # --- Seed Tours ---
        tour1 = Tour(
            title="Kenya Road Safaris",
            image="frontend/public/images/img1.jpg",
            description="Experience the savannah and wildlife up close..."
        )
        tour2 = Tour(
            title="Kenya Luxury Safaris",
            image="frontend/public/images/img1.jpg",
            description="Indulge in top-class lodges, fine dining, and unmatched service."
        )
        db.session.add_all([tour1, tour2])

        # --- Seed Destinations ---
        destination1 = Destination(
            name="Aberdare National Park",
            image="frontend/public/images/img1.jpg",
            intro_text="Discover the beauty of Aberdare National Park...",
            slug="aberdare-national-park",
            accreditationsTitle="Our Accreditations",
            accreditationsLogos=json.dumps([
                {"img": "frontend/public/images/img1.jpg", "alt": "Logo 1"},
                {"img": "frontend/public/images/img1.jpg", "alt": "Logo 2"}
            ]),
            whyChooseUs=json.dumps([
                {"title": "All-season tours", "content": "We run tours all year round."},
                {"title": "Quality service", "content": "Our staff and guides are world class."}
            ]),

        )
        destination2 = Destination(
            name="Nairobi National Park",
            image="frontend/public/images/img1.jpg",
            intro_text="Discover the beauty of Aberdare National Park...",
            slug="nairobi-national-park",
            accreditationsTitle="Our Accreditations",
            whyChooseUs=json.dumps([
                {"title": "All-season tours", "content": "We run tours all year round."},
                {"title": "Quality service", "content": "Our staff and guides are world class."}
            ]),
            reviewsIntro="Traveller Reviews",
            reviews=[
                Review(
                    author="Alice",
                    rating=5,
                    comment="Absolutely stunning experience!"
                ),
                Review(
                    author="Bob",
                    rating=4,
                    comment="Great—just watch out for the traffic!"
                )
                ],
        )
        db.session.add_all([destination1, destination2])

        # --- Seed Fleet & Guides ---
        fleet_guides = FleetGuides(
            heroTitle="Mufasa Tour Guides and Safari Vehicles",
            heroSubtitle="Fleet & Guides",
            heroImage="frontend/public/images/img1.jpg",
            operatorsTitle="Tour Operators in East Africa",
            operatorsContent="<p>We are one of the top tour operators in the region.</p>",
            staffTitle="MUFASA GUIDES & STAFF",
            staffMembers=json.dumps([
                {"name": "David Kanyiri", "img": "frontend/public/images/img1.jpg"},
                {"name": "Colin Sempele", "img": "frontend/public/images/img1.jpg"}
            ]),
            privateTourGuideTitle="Private Tour Guide Services",
            privateTourGuideText="<p>Experience personalized tours with our private guide services.</p>",
            faqTitle="Fleet & Guides FAQ",
            faqs=json.dumps([
                {"question": "What types of vehicles do you offer?", "answer": "We offer 4x4 open-roof vehicles."},
                {"question": "Are your guides licensed?", "answer": "Yes, all our guides are fully licensed."}
            ])
        )
        db.session.add(fleet_guides)

        # --- Seed Media ---
        media = Media(
            heroTitle="MUFASA GALLERY",
            heroSubtitle="Photos & Videos",
            heroImage="frontend/public/images/img1.jpg",
            photosHeading="Our Media",
            photos=json.dumps([
                {"title": "Fairview Coffee Estate", "thumbnail": "frontend/public/images/img1.jpg", "type": "image", "url": "frontend/public/images/img1.jpg"},
                {"title": "Discover Kobe", "thumbnail": "frontend/public/images/img1.jpg", "type": "image", "url":"frontend/public/images/img1.jpg"},
                {"title": "Reteti Elephant Sanctuary", "thumbnail": "frontend/public/images/img1.jpg", "type": "image", "url": "frontend/public/images/img1.jpg"}
            ]),
        )
        db.session.add(media)

        # --- Seed Contact ---
        contact = Contact(
            heroTitle="Contact the Travel Pros",
            heroSubtitle="Let's start planning your adventure",
            heroImage="frontend/public/images/img1.jpg",
            phone="+254 757 836 023",
            locationTitle="KENYA",
            locationAddress=json.dumps(["Norfolk Towers, Kijabe Street", "Block G Rooms 1 & 2, Nairobi."]),
            locationTitle2="TANZANIA",
            locationAddress2=json.dumps(["Gilgal Business Centre, Sakina", "Arusha"]),

        )
        db.session.add(contact)

        # --- Seed Request Quote ---
        request_quote = RequestQuote(
            heroTitle="REQUEST A QUOTE",
            heroSubtitle="Let’s start planning your safari adventure",
            heroImage="frontend/public/images/img1.jpg",
            formFields=json.dumps([
                {"name": "firstName", "label": "First Name", "type": "text", "required": True},
                {"name": "lastName", "label": "Last Name", "type": "text", "required": True},
                {"name": "country", "label": "Country", "type": "select", "required": True, "options": ["United States", "Kenya", "Tanzania", "Uganda", "Rwanda"]},
                {"name": "phoneNumber", "label": "Phone Number", "type": "text", "required": True},
                {"name": "emailAddress", "label": "Email Address", "type": "email", "required": True},
                {"name": "safariStartDate", "label": "Safari Start Date", "type": "date", "required": True},
                {"name": "safariEndDate", "label": "Safari End Date", "type": "date", "required": True},
                {"name": "numAdults", "label": "Number of Adults", "type": "number", "required": True},
                {"name": "budget", "label": "Estimated Budget (Per Person)", "type": "text", "required": True},
            ])
        )
        db.session.add(request_quote)

        db.session.commit()
        print("Database seeded successfully.")

if __name__ == "__main__":
    seed()
