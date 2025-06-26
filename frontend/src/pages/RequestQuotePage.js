import React, { useState } from 'react';
import './RequestQuote.css';

const tourOptions = [
  'Kenya Road Safaris',
  'Kenya Luxury Safaris',
  'Kenya–Tanzania Safaris',
  'Masai Mara Adventures',
  'Amboseli Day Trip',
  'Lake Nakuru Retreat',
  'Tsavo East Safari',
  'Samburu Cultural Tour'
];

function RequestQuotePage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    tourPackage: '',
    travelDate: '',
    people: 1,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, tourPackage, travelDate, people, message } = formValues;
    // Dummy email 
    const developerEmail = 'dev@example.com'; // <-- placed here

    // Compose email body
    const body = `Name: ${name}
Email: ${email}
Phone: ${phone}
Tour Package: ${tourPackage}
Travel Date: ${travelDate}
Number of People: ${people}
Message: ${message}`;

    // Trigger mailto link
    window.location.href =
      `mailto:${developerEmail}` +
      `?subject=${encodeURIComponent('Quote Request from ' + name)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="rq-page">
      <h1 className="rq-title">Request a Quote</h1>
      <form className="rq-form" onSubmit={handleSubmit}>
        <label>
          Name *
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Tour Package *
          <select
            name="tourPackage"
            value={formValues.tourPackage}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a package</option>
            {tourOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </label>

        <label>
          Travel Date *
          <input
            type="date"
            name="travelDate"
            value={formValues.travelDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of People *
          <input
            type="number"
            name="people"
            min="1"
            value={formValues.people}
            onChange={handleChange}
            required
          />
        </label>

        <label className="rq-message">
          Message
          <textarea
            name="message"
            rows="4"
            value={formValues.message}
            onChange={handleChange}
          />
        </label>

        <div className="rq-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RequestQuotePage;
