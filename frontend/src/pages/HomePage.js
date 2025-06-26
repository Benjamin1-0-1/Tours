import { Link } from 'react-router-dom';
import './HomePage.css';

const aboutData = {
  aboutTitle: 'Welcome to MUFASA Tours & Travels',
  aboutText: 'Experience the best East African safaris with our expert guides and tailor-made packages. Your adventure starts here.'
};

const safariPackages = [
  { id: 1, title: 'Kenya Road Safaris',       subtitle: 'Explore off-road trails and hidden gems',       placeholderUrl: '/images/img1.jpeg', imageUrl: '/images/img8.jpeg', link: '/' },
  { id: 2, title: 'Kenya Luxury Safaris',     subtitle: 'Indulge in premium tented camps',                placeholderUrl: '/images/img2.jpeg', imageUrl: '/images/img5.jpeg', link: '/' },
  { id: 3, title: 'Kenya–Tanzania Safaris',   subtitle: 'Witness the Great Migration',                   placeholderUrl: '/images/img3.jpeg', imageUrl: '/images/img1.jpeg', link: '/' },
  { id: 4, title: 'Masai Mara Adventures',    subtitle: 'Get close to the Big Five',                     placeholderUrl: '/images/img8.jpeg', imageUrl: '/images/img5.jpeg', link: '/' },
  { id: 5, title: 'Amboseli Day Trip',        subtitle: 'Elephants with Kilimanjaro views',              placeholderUrl: '/images/img5.jpeg', imageUrl: '/images/img3.jpeg', link: '/' },
  { id: 6, title: 'Lake Nakuru Retreat',      subtitle: 'Flamingo-filled shores and peaceful lodges',    placeholderUrl: '/images/img6.jpeg', imageUrl: '/images/img2.jpeg', link: '/' },
  { id: 7, title: 'Tsavo East Safari',        subtitle: 'Red earth landscapes & desert-adapted wildlife', placeholderUrl: '/images/img7.jpeg', imageUrl: '/images/img5.jpeg', link: '/' },
  { id: 8, title: 'Samburu Cultural Tour',    subtitle: 'Meet the Samburu people & traditions',          placeholderUrl: '/images/img8.jpeg', imageUrl: '/images/img2.jpeg', link: '/' }
];

const features = [
  { id: 1, icon: '🐾', title: 'Leading Tour Operator',    text: 'We are among Kenya’s top-rated safari specialists, ensuring seamless adventures.' },
  { id: 2, icon: '🐾', title: 'Tailor-Made Packages',      text: 'Customizable itineraries to fit every traveler’s dream.' },
  { id: 3, icon: '🐾', title: 'Expert Guides',            text: 'Our certified guides bring you closer to wildlife and culture.' }
];

const faqItems = [
  {
    id: 1,
    question: 'What is included in the safari packages?',
    answer: 'All packages include accommodation, game drives, park fees, and meals as outlined in each itinerary.'
  },
  {
    id: 2,
    question: 'How do I book a safari?',
    answer: 'Select your preferred package, fill out the quote request form, and we will be in touch to confirm your booking.'
  },
  {
    id: 3,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations more than 30 days before departure receive a full refund, less any transaction fees.'
  },
  {
    id: 4,
    question: 'Are international flights included?',
    answer: 'International flights are not included, but we can assist with flight bookings upon request.'
  },
  {
    id: 5,
    question: 'Can I customize my itinerary?',
    answer: 'Yes! We specialize in tailor-made safaris. Let us know your interests and we will create a unique itinerary.'
  }
];

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-logo">
        <Link to="/" className="logo-link">MUFASA Tours &amp; Travels</Link>
      </div>

      <section className="intro-section">
        <h1>Welcome to MUFASA Tours &amp; Travels</h1>
        <p>
          From the rolling plains of the Masai Mara to the sparkling shores of Lake Nakuru,
          MUFASA Tours &amp; Travels crafts journeys that blend wildlife, culture, and
          comfort. Whether it’s a private safari or a group expedition, let us unlock
          the magic of East Africa for you.
        </p>
        <hr className="section-separator" />
      </section>

      <section className="about-section">
        <h2 className="about-title">{aboutData.aboutTitle}</h2>
        <p className="about-text">{aboutData.aboutText}</p>
      </section>

      <h3 className="packages-heading">Our Safari Packages</h3>
      <div className="packages-grid">
        {safariPackages.map(pkg => (
          <Link
            key={pkg.id}
            to={pkg.link}
            className="card"
            style={{ backgroundImage: `url(${pkg.placeholderUrl})` }}
          >
            <div className="card-overlay" />
            <img src={pkg.imageUrl} alt={pkg.title} className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{pkg.title}</h4>
              <p className="card-subtitle">{pkg.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="why-section">
        <h3 className="why-heading">WHY CHOOSE US</h3>
        <div className="why-underline" />
        <div className="features-grid">
          {features.map(f => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h3 className="faq-heading">Frequently Asked Questions</h3>
        <hr className="section-separator" />
        <div className="faq-list">
          {faqItems.map(item => (
            <details key={item.id} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
