import React from 'react';
import { Header } from './components/HeaderAndFooter/header.js';
import Items from './components/Pages/HomePage/TabsArray.js';

function NotFoundPage() {
  return (
    <><Header menuItems={Items} />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column'}}>
      <div style={{ textAlign: 'center' }}>
        <h1>Error 404 - Nie znaleziono strony</h1>
        <p>Przepraszamy, ale strona o podanym adresie nie istnieje lub jest w trakcie budowy.</p>
      </div>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          backgroundColor: '#f0f0f0',
          color: '#333',
          border: '1px solid #808080',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
      >
        Wróć do strony głównej
      </button>
    </div></>
  );
}

export default NotFoundPage;