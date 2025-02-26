import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MediaPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/about/media')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch media data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Media...</div>;
  }

  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    photosHeading,
    photos,
    videosHeading,
    videos
  } = data;

  return (
    <div>
      {/* Hero Banner */}
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

      {/* Photos Section */}
      {photos && photos.length > 0 && (
        <div style={{ padding: '2rem' }}>
          <h2>{photosHeading}</h2>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1rem'
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                style={{
                  flex: '1 1 300px',
                  textAlign: 'center'
                }}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <h4 style={{ marginTop: '0.5rem' }}>{photo.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Videos Section */}
      {videos && videos.length > 0 && (
        <div style={{ padding: '2rem', background: '#fafafa' }}>
          <h2>{videosHeading}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {videos.map((vid, idx) => (
              <div key={idx} style={{ flex: '1 1 300px', textAlign: 'center' }}>
                <h4>{vid.title}</h4>
                {/* Example: embed YouTube */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    title={vid.title}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    src={`https://www.youtube.com/embed/${vid.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MediaPage;
// check the get_media function in app.py at the videos section in the data dictionary
