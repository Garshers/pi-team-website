import React from 'react';
import './textBlockWithPoints.css';

const TextBlockWithPoints = ({ title, heading, paragraph, points, imageSrc }) => {
  return (
    <div className='text-block-container'>
      <div className="text-box">
        {imageSrc && <img src={imageSrc} alt={title} />}
        <h2>{title}</h2>
        <h1>{heading}</h1>
        <p className='text-box-description'>{paragraph}</p>
        {points.map((point, index) => (
          <div key={index} className="text-point">
            <span className="text-point-icon">&#10532;</span>
            <div className="text-point-content">
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBlockWithPoints;