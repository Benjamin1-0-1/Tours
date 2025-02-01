# backend/app.py
import os
import sys
from flask import Flask
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restx import Api
from models.ext import db
from config import Config
from namespaces import all_namespaces
from routes.auth_routes import auth_bp

load_dotenv()
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Allow requests from React dev server (port 3000)
CORS(app, origins=["http://localhost:3000"])

# Register auth blueprint
app.register_blueprint(auth_bp)

api = Api(
    app,
    version="1.0",
    title="Tours API",
    description="User Profile Operations",
    prefix="/apis"
)

for ns, path in all_namespaces:
    api.add_namespace(ns, path=path)

# Additional routes for home, tours, destinations, about, contact, and request-quote:
@app.route("/api/home", methods=["GET"])
def get_homepage_data():
    data = {
        "heroTitle": "Explore the Roars of the East African Safaris",
        "heroSubtitle": "Experience the wonders of Africa with Mufasa Tours & Travels",
        "heroImage": "https://example.com/images/lion-hero.jpg",
        "aboutTitle": "Mufasa Tours and Travels, Kenya",
        "aboutText": "Welcome to East Africa, a land of adventure, beauty, and unforgettable experiences."
    }
    return jsonify(data), 200

@app.route("/api/tours", methods=["GET"])
def get_tours():
    # In a real app, you would query your Tours model.
    tours_data = [
        {
            "id": 1,
            "title": "Kenya Road Safaris",
            "image": "https://example.com/images/kenya-road-safari.jpg",
            "description": "Experience the savannah and wildlife up close..."
        },
        {
            "id": 2,
            "title": "Kenya Luxury Safaris",
            "image": "https://example.com/images/kenya-luxury-safari.jpg",
            "description": "Indulge in top-class lodges, fine dining..."
        }
    ]
    return jsonify({"tours": tours_data}), 200

@app.route("/api/destinations", methods=["GET"])
def get_destinations():
    destinations_data = [
        {
            "id": 1,
            "name": "Aberdare National Park",
            "image": "https://example.com/images/aberdare.jpg",
            "slug": "aberdare-national-park"
        },
        {
            "id": 2,
            "name": "Nairobi National Park",
            "image": "https://example.com/images/nairobi-np.jpg",
            "slug": "nairobi-national-park"
        }
    ]
    data = {
        "heroTitle": "Travel Destinations in East Africa",
        "heroSubtitle": "Tour and Holiday Destinations for Your Next Adventure",
        "heroImage": "https://example.com/images/destinations-hero.jpg",
        "introText": "Discover breathtaking destinations across East Africa.",
        "destinations": destinations_data
    }
    return jsonify(data), 200

@app.route("/api/destinations/<slug>", methods=["GET"])
def get_destination_detail(slug):
    # Sample hard-coded destination details.
    destinations_detail = {
        "nairobi-national-park": {
            "heroTitle": "Nairobi National Park",
            "heroSubtitle": "Explore Nairobi’s Wildlife",
            "heroImage": "https://example.com/images/nairobi-hero.jpg",
            "topMenu": ["Overview", "Safaris", "Highlights", "Reviews"],
            "sections": [
                {
                    "icon": "fa-map-marker",
                    "title": "Location",
                    "content": "<p>Nairobi National Park is located 7km from Nairobi City...</p>"
                },
                {
                    "icon": "fa-dollar-sign",
                    "title": "Charges",
                    "content": "<p>Entrance fees and safari charges are affordable and vary...</p>"
                }
            ],
            "faqs": [
                {
                    "question": "Where is Nairobi National Park located?",
                    "answer": "It is located 7km from Nairobi’s city center."
                }
            ]
        }
    }
    detail = destinations_detail.get(slug)
    if not detail:
        return jsonify({"message": f"No destination found for slug: {slug}"}), 404
    return jsonify(detail), 200

@app.route("/api/about/our-company", methods=["GET"])
def get_our_company():
    data = {
        "heroTitle": "MUFASA TOURS AND TRAVELS, KENYA",
        "heroSubtitle": "ABOUT US",
        "heroImage": "https://example.com/images/about-hero.jpg",
        "whoWeAre": "<p>We are a leading tour operator dedicated to providing unique safari experiences.</p>",
        "whyChooseUs": [
            {"title": "All-season tours", "content": "We run tours all year round."},
            {"title": "Quality service", "content": "Our staff and guides are world class."}
        ],
        "reviewsIntro": "Traveller Reviews",
        "reviews": [
            {"name": "Aisha M", "source": "TripAdvisor", "text": "An unforgettable experience."},
            {"name": "Toru", "source": "TripAdvisor", "text": "Amazing safari experience!"}
        ],
        "accreditationsTitle": "Our Accreditations",
        "accreditationsLogos": [
            {"img": "https://example.com/images/logo1.png", "alt": "Logo 1"},
            {"img": "https://example.com/images/logo2.png", "alt": "Logo 2"}
        ],
        "finalBannerText": "We are passionate about travel and dedicated to customer satisfaction."
    }
    return jsonify(data), 200

