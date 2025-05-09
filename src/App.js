import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage/HomePage.js';

import Footer from './components/HeaderAndFooter/footer.js';
import { Header } from './components/HeaderAndFooter/header.js';
import './components/HeaderAndFooter/headerFooter.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
