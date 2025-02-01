import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FleetGuidesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/about/fleet-guides')
      .then(res => setData(res.data))
      .catch(err => console.error("Failed to fetch fleet & guides data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Fleet & Guides info...</div>;
  }

  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    introParagraph,
    mainSections,
    addedFeaturesTitle,
    addedFeatures,
    operatorsTitle,
    operatorsContent,
    staffTitle,
    staffMembers,
    privateTourGuideTitle,
    privateTourGuideText,
    faqTitle,
    faqs,
    showEnquireForm
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
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
          <h1 style={{ color: '#fff', margin: 0 }}>{heroTitle}</h1>
          <p style={{ color: '#fff', margin: 0 }}>{heroSubtitle}</p>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div style={{ padding: '2rem' }}>
        <div dangerouslySetInnerHTML={{ __html: introParagraph }} />
      </div>

      {/* Main Sections */}
      {mainSections && mainSections.map((section, idx) => (
        <div key={idx} style={{ padding: '2rem' }}>
          <h2>{section.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: section.content }}
            style={{ marginTop: '1rem' }}
          />
        </div>
      ))}

      {/* Added Features */}
      <div style={{ padding: '2rem' }}>
        <h2>{addedFeaturesTitle}</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {addedFeatures && addedFeatures.map((feature, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 200px',
                textAlign: 'center',
                marginBottom: '1rem'
              }}
            >
              <img
                src={feature.img}
                alt="feature"
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
              <p style={{ marginTop: '0.5rem' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Operators */}
      <div style={{ padding: '2rem' }}>
        <h2>{operatorsTitle}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: operatorsContent }}
          style={{ marginTop: '1rem' }}
        />
      </div>

      {/* Staff Grid */}
      <div style={{ padding: '2rem' }}>
        <h2>{staffTitle}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          {staffMembers && staffMembers.map((staff, index) => (
            <div key={index} style={{ flex: '1 1 200px', textAlign: 'center' }}>
              <img
                src={staff.img}
                alt={staff.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h4 style={{ marginTop: '0.5rem' }}>{staff.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Private Tour Guide Services */}
      <div style={{ padding: '2rem', background: '#fafafa' }}>
        <h2>{privateTourGuideTitle}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: privateTourGuideText }}
          style={{ marginTop: '1rem' }}
        />
      </div>

      {/* FAQ */}
      <div style={{ padding: '2rem' }}>
        <h2>{faqTitle}</h2>
        {faqs && faqs.map((f, idx) => (
          <details key={idx} style={{ marginBottom: '1rem' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              {f.question}
            </summary>
            <div style={{ marginTop: '0.5rem' }}>
              {f.answer}
            </div>
          </details>
        ))}
      </div>

      {/* Enquire Form (optional) */}
      {showEnquireForm && (
        <div style={{ padding: '2rem' }}>
          <h2>Enquire Now</h2>
          <form>
            {/* Basic example fields */}
            <label>First Name *</label>
            <input type="text" name="firstName" required style={{ display: 'block', marginBottom: '1rem' }} />

            <label>Last Name *</label>
            <input type="text" name="lastName" required style={{ display: 'block', marginBottom: '1rem' }} />

            <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FleetGuidesPage;