@app.route("/api/about/fleet-guides", methods=["GET"])
def get_fleet_guides():
    data = {
        "heroTitle": "Mufasa Tour Guides and Safari Vehicles",
        "heroSubtitle": "Fleet & Guides",
        "heroImage": "https://example.com/images/fleet-hero.jpg",
        "introParagraph": "<p>Our vehicles and guides are top of the line...</p>",
        "mainSections": [
            {"title": "Tour Guide Company", "content": "<p>We offer expert guides with deep local knowledge...</p>"},
            {"title": "Safari Vehicles", "content": "<p>Our fleet consists of modern, comfortable vehicles...</p>"}
        ],
        "addedFeaturesTitle": "Added Features in Our Cars",
        "addedFeatures": [
            {"img": "https://example.com/images/radio.jpg", "description": "Long-range radios."},
            {"img": "https://example.com/images/fridge.jpg", "description": "On-board fridge."}
        ],
        "operatorsTitle": "Tour Operators in East Africa",
        "operatorsContent": "<p>We are one of the top tour operators in the region.</p>",
        "staffTitle": "MUFASA GUIDES & STAFF",
        "staffMembers": [
            {"name": "David Kanyiri", "img": "https://example.com/images/staff/david.jpg"},
            {"name": "Colin Sempele", "img": "https://example.com/images/staff/colin.jpg"}
        ],
        "privateTourGuideTitle": "Private Tour Guide Services",
        "privateTourGuideText": "<p>Experience personalized tours with our private guide services.</p>",
        "faqTitle": "Fleet & Guides FAQ",
        "faqs": [
            {"question": "What types of vehicles do you offer?", "answer": "We offer 4x4 open-roof vehicles."},
            {"question": "Are your guides licensed?", "answer": "Yes, all our guides are fully licensed."}
        ],
        "showEnquireForm": True
    }
    return jsonify(data), 200

@app.route("/api/about/media", methods=["GET"])
def get_media():
    data = {
        "heroTitle": "MUFASA GALLERY",
        "heroSubtitle": "Photos & Videos",
        "heroImage": "https://example.com/images/media-hero.jpg",
        "photosHeading": "Our Media",
        "photos": [
            {"title": "Fairview Coffee Estate", "thumbnail": "https://example.com/images/fairview.jpg", "type": "image", "url": "https://example.com/high-res/fairview.jpg"},
            {"title": "Discover Kobe", "thumbnail": "https://example.com/images/kobe.jpg", "type": "image", "url": "https://example.com/high-res/kobe.jpg"},
            {"title": "Reteti Elephant Sanctuary", "thumbnail": "https://example.com/images/reteti.jpg", "type": "image", "url": "https://example.com/high-res/reteti.jpg"}
        ],
        "videosHeading": "Our Videos",
        "videos": [
            {"title": "Discovering Kenya With Mufasa Tours", "videoId": "xyz12345"},
            {"title": "Lake Naivasha Resort", "videoId": "abc54321"},
            {"title": "Travelling During Corona Pandemic", "videoId": "def67890"}
        ]
    }
    return jsonify(data), 200

@app.route("/api/contact", methods=["GET"])
def get_contact():
    data = {
        "heroTitle": "Contact the Travel Pros",
        "heroSubtitle": "Let's start planning your adventure",
        "heroImage": "https://example.com/images/contact-hero.jpg",
        "contactInfo": {
            "phone": "+254 757 836 023",
            "locationTitle": "KENYA",
            "locationAddress": ["Norfolk Towers, Kijabe Street", "Block G Rooms 1 & 2, Nairobi."],
            "locationTitle2": "TANZANIA",
            "locationAddress2": ["Gilgal Business Centre, Sakina", "Arusha"]
        },
        "mapEmbed": "<iframe src='https://www.google.com/maps/embed?pb=...' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
    }
    return jsonify(data), 200

@app.route("/api/request-quote", methods=["GET"])
def get_request_quote():
    data = {
        "heroTitle": "REQUEST A QUOTE",
        "heroSubtitle": "Let’s start planning your safari adventure",
        "heroImage": "https://example.com/images/request-hero.jpg",
        "formFields": [
            {"name": "firstName", "label": "First Name", "type": "text", "required": True},
            {"name": "lastName", "label": "Last Name", "type": "text", "required": True},
            {"name": "country", "label": "Country", "type": "select", "required": True, "options": ["United States", "Kenya", "Tanzania", "Uganda", "Rwanda"]},
            {"name": "phoneNumber", "label": "Phone Number", "type": "text", "required": True},
            {"name": "emailAddress", "label": "Email Address", "type": "email", "required": True},
            {"name": "durationOfTour", "label": "Duration of Tour", "type": "text", "required": True},
            {"name": "safariStartDate", "label": "Safari Start Date", "type": "date", "required": True},
            {"name": "safariEndDate", "label": "Safari End Date", "type": "date", "required": True},
            {"name": "numAdults", "label": "Number of Adults", "type": "number", "required": True},
            {"name": "numChildren", "label": "Number of Children", "type": "number", "required": True},
            {"name": "budget", "label": "Estimated Budget (Per Person)", "type": "text", "required": True},
            {"name": "childrenAges", "label": "Age of Children", "type": "checkboxGroup", "options": ["0 - 3 yrs", "4 - 12 yrs", "13 - 18 yrs"]},
            {"name": "currency", "label": "Currency", "type": "select", "required": True, "options": ["USD", "KES", "TZS", "UGX"]},
            {"name": "typeOfSafari", "label": "Type of Safari", "type": "radio", "required": True, "options": ["Bush Only", "Bush & Beach combined", "Beach Only"]},
            {"name": "tourDescription", "label": "Any other Tour Description", "type": "textarea", "required": True},
            {"name": "contactMethod", "label": "How would you like to be contacted?", "type": "checkboxGroup", "options": ["Email", "Whatsapp"]}
        ]
    }
    return jsonify(data), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)
