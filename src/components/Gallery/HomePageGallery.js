import React, { useState, useEffect, useRef } from 'react';
import './homeGalleryStyle.css';

// Image imports for different screen sizes and quality levels
import gymImage from '../../assets/HomePage/GymImgIza_768_2160.jpg';
import gymImage_Minature from '../../assets/HomePage/GymImgIza_Minature.jpg';
import gymImage_Mid from '../../assets/HomePage/GymImgIza_1440_1080.jpg';
import gymImage_Small from '../../assets/HomePage/GymImgIza_450_540.jpg';

import poolImage from '../../assets/HomePage/PoolImg_428_1200.jpeg';
import poolImage_Minature from '../../assets/HomePage/PoolImg_Minature.jpeg';
import poolImage_Mid from '../../assets/HomePage/PoolImg_1440_1080.jpeg';
import poolImage_Small from '../../assets/HomePage/PoolImg_450_540.jpeg';

import courseImage from '../../assets/HomePage/CourseImg_768_2160.jpg';
import courseImage_Minature from '../../assets/HomePage/CourseImg_Minature.jpg';
import courseImage_Mid from '../../assets/HomePage/CourseImg_1440_1080.jpg';
import courseImage_Small from '../../assets/HomePage/CourseImg_450_540.jpg';

import massageImage from '../../assets/HomePage/MassageImg_768_2160.jpg';
import massageImage_Minature from '../../assets/HomePage/MassageImg_Minature.jpg';
import massageImage_Mid from '../../assets/HomePage/MassageImg_1440_1080.jpg';
import massageImage_Small from '../../assets/HomePage/MassageImg_450_540.jpg';

import campImage from '../../assets/HomePage/CampImg_768_2160.jpg';
import campImage_Minature from '../../assets/HomePage/CampImg_Minature.jpg';
import campImage_Mid from '../../assets/HomePage/CampImg_1440_1080.jpg';
import campImage_Small from '../../assets/HomePage/CampImg_450_540.jpg';

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
    href: '/treningi-plywackie',
    alt: 'Basen - Spersonalizowane treningi rekreacyjne oraz sportowe',
    title: 'Basen - Pływanie',
    key: 'pool1',
    primary: 'BASEN',
    secondary: 'Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!',
    schema: {
      "@type": "Service",
      "name": "Basen",
      "description": "Profesjonalne treningi pływania dla osób w każdym wieku",
      "provider": {
        "@type": "Organization",
        "name": "PITEAM"
      }
    }
  },
  {
    image: courseImage,
    minatureImage: courseImage_Minature,
    midImage: courseImage_Mid,
    smallImage: courseImage_Small,
    href: '/kursy-na-trenera-personalnego',
    alt: 'Kurs trenera personalnego - szkolenie z certyfikatem dla przyszłych trenerów personalnych',
    title: 'Kurs Trenera Personalnego - Zostań Certyfikowanym Trenerem',
    key: 'course',
    primary: 'KURS TRENERA PERSONALNEGO',
    secondary: 'Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Kurs Trenera Personalnego",
      "description": "Profesjonalny kurs trenera personalnego z certyfikatem. Kompleksowe szkolenie obejmujące planowanie treningów, budowanie relacji z klientem i profesjonalne prowadzenie zajęć fitness.",
      "provider": {
        "@type": "Organization",
        "name": "PITEAM",
        "url": "https://piteam.pl"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseWorkload": "PT40H", // Course workload <-----------
        "courseSchedule": {
          "@type": "Schedule",
          "duration": "P4W" // duration <-----------
        },
        "courseMode": "blended",
        "instructor": {
          "@type": "Person",
          "name": "Zespół PITEAM"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "1299", // Price in PLN <-----------
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "category": "Szkolenie zawodowe"
      },
      "educationalCredentialAwarded": "Certyfikat Trenera Personalnego",
      "audience": {
        "@type": "EducationalAudience",
        "audienceType": "Osoby chcące zostać trenerami personalnymi"
      },
      "coursePrerequisites": "Brak wymagań wstępnych",
      "teaches": [
        "Planowanie treningów personalnych",
        "Anatomia i fizjologia w treningu",
        "Budowanie relacji z klientem",
        "Techniki motywacji",
        "Zasady bezpieczeństwa w treningu"
      ],
      "url": "https://piteam.pl/kursy-na-trenera-personalnego"
    }
  },
  {
    image: massageImage,
    minatureImage: massageImage_Minature,
    midImage: massageImage_Mid,
    smallImage: massageImage_Small,
    href: '/masaze',
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
     "description": "Letnie i zimowe obozy sportowe połączone z wypoczynkiem i treningiem",
     "startDate": "2025-07-01",
     "location": {
       "@type": "Place",
       "name": "Ośrodek Sportowy PITEAM",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Francuska 184",
         "addressLocality": "Katowice",
         "addressRegion": "Śląsk",
         "postalCode": "40-507",
         "addressCountry": "PL"
       }
     }
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
        "name": "Usługi Treningowe (Fitness) i Sportu",
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
              <source media="(max-width: 450px)" srcSet={item.smallImage} type="image/jpeg" />
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