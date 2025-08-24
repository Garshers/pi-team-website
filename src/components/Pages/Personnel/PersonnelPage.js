import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './personnelPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';

import blackCurtainMobile from '../../../assets/Personnel/blackCurtainMobile.jpg';
import blackCurtainDesktop from '../../../assets/Personnel/blackCurtainDesktop240p.jpg';

import personnelBackground0 from '../../../assets/Personnel/personnelBackground0.jpg';
import personnelBackground1 from '../../../assets/Personnel/personnelBackground1.jpg';
import personnelBackground3 from '../../../assets/Personnel/personnelBackground3.jpg';
import personnelBackground4 from '../../../assets/Personnel/personnelBackground4.jpg';

import imgPatrykDesktop from '../../../assets/Personnel/imgPatrykDesktop.png';
import imgIzaDesktop from '../../../assets/Personnel/imgIzaDesktop.png';
import imgNataliaDesktop from '../../../assets/Personnel/imgNataliaDesktop.png';
import imgDawidDesktop from '../../../assets/Personnel/imgDawidDesktop.png';

import imgPatrykMobile from '../../../assets/Personnel/imgPatrykMobile.png';
import imgIzaMobile from '../../../assets/Personnel/imgIzaMobile.png';
import imgNataliaMobile from '../../../assets/Personnel/imgNataliaMobile.png';
import imgDawidMobile from '../../../assets/Personnel/imgDawidMobile.png';

import imgPatrykMinature from '../../../assets/Personnel/imgPatrykMinature.png';
import imgIzaMinature from '../../../assets/Personnel/imgIzaMinature.png';
import imgNataliaMinature from '../../../assets/Personnel/imgNataliaMinature.png';
import imgDawidMinature from '../../../assets/Personnel/imgDawidMinature.png';

const trainersData = [
  { 
    srcDesktop: imgPatrykDesktop,
    srcMobile: imgPatrykMobile,
    srcMinature: imgPatrykMinature,
    slug: 'patryk-iwaszczyszyn',
    name: 'PATRYK',
    background: personnelBackground0,
    description: 'Cześć, tu Patryk Iwaszczyszyn - założyciel PITEAM, trener personalny, wielokrotny mistrz Polski i osoba, która stoi za tą firmą od pierwszego dnia.',
    LearnMore: 'Kliknij, aby poznać Patryka!'
  },
  { 
    srcDesktop: imgIzaDesktop,
    srcMobile: imgIzaMobile,
    srcMinature: imgIzaMinature,
    slug: 'iza-pawik',
    name: 'IZA',
    background: personnelBackground1,
    description: 'Poznajcie Izę - pasjonatkę treningu siłowego, trenerkę kobiet oraz naszą specjalistkę od treningu pływackiego!',
    LearnMore: 'Kliknij, aby dowiedzieć się więcej o Izie!'
  },
  { 
    srcDesktop: imgNataliaDesktop,
    srcMobile: imgNataliaMobile,
    srcMinature: imgNataliaMinature,
    slug: 'natalia-polaczek',
    name: 'NATALIA',
    background: personnelBackground4,
    description: 'Poznajcie Natalię - naszą utalentowaną masażystkę!',
    LearnMore: 'Kliknij i umów się na masaż!'
  },
  { 
    srcDesktop: imgDawidDesktop,
    srcMobile: imgDawidMobile,
    srcMinature: imgDawidMinature,
    slug: 'dawid-slonina',
    name: 'DAWID',
    background: personnelBackground3,
    description: 'Poznajcie Dawida - naszego specjalistę od fizjoterapii ortopedycznej i treningu medycznego!',
    LearnMore: 'Kliknij, aby skonsultować się z Dawidem!'
  }
];

const MOBILE_BREAKPOINT = 900;
const LARGE_SCREEN_BREAKPOINT = 1400;

