import React from 'react';
import './mainPageImage.css';

function MainPageImage({ Image, Title, Description }) {

  const scrollToNextSection = () => {
      const scrollAmount = window.innerHeight;
      window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
      });
  };

  return (
    <div className="gymImageBox" style={{ backgroundImage: `url(${Image})` }}>
        <div className="gymOverlay">
            <h1 className="gymTitle" data-text={Title}>{Title}</h1>
            <p className="gymDescription">{Description}</p>
            <h2 className="gymSubtitle" onClick={scrollToNextSection}>&#8595; Zapisz się już dziś! &#8595;</h2>
        </div>
    </div>
  );
}

export default MainPageImage;