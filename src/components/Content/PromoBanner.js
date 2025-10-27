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
        <h3><strong>Dołącz teraz!</strong></h3>
        <h2>Minimalna liczba uczestników już się zebrała - kurs na pewno się odbędzie! </h2>
        
        <p>Pierszeństwo według kolejności zgłoszeń!<br/>Aktualna liczba uczestników (edycja w Katowicach): <strong>5</strong></p>

        {timerComponents.length ? (
          <div className="timer">
            Do rozpoczęcia pozostało<br/> {timerComponents}
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