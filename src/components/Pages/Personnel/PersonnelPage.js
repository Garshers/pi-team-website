import React , {useState, useEffect} from 'react';
import './personnelPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

import blackCurtain from '../../../assets/Personnel/blackCurtain.jpg';

import imgPatryk from '../../../assets/Personnel/imgPatrykRemoved.png';
import imgIza from '../../../assets/Personnel/imgIzaRemoved.png';
import imgPiotr from '../../../assets/Personnel/imgPiotrRemoved.png';
import imgNatalia from '../../../assets/Personnel/imgNataliaRemoved.png';
import imgMilena from '../../../assets/Personnel/imgMilenaRemoved.png';


const trainersData = [
  { src: imgPatryk, name: 'PATRYK',
    description: 'Cześć, tu Patryk Iwaszczyszyn- założyciel PITEAM, trener personalny, wielokrotny mistrz Polski i osoba, która stoi za tą firmą od pierwszego dnia.',
    LearnMore: 'Kliknij, aby poznać Patryka!'},

  { src: imgIza, name: 'IZA',
    description: 'Poznajcie Izę - pasjonatkę treningu siłowego, trenerkę kobiet oraz naszą specjalistkę od treningu pływackiego!',
    LearnMore: 'Dowiedz się więcej o Izie!'},

  { src: imgPiotr, name: 'PIOTR',
    description: 'Poznajcie Piotrka - jednego z naszych trenerów personalnych w Katowicach!',
    LearnMore: 'Dowiedz się więcej o Piotrze!'},

  { src: imgMilena, name: 'MILENA',
    description: 'Poznajcie Milenę - niesamowicie zaangażowaną i pełną pasji trenerkę, która od 3 lat specjalizuje się w treningu siłowym. Ze sportem związana jest od najmłodszych lat.',
    LearnMore: 'Poznaj Milenę!'},

  { src: imgPatryk, name: 'DAWID',
    description: 'Poznajcie Dawida - naszego specjalistę od fizjoterapii ortopedycznej i treningu medycznego!',
    LearnMore: 'Skonsultuj się z Dawidem!'},

  { src: imgNatalia, name: 'NATALIA',
    description: 'Poznajcie Natalię - naszą utalentowaną masażystkę!',
    LearnMore: 'Umów się na masaż!'},
];

/**
 * @function PersonnelPage
 * @returns {JSX.Element} - Component representing the personnel page of the application.
 */
function PersonnelPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? trainersData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === trainersData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentTrainer = trainersData[currentIndex];

    return (
        <>
        <Header/>
        <div className="mainPersonnelBox" style={{ backgroundImage: `url(${blackCurtain})` }}>
            <h1>Poznaj naszą kadrę</h1>
            {isMobile ? (
                <>
                <div className="mobileGalleryWrapper" style={{ backgroundImage: `url(${trainersData[currentIndex]?.src})` }}>
                    <div className="galleryArrows">
                    <span className="leftArrow" onClick={goToPrevious}>❮</span>
                    <span className="rightArrow" onClick={goToNext}>❯</span>
                    </div>
                    <div className='mobileDescriptionBox'>
                    <span className='mobileGalleryName'>{currentTrainer.name}</span>
                    <span className='mobileGalleryDescription'>{currentTrainer.description}</span>
                    <a href="/kontakt" className='mobileLearnMore'>{currentTrainer.LearnMore || 'Dowiedz się więcej'}</a>
                    </div>
                </div>

                <div className="thumbnails">
                    {trainersData.map((trainer, index) => (
                    <img
                        key={index}
                        src={trainer.src}
                        alt={`Miniaturka ${trainer.name}`}
                        className={index === currentIndex ? 'thumbnail active' : 'thumbnail'}
                        onClick={() => setCurrentIndex(index)}
                    />
                    ))}
                </div>
                </>
            ) : (
                <div className='desktopGalleryWrapper'>
                {[0, 1].map((rowIndex) => (
                    <div className='desktopGalleryRow' key={rowIndex}>
                    {trainersData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((trainer, colIndex) => (
                        <div className='desktopGalleryBox' key={rowIndex * 3 + colIndex}>
                            <img src={trainer.src} alt={`Trener Personalny ${trainer.name}`} />
                            <div className='desktopDescriptionBox'>
                                <h2 className='desktopGalleryName'>{trainer.name}</h2>
                                <p className='desktopGalleryDescription'>{trainer.description}</p>
                                <a href="/kontakt" className='desktopLearnMore'>{trainer.LearnMore || 'Dowiedz się więcej'}</a>
                            </div>
                        </div>
                    ))}
                    </div>
                ))}
                </div>
                
            )}
        </div>
        </>
    );
}

export default PersonnelPage;