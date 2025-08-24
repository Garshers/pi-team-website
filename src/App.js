import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/HeaderAndFooter/footer.js';
import './components/HeaderAndFooter/headerFooter.css';

import HomePage from './components/Pages/HomePage/HomePage.js';
import AboutUsPage from './components/Pages/AboutUs/AboutUsPage.js';
import PersonnelPage from './components/Pages/Personnel/PersonnelPage.js';
import IndividualPage from './components/Pages/Personnel/IndividualPage.js';
import ContactPage from './components/Pages/Contact/ContactPage.js';

import GymPage from './components/Pages/Gym/GymPage.js';
import PoolPage from './components/Pages/Pool/PoolPage.js';
import CoursePage from './components/Pages/Course/CoursePage.js';
import MassagePage from './components/Pages/Massage/MassagePage.js';
import CampPage from './components/Pages/Camp/CampPage.js';

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
          <Route path="/o-nas" element={<AboutUsPage />} />
          <Route path="/kadra" element={<PersonnelPage />} />
          <Route path="/kadra/:slug" element={<IndividualPage />} />
          <Route path="/kontakt" element={<ContactPage />} />

          <Route path="/treningi-personalne" element={<GymPage />} />
          <Route path="/treningi-plywackie" element={<PoolPage />} />
          <Route path="/kursy-na-trenera-personalnego" element={<CoursePage />} />
          <Route path="/masaze" element={<MassagePage />} />
          <Route path="/obozy-sportowe" element={<CampPage />} />

          <Route path="/polityka-prywatnosci" element={<PolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;