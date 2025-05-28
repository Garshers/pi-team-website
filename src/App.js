import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import HomePage from './components/Pages/HomePage/HomePage.js';
import GymPage from './components/Pages/Gym/GymPage.js';

import PersonnelPage from './components/Pages/Personnel/PersonnelPage.js';

import ContactPage from './components/Pages/Contact/ContactPage.js';

import Footer from './components/HeaderAndFooter/footer.js';
import './components/HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        width: '100%',
        minHeight: '100%',
        maxWidth: '3840px',
        margin: '0 auto',
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/silownia" element={<GymPage />} />
        
          <Route path="/kadra" element={<PersonnelPage />} />
          <Route path="/kontakt" element={<ContactPage />} />

          {/* If other then NotFoungPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
