import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './personnelPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

import blackCurtain from '../../../assets/Personnel/blackCurtain.jpg';

import personnelBackground0 from '../../../assets/Personnel/personnelBackground0.jpg';
import personnelBackground1 from '../../../assets/Personnel/personnelBackground1.jpg';
import personnelBackground2 from '../../../assets/Personnel/personnelBackground2.jpg';
import personnelBackground3 from '../../../assets/Personnel/personnelBackground3.jpg';
import personnelBackground4 from '../../../assets/Personnel/personnelBackground4.jpg';

import imgPatrykDesktop from '../../../assets/Personnel/imgPatrykDesktop.png';
import imgIzaDesktop from '../../../assets/Personnel/imgIzaDesktop.png';
import imgPiotrDesktop from '../../../assets/Personnel/imgPiotrDesktop.png';
import imgNataliaDesktop from '../../../assets/Personnel/imgNataliaDesktop.png';
import imgDawidDesktop from '../../../assets/Personnel/imgDawidDesktop.png';

import imgPatrykMobile from '../../../assets/Personnel/imgPatrykMobile.png';
import imgIzaMobile from '../../../assets/Personnel/imgIzaMobile.png';
import imgPiotrMobile from '../../../assets/Personnel/imgPiotrMobile.png';
import imgNataliaMobile from '../../../assets/Personnel/imgNataliaMobile.png';
import imgDawidMobile from '../../../assets/Personnel/imgDawidMobile.png';

import imgPatrykMinature from '../../../assets/Personnel/imgPatrykMinature.png';
import imgIzaMinature from '../../../assets/Personnel/imgIzaMinature.png';
import imgPiotrMinature from '../../../assets/Personnel/imgPiotrMinature.png';
import imgNataliaMinature from '../../../assets/Personnel/imgNataliaMinature.png';
import imgDawidMinature from '../../../assets/Personnel/imgDawidMinature.png';

const trainersData = [
  { 
    srcDesktop: imgPatrykDesktop,
    srcMobile: imgPatrykMobile,
    srcMinature: imgPatrykMinature,
    name: 'PATRYK',
    background: personnelBackground0,
    description: 'Cześć, tu Patryk Iwaszczyszyn - założyciel PITEAM, trener personalny, wielokrotny mistrz Polski i osoba, która stoi za tą firmą od pierwszego dnia.',
    LearnMore: 'Kliknij, aby poznać Patryka!'
  },
  { 
    srcDesktop: imgIzaDesktop,
    srcMobile: imgIzaMobile,
    srcMinature: imgIzaMinature,
    name: 'IZA',
    background: personnelBackground1,
    description: 'Poznajcie Izę - pasjonatkę treningu siłowego, trenerkę kobiet oraz naszą specjalistkę od treningu pływackiego!',
    LearnMore: 'Dowiedz się więcej o Izie!'
  },
  { 
    srcDesktop: imgPiotrDesktop,
    srcMobile: imgPiotrMobile,
    srcMinature: imgPiotrMinature,
    name: 'PIOTR',
    background: personnelBackground2,
    description: 'Poznajcie Piotrka - jednego z naszych trenerów personalnych w Katowicach!',
    LearnMore: 'Dowiedz się więcej o Piotrze!'
  },
  { 
    srcDesktop: imgNataliaDesktop,
    srcMobile: imgNataliaMobile,
    srcMinature: imgNataliaMinature,
    name: 'NATALIA',
    background: personnelBackground4,
    description: 'Poznajcie Natalię - naszą utalentowaną masażystkę!',
    LearnMore: 'Umów się na masaż!'
  },
  { 
    srcDesktop: imgDawidDesktop,
    srcMobile: imgDawidMobile,
    srcMinature: imgDawidMinature,
    name: 'DAWID',
    background: personnelBackground3,
    description: 'Poznajcie Dawida - naszego specjalistę od fizjoterapii ortopedycznej i treningu medycznego!',
    LearnMore: 'Skonsultuj się z Dawidem!'
  }
];

const MOBILE_BREAKPOINT = 900;

