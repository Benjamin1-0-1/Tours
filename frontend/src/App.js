import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import OurCompanyPage from './pages/AboutUs';
import FleetGuidesPage from './pages/FleetGuidesPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Push content below fixed navbar */}
      <div style={{ paddingTop: '56px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/about/our-company" element={<OurCompanyPage />} />
          <Route path="/fleet-guides" element={<FleetGuidesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/request-a-quote" element={<RequestQuotePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
