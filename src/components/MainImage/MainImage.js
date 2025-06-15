import React, { useState, useEffect } from 'react';
import './mainImage.css';

function MainImage({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      ...item.schema
    });

    const existingScript = document.querySelector('script[type="application/ld+json"][data-component="main-image"]');
    if (existingScript) {
      existingScript.remove();
    }

    schemaScript.setAttribute('data-component', 'main-image');
    document.head.appendChild(schemaScript);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-component="main-image"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [item.schema]);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="mainImageBox"
      style={{
        backgroundImage: `url(${item.minatureImage})`
      }}
      aria-labelledby="main-title"
      aria-describedby="main-description"
    >
      <picture>
        <source media="(max-width: 900px)" srcSet={item.smallImage} />
        <source media="(max-width: 1400px)" srcSet={item.midImage} />
        <img
          src={item.image}
          alt={item.alt}
          title={item.title}
          className="mainImageBox-img"
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.warn(`Failed to load image: ${item.alt}`, e);
            setImageLoaded(true);
          }}
          itemProp="image"
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
          width={item.width || "1920"}
          height={item.height || "1080"}
        />
      </picture>

      <div className="mainOverlay">
        <h1
          id="main-title"
          className="mainTitle"
          data-text={item.primary}
          itemProp="name"
        >
          {item.primary}
        </h1>
        <h2
          id="main-description"
          className="mainDescription"
          itemProp="description"
        >
          {item.secondary}
        </h2>
      </div>

      <button
        className="mainSubtitle"
        onClick={scrollToNextSection}
        aria-label="Przewiń do następnej sekcji"
        type="button"
      >
        &#8595; Zapisz się już dziś! &#8595;
      </button>
    </section>
  );
}

export default MainImage;