import React, { useState, useEffect } from 'react';
import './mainImage.css';

function MainImage({ item, children}) {
  const [mediaLoaded, setMediaLoaded] = useState(false);

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

  const isVideo = item.video || item.smallVideo;
  
  if (!item.image && !isVideo) {
    console.error('MainImage component requires either an image or video item prop.');
    return null;
  }

  return (
    <>
      <section
        className="mainImageBox"
        style={{
          backgroundImage: `url(${item.minatureImage})`
        }}
        aria-labelledby="main-title"
        aria-describedby="main-description"
      >
        {isVideo ? (
          <video
            className="mainImageBox-media"
            loop
            muted
            autoPlay
            playsInline
            onLoadedData={() => setMediaLoaded(true)}
            style={{ opacity: mediaLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
          >
            <source media="(max-width: 900px)" src={item.smallVideo} type="video/mp4" />
            <source src={item.video} type="video/mp4" />
            Twoja przeglądarka nie obsługuje wideo.
          </video>
        ) : (
          <picture>
            <source media="(max-width: 900px)" srcSet={item.smallImage} />
            <source media="(max-width: 1400px)" srcSet={item.midImage} />
            <img
              src={item.image}
              alt={item.alt}
              title={item.title}
              className="mainImageBox-media"
              loading="eager"
              fetchPriority="high"
              onLoad={() => setMediaLoaded(true)}
              onError={(e) => {
                console.warn(`Failed to load image: ${item.alt}`, e);
                setMediaLoaded(true);
              }}
              itemProp="image"
              style={{ opacity: mediaLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
              width={item.width || "1920"}
              height={item.height || "1080"}
            />
          </picture>
        )}

        {children}

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
          &#10533; Zapisz się już dziś! &#10534;
        </button>
      </section>
      <div className="mainGradient"></div>
    </>
  );
}

export default MainImage;