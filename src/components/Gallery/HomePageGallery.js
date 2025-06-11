import React, { useState, useEffect, useRef } from 'react';
import './homeGalleryStyle.css';

// Image imports for different screen sizes and quality levels
import gymImage from '../../assets/HomePage/GymImg_Mid.jpeg';
import gymImage_Minature from '../../assets/HomePage/GymImg_Minature.jpeg';
import gymImage_Mid from '../../assets/HomePage/GymImg_Mid.jpeg';
import gymImage_Small from '../../assets/HomePage/GymImg_Small.jpeg';

import poolImage from '../../assets/HomePage/PoolImg.jpeg';
import poolImage_Minature from '../../assets/HomePage/PoolImg_Minature.jpeg';
import poolImage_Mid from '../../assets/HomePage/PoolImg_Mid.jpeg';
import poolImage_Small from '../../assets/HomePage/PoolImg_Small.jpeg';

import courseImage from '../../assets/HomePage/CourseImg.jpeg';
import courseImage_Minature from '../../assets/HomePage/CourseImg_Minature.jpeg';
import courseImage_Mid from '../../assets/HomePage/CourseImg_Mid.jpeg';
import courseImage_Small from '../../assets/HomePage/CourseImg_Small.jpeg';

import massageImage from '../../assets/HomePage/MassageImg.jpeg';
import massageImage_Minature from '../../assets/HomePage/MassageImg_Minature.jpeg';
import massageImage_Mid from '../../assets/HomePage/MassageImg_Mid.jpeg';
import massageImage_Small from '../../assets/HomePage/MassageImg_Small.jpeg';

import campImage from '../../assets/HomePage/CampImg.jpeg';
import campImage_Minature from '../../assets/HomePage/CampImg_Minature.jpeg';
import campImage_Mid from '../../assets/HomePage/CampImg_Mid.jpeg';
import campImage_Small from '../../assets/HomePage/CampImg_Small.jpeg';

// Gallery data configuration for fitness services
const galleryItems = [
  {
    image: gymImage,
    minatureImage: gymImage_Minature,
    midImage: gymImage_Mid,
    smallImage: gymImage_Small,
    href: '/treningi-personalne',
    alt: 'Treningi personalne - profesjonalna siłownia z nowoczesnym sprzętem treningowym',
    title: 'Treningi Personalne - Indywidualne Podejście do Treningów',
    key: 'gym1',
    primary: 'TRENINGI PERSONALNE',
    secondary: 'Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy',
    schema: {
      "@type": "Service",
      "name": "Treningi Personalne",
      "description": "Profesjonalne treningi personalne dostosowane do indywidualnych potrzeb",
      "provider": {
        "@type": "Organization",
        "name": "PITEAM"
      }
    }
  },
  {
    image: poolImage,
    minatureImage: poolImage_Minature,
    midImage: poolImage_Mid,
    smallImage: poolImage_Small,
    href: '/basen',
    alt: 'Basen - Spersonalizowane treningi rekreacyjne oraz sportowe',
    title: 'Basen - Pływanie',
    key: 'pool1',
    primary: 'BASEN',
    secondary: 'Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!',
    schema: {
      "@type": "SportsActivityLocation",
      "name": "Basen",
      "description": "Profesjonalne treningi pływania"
    }
  },
  {
    image: courseImage,
    minatureImage: courseImage_Minature,
    midImage: courseImage_Mid,
    smallImage: courseImage_Small,
    href: '/kurs-trenera-personalnego',
    alt: 'Kurs trenera personalnego - szkolenie z certyfikatem dla przyszłych trenerów personalnych',
    title: 'Kurs Trenera Personalnego - Zostań Certyfikowanym Trenerem',
    key: 'course',
    primary: 'KURS TRENERA PERSONALNEGO',
    secondary: 'Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.',
    schema: {
      "@type": "Course",
      "name": "Kurs Trenera Personalnego",
      "description": "Profesjonalny kurs trenera personalnego z certyfikatem",
      "provider": {
        "@type": "Organization",
        "name": "PITEAM"
      }
    }
  },
  {
    image: massageImage,
    minatureImage: massageImage_Minature,
    midImage: massageImage_Mid,
    smallImage: massageImage_Small,
    href: '/masaz',
    alt: 'Masaż sportowy i relaksacyjny - profesjonalne usługi masażu relaksacyjnego',
    title: 'Masaż Sportowy i Relaksacyjny - Regeneracja po Treningu',
    key: 'massage',
    primary: 'MASAŻ',
    secondary: 'Potrzebujesz odprężenia po treningu lub szukasz ulgi w napięciach mięśniowych? Skorzystaj z naszych profesjonalnych usług masażu! Oferujemy masaż relaksacyjny, sportowy i leczniczy, dopasowany do Twoich potrzeb, aby zapewnić pełną regenerację i dobre samopoczucie.',
    schema: {
      "@type": "Service",
      "name": "Masaż Sportowy i Relaksacyjny",
      "description": "Profesjonalne usługi masażu sportowego, relaksacyjnego i leczniczego"
    }
  },
  {
    image: campImage,
    minatureImage: campImage_Minature,
    midImage: campImage_Mid,
    smallImage: campImage_Small,
    href: '/obozy-sportowe',
    alt: 'Obozy sportowe - letnie i zimowe obozy sportowe z profesjonalnymi trenerami',
    title: 'Obozy Sportowe - Wakacyjny Reset Formy',
    key: 'camp',
    primary: 'OBOZY SPORTOWE',
    secondary: 'Wakacje, które robią formę - sportowy reset i piękna pogoda.',
    schema: {
      "@type": "Event",
      "name": "Obozy Sportowe",
      "description": "Letnie i zimowe obozy sportowe połączące wypoczynek z treningiem"
    }
  }
];

