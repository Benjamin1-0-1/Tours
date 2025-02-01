import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import OurCompanyPage from './pages/OurCompanyPage';
import FleetGuidesPage from './pages/FleetGuidesPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/about/our-company" element={<OurCompanyPage />} />
        <Route path="/about/fleet-guides" element={<FleetGuidesPage />} />
        <Route path="/about/media" element={<MediaPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/request-a-quote" element={<RequestQuotePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
