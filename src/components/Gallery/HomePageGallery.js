import React, { useState, useEffect, useRef } from 'react';
import './homeGalleryStyle.css';

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

const galleryItems = [
  {
    image: gymImage,
    minatureImage: gymImage_Minature,
    midImage: gymImage_Mid,
    smallImage: gymImage_Small,
    href: '/treningi-personalne',
    alt: 'Treningi Parsonalne',
    key: 'gym1',
    primary: 'TRENINGI PERSONALNE',
    secondary: 'Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy'
  },
  {
    image: poolImage,
    minatureImage: poolImage_Minature,
    midImage: poolImage_Mid,
    smallImage: poolImage_Small,
    href: '/basen',
    alt: 'Basen',
    key: 'pool1',
    primary: 'BASEN',
    secondary: 'Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!'
  },
  {
    image: courseImage,
    minatureImage: courseImage_Minature,
    midImage: courseImage_Mid,
    smallImage: courseImage_Small,
    href: '/kurs-trenera-personalnego',
    alt: 'Kurs Trenera Personalnego',
    key: 'course',
    primary: 'KURS TRENERA PERSONALNEGO',
    secondary: 'Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.'
  },
  {
    image: massageImage,
    minatureImage: massageImage_Minature,
    midImage: massageImage_Mid,
    smallImage: massageImage_Small,
    href: '/masaz',
    alt: 'Masaż',
    key: 'massage',
    primary: 'MASAŻ',
    secondary: 'Potrzebujesz odprężenia po treningu lub szukasz ulgi w napięciach mięśniowych? Skorzystaj z naszych profesjonalnych usług masażu! Oferujemy masaż relaksacyjny, sportowy i leczniczy, dopasowany do Twoich potrzeb, aby zapewnić pełną regenerację i dobre samopoczucie.'
  },
  {
    image: campImage,
    minatureImage: campImage_Minature,
    midImage: campImage_Mid,
    smallImage: campImage_Small,
    href: '/obozy-sportowe',
    alt: 'Obozy Sportowe',
    key: 'camp',
    primary: 'OBOZY SPORTOWE',
    secondary: 'Wakacje, które robią formę - sportowy reset i piękna pogoda.'
  }
];

function HomePageGallery() {
  const [loadedStates, setLoadedStates] = useState(galleryItems.map(() => false));
  const secondaryTextRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState(galleryItems.map(() => false));
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1400);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

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

  const handleImageLoad = (index) => {
    setLoadedStates(prevLoadedStates => {
      const newLoadedStates = [...prevLoadedStates];
      newLoadedStates[index] = true;
      return newLoadedStates;
    });
  };

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

  const renderGalleryItem = (item, index, ref) => {
    return (
      <a href={item.href} className='galleryBox' key={item.key}>
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
                  className='galleryImageStyle'
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  onError={() => {
                      console.warn(`Failed to load image: ${item.alt}`);
                      handleImageLoad(index);
                  }}
                  style={{ opacity: loadedStates[index] ? 1 : 0 }}
              />
          </picture>
        </div>
        <div className='galleryBoxName'>
          <h1 className='galleryBoxName__primary' data-text={item.primary}>{item.primary}</h1>
          <h2
            className={`galleryBoxName__secondary ${isVisible[index] ? 'animate' : ''}`}
            ref={ref}
          >
            {item.secondary}
          </h2>
        </div>
      </a>
    );
  };

  return (
    <div className='galleryMainFrame'>
      <div
          className='galleryRow'
          style={
              isTablet
                  ? (isMobile
                      ? { flexDirection: 'column', height: 'calc(50svh - 5px)' } // If tablet BUT NOT mobile
                      : { width: '100%', height: 'calc(50svh - 5px)' }) // If tablet AND mobile
                  : { width: '20%' } // If desktop
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
    </div>
  );
}

export default HomePageGallery;