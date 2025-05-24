import React from 'react';
import { Header } from './components/HeaderAndFooter/header.js';

function NotFoundPage() {
  return (
    <><Header/>
    <div style={{ 
          minHeight: '100vh', 
          backgroundColor: 'black', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh', 
          flexDirection: 'column'
          }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{color: 'white'}}>Error 404 - Nie znaleziono strony</h1>
        <p style={{color: 'white'}}>Przepraszamy, ale strona o podanym adresie nie istnieje lub jest w trakcie budowy.</p>
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