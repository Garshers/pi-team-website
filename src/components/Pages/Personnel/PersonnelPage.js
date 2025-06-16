import React , {useState, useEffect} from 'react';
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
import { wait } from '@testing-library/user-event/dist/utils/index.js';

const trainersData = [
  { srcDesktop: imgPatrykDesktop,
    srcMobile: imgPatrykMobile,
    srcMinature: imgPatrykMinature,
    name: 'PATRYK',
    background: personnelBackground0,
    description: 'Cześć, tu Patryk Iwaszczyszyn- założyciel PITEAM, trener personalny, wielokrotny mistrz Polski i osoba, która stoi za tą firmą od pierwszego dnia.',
    LearnMore: 'Kliknij, aby poznać Patryka!'},

  { srcDesktop: imgIzaDesktop,
    srcMobile: imgIzaMobile,
    srcMinature: imgIzaMinature,
    name: 'IZA',
    background: personnelBackground1,
    description: 'Poznajcie Izę - pasjonatkę treningu siłowego, trenerkę kobiet oraz naszą specjalistkę od treningu pływackiego!',
    LearnMore: 'Dowiedz się więcej o Izie!'},

  { srcDesktop: imgPiotrDesktop,
    srcMobile: imgPiotrMobile,
    srcMinature: imgPiotrMinature,
    name: 'PIOTR',
    background: personnelBackground2,
    description: 'Poznajcie Piotrka - jednego z naszych trenerów personalnych w Katowicach!',
    LearnMore: 'Dowiedz się więcej o Piotrze!'},
    
  { srcDesktop: imgNataliaDesktop,
    srcMobile: imgNataliaMobile,
    srcMinature: imgNataliaMinature,
    name: 'NATALIA',
    background: personnelBackground4,
    description: 'Poznajcie Natalię - naszą utalentowaną masażystkę!',
    LearnMore: 'Umów się na masaż!'},

  { srcDesktop: imgDawidDesktop,
    srcMobile: imgDawidMobile,
    srcMinature: imgDawidMinature,
    name: 'DAWID',
    background: personnelBackground3,
    description: 'Poznajcie Dawida - naszego specjalistę od fizjoterapii ortopedycznej i treningu medycznego!',
    LearnMore: 'Skonsultuj się z Dawidem!'},

];

/**
 * @function PersonnelPage
 * @returns {JSX.Element} - Component representing the personnel page of the application.
 */
function PersonnelPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [isPersonLoaded, setisPersonLoaded] = useState(false);
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
        setisPersonLoaded(false);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === trainersData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setisPersonLoaded(false);
    };

    const setTrueisPersonLoaded = () => {
        setisPersonLoaded(true);
    };

    const currentTrainer = trainersData[currentIndex];

    return (
        <>
        <Header/>
        <div 
            className="mainPersonnelBox" 
            style={{backgroundImage: `url(${blackCurtain})` }}
        >
            <h1 data-text="NASZ TEAM">NASZ TEAM</h1>
            {isMobile ? (
                <>
                <div className="mobileGalleryWrapper" style={{ backgroundImage: `url(${trainersData[currentIndex]?.background})`}}>
                    <div className='mobileGalleryImgBox' style={{ backgroundImage: isPersonLoaded ? 'none' : `url(${trainersData[currentIndex]?.srcMinature || ''})`,}}>
                        <img
                            src={trainersData[currentIndex]?.srcMobile}
                            alt={`Trener Personalny ${trainersData[currentIndex]?.name || ''}`}
                            loading="lazy"
                            onLoad={() => setTrueisPersonLoaded()}
                            style={{ opacity: isPersonLoaded ? 1 : 0 }}
                        />
                    </div>
                    <div className="galleryArrows">
                    <span className="leftArrow" onClick={goToPrevious}>❮</span>
                    <span className="rightArrow" onClick={goToNext}>❯</span>
                    </div>
                    <div className='mobileDescriptionBox'src={`url(${personnelBackground0})`} >
                        <span className='mobileGalleryName'>{currentTrainer.name}</span>
                        <span className='mobileGalleryDescription'>{currentTrainer.description}</span>
                        <a href="/kontakt" className='mobileLearnMore'>{currentTrainer.LearnMore || 'Dowiedz się więcej'}</a>
                    </div>
                </div>

                <div className="thumbnails">
                    {trainersData.map((trainer, index) => (
                    <img
                        key={index}
                        src={trainer.srcMinature}
                        alt={`Miniaturka ${trainer.name}`}
                        className={index === currentIndex ? 'thumbnail active' : 'thumbnail'}
                        onClick={() => { 
                            setCurrentIndex(index); 
                            setisPersonLoaded(false); 
                        }}
                    />
                    ))}
                </div>
                </>
            ) : (
                <div className='desktopGalleryWrapper'>
                    {[2, 3].map((count, rowIndex) => (
                        <div className='desktopGalleryRow' key={rowIndex} >
                            {trainersData.slice(
                                rowIndex === 0 ? 0 : 2, // Start index: 0 for first row, 2 for second
                                rowIndex === 0 ? 2 : 5  // End index: 2 for first row, 5 for second
                            ).map((trainer, colIndex) => (
                                <div className='desktopGalleryBox' 
                                    key={rowIndex * 10 + colIndex}
                                    style={{ backgroundImage: `url(${trainer.background})` }}
                                    loading='lazy'
                                >
                                    <img src={trainer.srcDesktop} alt={`Trener Personalny ${trainer.name}`} />
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