const MobileGallery = React.memo(({ 
  currentTrainer, 
  isPersonLoaded, 
  onImageLoad, 
  onPrevious, 
  onNext
}) => (
  <div className="mobileGalleryWrapper" style={{ backgroundImage: `url(${currentTrainer.background})`}}>
    <Link to={`/kadra/${currentTrainer.slug}`} className='mobileLearnMore'>
      <img 
          src={currentTrainer.srcMinature}
          alt={`Miniatura zdjęcia trenera personalnego ${currentTrainer.name} z PITEAM`}
          loading="lazy"
          style={{ 
              opacity: isPersonLoaded ? 0 : 1 ,
              transition: 'opacity 0.3s ease-in-out 1.0s'
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
          {currentTrainer.LearnMore}
      </div>
    </Link>
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

const TrainerDisplayBox = React.memo(({ trainer }) => {
  const [isTrainerImageLoaded, setIsTrainerImageLoaded] = useState(false);

  const handleTrainerImageLoad = () => {
    setIsTrainerImageLoaded(true);
  };

  return (
    <div
      className='desktopGalleryBox'
      // `key` jest przekazywany w komponencie nadrzędnym (DesktopGallery) podczas mapowania
      style={{ backgroundImage: `url(${trainer.background})` }}
    >
      <Link to={`/kadra/${trainer.slug}`} className='desktopGalleryLink'>
        {/* Miniatura, która znika po załadowaniu głównego obrazu */}
        <img
          className='desktopGalleryMinature'
          src={trainer.srcMinature}
          alt={`Miniatura zdjęcia trenera personalnego ${trainer.name} z PITEAM`}
          loading="lazy"
          style={{ opacity: isTrainerImageLoaded ? 0 : 1 }}
        />
        {/* Główny obraz trenera, który pojawia się po załadowaniu */}
        <img
          src={trainer.srcDesktop}
          alt={`Zdjęcie trenera personalnego ${trainer.name} z PITEAM`}
          loading="lazy"
          onLoad={handleTrainerImageLoad} // Wywołaj funkcję po załadowaniu obrazu
          style={{ opacity: isTrainerImageLoaded ? 1 : 0 }} // Animacja dla głównego obrazu
        />
      
        <div className='desktopDescriptionBox'>
          <h2 className='desktopGalleryName'>{trainer.name}</h2>
          <p className='desktopGalleryDescription'>{trainer.description}</p>
          <div className='desktopLearnMore'>
            {trainer.LearnMore}
          </div>
        </div>
      </Link>
    </div>
  );
});

// Główny komponent DesktopGallery
const DesktopGallery = React.memo(({ trainersData, isLargeScreen }) => (
  <div className='desktopGalleryWrapper'>
    {isLargeScreen ? (
      // Układ dla dużych ekranów: wszyscy trenerzy w jednym rzędzie
      <div className='desktopGalleryRow' style={{ gap: '20px' }}> {/* Dodany gap dla odstępów */}
        {trainersData.map((trainer) => (
          <TrainerDisplayBox
            key={trainer.name}
            trainer={trainer} // Przekazujemy dane trenera do podkomponentu
          />
        ))}
      </div>
    ) : (
      // Układ dla mniejszych ekranów: dwa rzędy po dwie osoby
      // Zakładam, że trainersData ma co najmniej 4 elementy dla tego układu
      <>
        <div className='desktopGalleryRow'>
          {trainersData.slice(0, 2).map((trainer) => (
            <TrainerDisplayBox
              key={trainer.name}
              trainer={trainer}
            />
          ))}
        </div>
        <div className='desktopGalleryRow'>
          {trainersData.slice(2, 4).map((trainer) => (
            <TrainerDisplayBox
              key={trainer.name}
              trainer={trainer}
            />
          ))}
        </div>
      </>
    )}
  </div>
));

/**
 * @function PersonnelPage
 * @returns {JSX.Element} - Component representing the personnel page of the application.
 */
function PersonnelPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > LARGE_SCREEN_BREAKPOINT);
  const [isPersonLoaded, setIsPersonLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const newIsLargeScreen = window.innerWidth > LARGE_SCREEN_BREAKPOINT;

    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);
    }
    if (newIsLargeScreen !== isLargeScreen) {
      setIsLargeScreen(newIsLargeScreen);
    }
  }, [isMobile, isLargeScreen]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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

  return (
    <>
      <Header/>
      <div className="mainPersonnelBox" style={{backgroundImage: isMobile ? `url(${blackCurtainMobile})` : `url(${blackCurtainDesktop})`}}>
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
          <DesktopGallery 
            trainersData={trainersData} 
            isLargeScreen={isLargeScreen}
          />
        )}
        <CheckAlsoSection></CheckAlsoSection>
      </div>
    </>
  );
}

export default PersonnelPage;