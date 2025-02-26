import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RequestQuotePage() {
  const [data, setData] = useState(null);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/request-quote')
      .then((res) => {
        setData(res.data);
        const initValues = {};
        res.data.formFields.forEach(field => {
          if (field.type === 'checkboxGroup' || field.type === 'radio') {
            initValues[field.name] = [];
          } else {
            initValues[field.name] = '';
          }
        });
        setFormValues(initValues);
      })
      .catch((err) => console.error("Failed to fetch request quote data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading Request a Quote...</div>;
  }

  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    formFields
  } = data;

  const handleInputChange = (field, e) => {
    if (field.type === 'checkboxGroup') {
      // handle multiple checkboxes
      const currentValues = [...formValues[field.name]];
      if (currentValues.includes(e.target.value)) {
        const idx = currentValues.indexOf(e.target.value);
        currentValues.splice(idx, 1);
      } else {
        currentValues.push(e.target.value);
      }
      setFormValues({ ...formValues, [field.name]: currentValues });
    } else if (field.type === 'radio') {
      setFormValues({ ...formValues, [field.name]: e.target.value });
    } else {
      setFormValues({ ...formValues, [field.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", formValues);
    // axios.post('http://localhost:5000/api/request-quote/submit', formValues)
    //   .then(...)
  };

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

      <div style={{ padding:'2rem' }}>
        <h2 style={{ textAlign:'center' }}>{heroTitle}</h2>
        <p style={{ textAlign:'center' }}>{heroSubtitle}</p>

        <form onSubmit={handleSubmit} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          {formFields.map((field, idx) => {
            return (
              <div key={idx} style={{ display:'flex', flexDirection:'column' }}>
                <label>
                  {field.label}
                  {field.required && ' *'}
                </label>

                {/* Render input based on field.type */}
                {field.type === 'text' || field.type === 'email' || field.type === 'date' || field.type === 'number' ? (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={formValues[field.name] || ''}
                    onChange={(e) => handleInputChange(field, e)}
                  />
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    required={field.required}
                    value={formValues[field.name]}
                    onChange={(e) => handleInputChange(field, e)}
                  >
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    value={formValues[field.name] || ''}
                    onChange={(e) => handleInputChange(field, e)}
                  />
                ) : field.type === 'checkboxGroup' ? (
                  <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                    {field.options.map((opt, i) => (
                      <label key={i}>
                        <input
                          type="checkbox"
                          value={opt}
                          checked={formValues[field.name]?.includes(opt)}
                          onChange={(e) => handleInputChange(field, e)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : field.type === 'radio' ? (
                  <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                    {field.options.map((opt, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          name={field.name}
                          value={opt}
                          checked={formValues[field.name] === opt}
                          onChange={(e) => handleInputChange(field, e)}
                          required={field.required}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          <div style={{ gridColumn:'span 2', textAlign:'center', marginTop:'1rem' }}>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestQuotePage;
//awesome