function HomePageGallery() {
  // State management for image loading, animations and responsive design
  const [loadedStates, setLoadedStates] = useState(galleryItems.map(() => false));
  const secondaryTextRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState(galleryItems.map(() => false));
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1400);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  // SEO structured data injection
  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PITEAM",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Usługi Fitness i Sportu",
        "itemListElement": galleryItems.map((item, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": item.schema
        }))
      }
    });
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-component="gallery"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    schemaScript.setAttribute('data-component', 'gallery');
    document.head.appendChild(schemaScript);
    
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-component="gallery"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Responsive design breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1400);
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Progressive image loading handler
  const handleImageLoad = (index) => {
    setLoadedStates(prevLoadedStates => {
      const newLoadedStates = [...prevLoadedStates];
      newLoadedStates[index] = true;
      return newLoadedStates;
    });
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = secondaryTextRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setIsVisible(prevIsVisible => {
              const newIsVisible = [...prevIsVisible];
              newIsVisible[index] = true;
              return newIsVisible;
            });
          }
        });
      },
      { threshold: 0.01 }
    );

    secondaryTextRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [secondaryTextRefs]);

  // Gallery item render function with accessibility and SEO optimization
  const renderGalleryItem = (item, index, ref) => {
    return (
      <a 
        href={item.href} 
        className='galleryBox' 
        key={item.key}
        title={item.title}
        aria-label={`Przejdź do sekcji: ${item.primary}`}
        itemScope 
        itemType="https://schema.org/Service"
      >
        <div
          className="blurred-img"
          style={{ backgroundImage: `url(${item.minatureImage})`, filter: loadedStates[index] ? 'none' : 'blur(10px)' }}
        >
          <picture>
              <source media="(max-width: 900px)" srcSet={item.smallImage} type="image/jpeg" />
              <source media="(max-width: 1400px)" srcSet={item.midImage} type="image/jpeg" />
              <source media="(min-width: 1400px)" srcSet={item.image} type="image/jpeg" />
              <img
                  src={item.midImage}
                  alt={item.alt}
                  title={item.title}
                  className='galleryImageStyle'
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => {
                      console.warn(`Failed to load image: ${item.alt}`);
                      handleImageLoad(index);
                  }}
                  style={{ opacity: loadedStates[index] ? 1 : 0 }}
                  width="800"
                  height="600"
                  itemProp="image"
              />
          </picture>
        </div>
        <div className='galleryBoxName'>
          <h1 
            data-text={item.primary}
            itemProp="name"
          >
            {item.primary}
          </h1>
          <h2
            className={`${isVisible[index] ? 'animate' : ''}`}
            ref={ref}
            itemProp="description"
          >
            {item.secondary}
          </h2>
        </div>
      </a>
    );
  };

  // Responsive layout with dynamic column arrangement
  return (
    <section 
      className='galleryMainFrame'
      role="main"
      aria-label="Galeria usług fitness i sportu"
    >
      <div
          className='galleryRow'
          style={
              isTablet
                  ? (isMobile
                      ? { flexDirection: 'column', height: 'calc(50svh - 5px)' }
                      : { width: '100%', height: 'calc(50svh - 5px)' })
                  : { width: '20%' }
          }
      >
        {renderGalleryItem(galleryItems[0], 0, secondaryTextRefs[0])}
      </div>
      <div className='galleryRow' style={isTablet ? { width: '100%', height: 'calc(100svh-15px)'} : { width: '40%' }}>
        {renderGalleryItem(galleryItems[1], 1, secondaryTextRefs[1])}
        {renderGalleryItem(galleryItems[2], 2, secondaryTextRefs[2])}
      </div>
      <div className='galleryRow' style={isTablet ? { width: '100%', height: 'calc(100svh-15px)'} : { width: '40%' }}>
        {renderGalleryItem(galleryItems[3], 3, secondaryTextRefs[3])}
        {renderGalleryItem(galleryItems[4], 4, secondaryTextRefs[4])}
      </div>
    </section>
  );
}

export default HomePageGallery;