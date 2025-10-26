import React, { useState, useEffect } from 'react';
import './promoBanner.css';

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const PromoBanner = () => {
  const targetDate = '2025-12-05T23:59:59';
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const bannerTimer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
      clearTimeout(bannerTimer);
      clearTimeout(timer);
    };
  }, [timeLeft]);

  const handleClose = () => {
    setIsClosing(true);
  };
  
  if (!isActive && isClosing) {
      return null;
  }
  
  const intervalLabels = {
    days: 'dni',
    hours: 'godz.',
    minutes: 'min.',
    seconds: 'sek.',
  };

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {intervalLabels[interval]}{" "}
      </span>
    );
  });

  return (
    <div 
        className={`promo-banner ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
        onTransitionEnd={() => {
            if (isClosing) {
                setIsActive(false);
            }
        }}
    >
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <div className="promo-content">
        <h3>Nie przegap! Tylko do 6 grudnia</h3>
        <h2>Zapisz się teraz! <br/>Ilość miejsc ograniczona <strong>17/20</strong><br/>Pierszeństwo według kolejności zgłoszeń!</h2>
        
        {timerComponents.length ? (
          <div className="timer">
            Pozostało: {timerComponents}
          </div>
        ) : (
          <div className="timer">Promocja zakończona!</div>
        )}
        
        <p>
          Z nami masz możliwość rozbicia płatności na 3, 4, 8, 12 lub 24 raty.<br/>
          <a 
            href="https://www.mediraty.pl/wspolpraca-piteam/" 
            style={{ textDecoration: 'underline'}}
          >
            dowiedz się więcej!
          </a>   
        </p>
          
      </div>
    </div>
  );
};

export default PromoBanner;