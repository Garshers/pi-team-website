import React, { useState, useEffect, useRef } from 'react';
import './galleryStyle.css';
import gymImage from '../../assets/HomePage3.jpeg';
import gymImage_Small from '../../assets/HomePage3_Small.jpeg';
import gymImage_Mid from '../../assets/HomePage3_Mid.jpeg';
import poolImage from '../../assets/HomePage1.jpeg';
import poolImage_Small from '../../assets/HomePage1_Small.jpeg';
import poolImage_Mid from '../../assets/HomePage1_Mid.jpeg';
import courseImage from '../../assets/HomePage1.jpeg';
import courseImage_Small from '../../assets/HomePage1_Small.jpeg';
import courseImage_Mid from '../../assets/HomePage1_Mid.jpeg';
import campImage from '../../assets/HomePage3.jpeg';
import campImage_Small from '../../assets/HomePage3_Small.jpeg';
import campImage_Mid from '../../assets/HomePage3_Mid.jpeg';

const galleryItems = [
  {
    image: gymImage,
    smallImage: gymImage_Small,
    midImage: gymImage_Mid,
    href: '/treningi-personalne',
    alt: 'Treningi Parsonalne',
    key: 'gym1',
    primary: 'Treningi Parsonalne',
    secondary: 'Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy'
  },
  {
    image: poolImage,
    smallImage: poolImage_Small,
    midImage: poolImage_Mid,
    href: '/basen',
    alt: 'Basen',
    key: 'pool1',
    primary: 'Basen',
    secondary: 'Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!'
  },
  {
    image: campImage,
    smallImage: campImage_Small,
    midImage: campImage_Mid,
    href: '/kurs-trenera-personalnego',
    alt: 'Kurs Trenera Personalnego',
    key: 'course',
    primary: 'Kurs Trenera Personalnego',
    secondary: 'Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.'
  },
  {
    image: courseImage,
    smallImage: courseImage_Small,
    midImage: courseImage_Mid,
    href: '/masaz',
    alt: 'Masaż',
    key: 'massage',
    primary: 'Masaż',
    secondary: 'Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.'
  },
  {
    image: campImage,
    smallImage: campImage_Small,
    midImage: campImage_Mid,
    href: '/obozy-sportowe',
    alt: 'Obozy Sportowe',
    key: 'camp',
    primary: 'Obozy Sportowe',
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
    const imageSrc = isTablet ? item.midImage : item.image;

    return (
      <a href={item.href} className='galleryBox' key={item.key}>
        <div
          className="blurred-img"
          style={{ backgroundImage: `url(${item.smallImage})`, filter: loadedStates[index] ? 'none' : 'blur(10px)' }}
        >
          <img
            src={imageSrc}
            alt={item.alt}
            className='galleryImageStyle'
            loading="lazy"
            key={item.key}
            onLoad={() => handleImageLoad(index)}
            style={{ opacity: loadedStates[index] ? 1 : 0 }}
          />
        </div>
        <div className='galleryBoxName'>
          <div className='galleryBoxName__primary'>{item.primary}</div>
          <div
            className={`galleryBoxName__secondary ${isVisible[index] ? 'animate' : ''}`}
            ref={ref}
          >
            {item.secondary}
          </div>
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
                      ? { flexDirection: 'column', height: 'calc(50vh - 7.5px)' } // If tablet BUT NOT mobile
                      : { width: '100%', height: 'calc(50vh - 7.5px)' }) // If tablet AND mobile
                  : { width: '20%' } // If desktop
          }
      >
        {renderGalleryItem(galleryItems[0], 0, secondaryTextRefs[0])}
      </div>
      <div className='galleryRow' style={isTablet ? { width: '100%', height: 'calc(100vh-15px)'} : { width: '40%' }}>
        {renderGalleryItem(galleryItems[1], 1, secondaryTextRefs[1])}
        {renderGalleryItem(galleryItems[2], 2, secondaryTextRefs[2])}
      </div>
      <div className='galleryRow' style={isTablet ? { width: '100%', height: 'calc(100vh-15px)'} : { width: '40%' }}>
        {renderGalleryItem(galleryItems[3], 3, secondaryTextRefs[3])}
        {renderGalleryItem(galleryItems[4], 4, secondaryTextRefs[4])}
      </div>
    </div>
  );
}

export default HomePageGallery;