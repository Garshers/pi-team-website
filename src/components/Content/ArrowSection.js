import React from 'react';
import './arrowSection.css';

const ArrowSection = ({ sections }) => {
  return (
    <div className="arrowSection">
      {sections.map((section, index) => (
        <div key={index} className='arrowSectionBox'>
          <span className="arrow">&#10132;</span>
          <h2 className="arrowText">{section.title}</h2>
          <p>
            {section.description.pre}
            <b>{section.description.bold}</b>
            {section.description.post}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArrowSection;