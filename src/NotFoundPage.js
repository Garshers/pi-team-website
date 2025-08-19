import React from 'react';
import { Header } from './components/HeaderAndFooter/header.js';
import background from './assets/Gym/background.jpg';

function NotFoundPage() {
  return (
    <><Header/>
    <div style={{ 
          backgroundImage: `url(${background})`,
          minHeight: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexDirection: 'column',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          }}>
      <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <h1 style={{color: 'white', fontSize: '2em'}}>Strona jest w budowie</h1>
        <p style={{color: 'white', fontSize: '1.5em'}}>Przepraszamy, ale strona o podanym adresie nie istnieje. Wróć do nas za jakiś czas.</p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            color: 'white',
            border: '1px solid #808080',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s ease',
            margin: '20px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'none'}
        >
          Wróć do strony głównej
        </button>
      </div>
    </div></>
  );
}

export default NotFoundPage;