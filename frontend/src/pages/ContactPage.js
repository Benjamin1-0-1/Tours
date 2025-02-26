import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/contact')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch contact data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Contact Info...</div>;
  }

  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    contactInfo,
    mapEmbed
  } = data;

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          height: '300px',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ background:'rgba(0,0,0,0.3)', padding:'1rem', borderRadius:'8px' }}>
          <h1 style={{ color:'#fff', margin:0 }}>{heroTitle}</h1>
          <p style={{ color:'#fff', margin:0 }}>{heroSubtitle}</p>
        </div>
      </div>

      {/* Intro text */}
      <div style={{ textAlign:'center', padding:'2rem' }}>
        <h2>Contact the Travel Pros</h2>
        <p>Your journey starts here – let’s connect and start planning your trip.</p>
      </div>

      {/* Two-column layout */}
      <div style={{ display:'flex', gap:'2rem', padding:'2rem' }}>
        {/* Left column: contact info */}
        <div style={{ flex:'1 1 300px' }}>
          <h3>Our Contacts</h3>
          <p><strong>Phone</strong><br/>{contactInfo.phone}</p>
          <p><strong>Location</strong></p>
          <p>
            <strong>{contactInfo.locationTitle}</strong><br/>
            {contactInfo.locationAddress.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </p>
          <p>
            <strong>{contactInfo.locationTitle2}</strong><br/>
            {contactInfo.locationAddress2.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </p>
        </div>

        {/* Right column: form (demo) */}
        <div style={{ flex:'2 1 500px' }}>
          <h3>Contact Us</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle form submission
            }}
            style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}
          >
            <div style={{ display:'flex', flexDirection:'column' }}>
              <label>First Name *</label>
              <input type="text" name="firstName" required />
            </div>

            <div style={{ display:'flex', flexDirection:'column' }}>
              <label>Last Name *</label>
              <input type="text" name="lastName" required />
            </div>
            {/* Add more fields for phone, email, safari start date, etc. */}

            <div style={{ gridColumn:'span 2', marginTop:'1rem' }}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Embedded map */}
      <div style={{ padding:'2rem' }}>
        <div dangerouslySetInnerHTML={{ __html: mapEmbed }} />
      </div>
    </div>
  );
}

export default ContactPage;
// awesome
