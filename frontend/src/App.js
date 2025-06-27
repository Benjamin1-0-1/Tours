import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import AboutUs from './pages/AboutUs';
import FleetGuidesPage from './pages/FleetGuidesPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fleet-guides" element={<FleetGuidesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/request-a-quote" element={<RequestQuotePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
