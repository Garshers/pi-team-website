import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/HeaderAndFooter/footer.js';
import './components/HeaderAndFooter/headerFooter.css';

import HomePage from './components/Pages/HomePage/HomePage.js';
import PersonnelPage from './components/Pages/Personnel/PersonnelPage.js';
import ContactPage from './components/Pages/Contact/ContactPage.js';

import GymPage from './components/Pages/Gym/GymPage.js';
import CoursePage from './components/Pages/Course/CoursePage.js';

import PolicyPage from './components/Pages/Policy/PolicyPage.js';
import NotFoundPage from './NotFoundPage';

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
          <Route path="/o-nas" element={<NotFoundPage />} />
          <Route path="/kadra" element={<PersonnelPage />} />
          <Route path="/kontakt" element={<ContactPage />} />

          <Route path="/treningi-personalne" element={<GymPage />} />
          <Route path="/treningi-plywackie" element={<NotFoundPage />} />
          <Route path="/kursy-na-trenera-personalnego" element={<CoursePage />} />
          <Route path="/masaze" element={<NotFoundPage />} />
          <Route path="/obozy-sportowe" element={<NotFoundPage />} />

          <Route path="polityka-prywatnosci" element={<PolicyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
