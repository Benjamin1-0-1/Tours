import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DestinationDetailPage() {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/destinations/${slug}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch destination detail:", err);
        setError("Failed to fetch destination detail");
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ padding: '2rem' }}>Loading destination details...</div>;
  if (error) return <div style={{ padding: '2rem' }}>{error}</div>;
  if (!detail) return <div style={{ padding: '2rem' }}>No destination data found</div>;

  const { heroTitle, heroSubtitle, heroImage, topMenu, sections, faqs } = detail;

  return (
    <div>
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
      {topMenu && (
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
          {topMenu.map((item, idx) => (
            <div key={idx} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              {item}
            </div>
          ))}
        </div>
      )}
      <div style={{ padding: '2rem' }}>
        {sections && sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '2rem' }}>
            <h3>{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} style={{ marginTop: '0.5rem' }} />
          </div>
        ))}
      </div>
      {faqs && faqs.length > 0 && (
        <div style={{ padding: '2rem' }}>
          <h2>FAQs</h2>
          {faqs.map((faq, idx) => (
            <details key={idx} style={{ marginBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                {faq.question}
              </summary>
              <div style={{ marginTop: '0.5rem' }}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}

export default DestinationDetailPage;