const MobileGallery = React.memo(({ 
  currentTrainer, 
  isPersonLoaded, 
  onImageLoad, 
  onPrevious, 
  onNext 
}) => (
  <div className="mobileGalleryWrapper" style={{ backgroundImage: `url(${currentTrainer.background})`}}>
    <img 
        src={currentTrainer.srcMinature}
        alt={`Miniatura zdjęcia trenera personalnego ${currentTrainer.name} z PITEAM`}
        loading="lazy"
        style={{ 
            opacity: isPersonLoaded ? 0 : 1 ,
            transition: 'opacity 0.5s ease-in-out 1s'
        }}
    />
    <img
        src={currentTrainer.srcMobile}
        alt={`Zdjęcie trenera personalnego ${currentTrainer.name} z PITEAM`}
        loading="lazy"
        onLoad={onImageLoad}
        style={{ opacity: isPersonLoaded ? 1 : 0 }}
      />
    <div className="galleryArrows">
      <span className="leftArrow" onClick={onPrevious}>❮</span>
      <span className="rightArrow" onClick={onNext}>❯</span>
    </div>
    <div className='mobileDescriptionBox'>
      <h2 className='mobileGalleryName'>{currentTrainer.name}</h2>
      <p className='mobileGalleryDescription'>{currentTrainer.description}</p>
      <a href="/kontakt" className='mobileLearnMore'>{currentTrainer.LearnMore}</a>
    </div>
  </div>
));

const Thumbnails = React.memo(({ trainersData, currentIndex, onThumbnailClick }) => (
  <div className="thumbnails">
    {trainersData.map((trainer, index) => (
      <img
        key={trainer.name}
        src={trainer.srcMinature}
        alt={`Miniaturka trenera ${trainer.name}`}
        className={index === currentIndex ? 'thumbnail active' : 'thumbnail'}
        onClick={() => onThumbnailClick(index)}
        loading="lazy"
      />
    ))}
  </div>
));

const DesktopGallery = React.memo(({ trainersData }) => (
  <div className='desktopGalleryWrapper'>
    {[0, 2].map((startIndex, rowIndex) => (
      <div className='desktopGalleryRow' key={rowIndex}>
        {trainersData.slice(startIndex, startIndex + (rowIndex === 0 ? 2 : 3)).map((trainer) => (
          <div 
            className='desktopGalleryBox' 
            key={trainer.name}
            style={{ backgroundImage: `url(${trainer.background})` }}
          >
            <img 
              src={trainer.srcDesktop} 
              alt={`Zdjęcie trenera personalnego ${trainer.name} z PITEAM`}
              loading="lazy"
            />
            <div className='desktopDescriptionBox'>
              <h2 className='desktopGalleryName'>{trainer.name}</h2>
              <p className='desktopGalleryDescription'>{trainer.description}</p>
              <a href="/kontakt" className='desktopLearnMore'>{trainer.LearnMore}</a>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
));

/**
 * @function PersonnelPage
 * @returns {JSX.Element} - Component representing the personnel page of the application.
 */
function PersonnelPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isPersonLoaded, setIsPersonLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);
    }
  }, [isMobile]);

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? trainersData.length - 1 : prev - 1);
    setIsPersonLoaded(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev === trainersData.length - 1 ? 0 : prev + 1);
    setIsPersonLoaded(false);
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setIsPersonLoaded(false);
    }
  }, [currentIndex]);

  const handleImageLoad = useCallback(() => {
    setIsPersonLoaded(true);
  }, []);

  const currentTrainer = useMemo(() => trainersData[currentIndex], [currentIndex]);

  const mainBoxStyle = useMemo(() => ({
    backgroundImage: `url(${blackCurtain})`
  }), []);

  return (
    <>
      <Header/>
      <div className="mainPersonnelBox" style={mainBoxStyle}>
        <h1 data-text="NASZ TEAM">NASZ TEAM</h1>
        {isMobile ? (
          <>
            <MobileGallery
              currentTrainer={currentTrainer}
              isPersonLoaded={isPersonLoaded}
              onImageLoad={handleImageLoad}
              onPrevious={goToPrevious}
              onNext={goToNext}
            />
            <Thumbnails
              trainersData={trainersData}
              currentIndex={currentIndex}
              onThumbnailClick={handleThumbnailClick}
            />
          </>
        ) : (
          <DesktopGallery trainersData={trainersData} />
        )}
      </div>
    </>
  );
}

export default PersonnelPage;