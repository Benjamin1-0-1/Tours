import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">We’d love to hear from you</p>
        </div>
      </header>

      <section className="contact-intro">
        <p>
          Whether you’re ready to book a safari, have questions about our
          services, or just want to say hello, drop us a line below or use
          any of the methods listed.
        </p>
      </section>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Our Contacts</h2>
          <div className="info-block">
            <h3>Phone</h3>
            <a href="tel:+254700123456">+254 700 123 456</a>
          </div>

          <div className="info-block">
            <h3>Email</h3>
            <a href="mailto:info@mufasatours.co.ke">info@mufasatours.co.ke</a>
          </div>


          <div className="info-block">
            <h3>Working Hours</h3>
            <p>Mon–Fri: 8 am – 6 pm<br/>
              Sat & Sun: 9 am – 2 pm<br/>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={e => { e.preventDefault(); alert('Thank you!'); }}>
            <label>
              Name<span>*</span>
              <input type="text" name="name" required />
            </label>

            <label>
              Email<span>*</span>
              <input type="email" name="email" required />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" />
            </label>

            <label>
              Message<span>*</span>
              <textarea name="message" rows="5" required />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
)}
