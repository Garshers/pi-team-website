import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import HomePage from './components/Pages/HomePage/HomePage.js';

import Footer from './components/HeaderAndFooter/footer.js';
import './components/HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
      minHeight: '100vh',
      maxWidth: '2440px',
      margin: '0 auto'
    }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
          {/* If other then NotFoungPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
