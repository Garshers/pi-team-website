import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './personnelGallery.css';

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
      <div className='mobileDescriptionBox'>
        <h2 className='mobileGalleryName'>{currentTrainer.name}</h2>
        <p className='mobileGalleryDescription'>{currentTrainer.description}</p>
          {currentTrainer.LearnMore}
      </div>
    </Link>

    <div className="galleryArrows">
      <span className="leftArrow" onClick={onPrevious}>❮</span>
      <span className="rightArrow" onClick={onNext}>❯</span>
    </div>
  </div>
));

const Thumbnails = React.memo(({ trainers, currentIndex, onThumbnailClick }) => (
  <div className="thumbnails">
    {trainers.map((trainer, index) => (
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
      style={{ backgroundImage: `url(${trainer.background})` }}
    >
      <Link to={`/kadra/${trainer.slug}`} className='desktopGalleryLink'>
        <img
          className='desktopGalleryMinature'
          src={trainer.srcMinature}
          alt={`Miniatura zdjęcia trenera personalnego ${trainer.name} z PITEAM`}
          loading="lazy"
          style={{ opacity: isTrainerImageLoaded ? 0 : 1 }}
        />
        <img
          src={trainer.srcDesktop}
          alt={`Zdjęcie trenera personalnego ${trainer.name} z PITEAM`}
          loading="lazy"
          onLoad={handleTrainerImageLoad}
          style={{ opacity: isTrainerImageLoaded ? 1 : 0 }}
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

const DesktopGallery = React.memo(({ trainers, isLargeScreen }) => (
  <div className='desktopGalleryWrapper'>
    {isLargeScreen ? (
      <div className='desktopGalleryRow' style={{ gap: '20px' }}>
        {trainers.map((trainer) => (
          <TrainerDisplayBox
            key={trainer.name}
            trainer={trainer}
          />
        ))}
      </div>
    ) : (
      <>
        <div className='desktopGalleryRow'>
          {trainers.slice(0, 2).map((trainer) => (
            <TrainerDisplayBox
              key={trainer.name}
              trainer={trainer}
            />
          ))}
        </div>
        <div className='desktopGalleryRow'>
          {trainers.slice(2, 4).map((trainer) => (
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

function PersonnelGallery({ isMobile, isLargeScreen, trainers }) {
  const [isPersonLoaded, setIsPersonLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? trainers.length - 1 : prev - 1);
    setIsPersonLoaded(false);
  }, [trainers.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev === trainers.length - 1 ? 0 : prev + 1);
    setIsPersonLoaded(false);
  }, [trainers.length]);

  const handleThumbnailClick = useCallback((index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setIsPersonLoaded(false);
    }
  }, [currentIndex]);

  const handleImageLoad = useCallback(() => {
    setIsPersonLoaded(true);
  }, []);

  const currentTrainer = useMemo(() => trainers[currentIndex], [currentIndex, trainers]);

  return (
    <>
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
            trainers={trainers}
            currentIndex={currentIndex}
            onThumbnailClick={handleThumbnailClick}
          />
        </>
      ) : (
        <DesktopGallery 
          trainers={trainers} 
          isLargeScreen={isLargeScreen}
        />
      )}
    </>
  );
}

export default PersonnelGallery;