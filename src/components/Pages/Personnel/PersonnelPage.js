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
  { src: imgPatryk, name: 'TRENER PATRYK', description: 'Specjalizuje się w treningu siłowym i redukcji tkanki tłuszczowej.', callToAction: 'Kliknij, aby poznać Patryka!',  hoverDisplacement: '70px' },
  { src: imgIza, name: 'TRENER IZA', description: 'Ekspertka od fitnessu funkcjonalnego i zajęć grupowych.', callToAction: 'Dowiedz się więcej o Izie!',  hoverDisplacement: '70px' },
  { src: imgPiotr, name: 'TRENER PIOTR', description: 'Pomaga w budowaniu masy mięśniowej i poprawie wytrzymałości.', callToAction: 'Dowiedz się więcej o Piotrze!',  hoverDisplacement: '70px' },
  { src: imgMilena, name: 'TRENER MILENA', description: 'Zajmuje się treningiem personalnym dla początkujących i zaawansowanych.', callToAction: 'Poznaj Milenę!',  hoverDisplacement: '70px' },
  { src: imgPatryk, name: 'FIZIOTERAPEUTA DAWID', description: 'Pomaga w rehabilitacji po kontuzjach i poprawie mobilności.', callToAction: 'Skonsultuj się z Dawidem!',  hoverDisplacement: '70px' },
  { src: imgNatalia, name: 'MASAŻYSTKA NATALIA', description: 'Oferuje masaże relaksacyjne i sportowe.', callToAction: 'Umów się na masaż!',  hoverDisplacement: '70px' },
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

    const currentTrainerName = trainersData[currentIndex]?.name || 'Trener';

    return (
        <>
        <Header/>
        <div className="mainPersonnelBox" style={{ backgroundImage: `url(${blackCurtain})` }}>
            {isMobile ? (
                <div className="mobileGalleryWrapper" style={{ backgroundImage: `url(${trainersData[currentIndex]?.src})` }}>
                    <div className="GalleryName">{currentTrainerName}</div>
                    <div className="leftArrow" onClick={goToPrevious}>❮</div>
                    <div className="rightArrow" onClick={goToNext}>❯</div>
                </div>
            ) : (
                <div className='desktopGalleryWrapper'>
                {[0, 1].map((rowIndex) => (
                    <div className='desktopGalleryRow' key={rowIndex}>
                    {trainersData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((trainer, colIndex) => (
                        <div className='desktopGalleryBox' key={rowIndex * 3 + colIndex}>
                            <img src={trainer.src} alt={`Trener Personalny ${trainer.name}`} />
                            <span
                                className='GalleryName'
                                style={{ '--hover-top': trainer.hoverDisplacement }}
                            >
                                {trainer.name}
                            </span>
                            <span className='desktopGalleryDescription'>{trainer.description}</span>
                            <span className='desktopLearnMore'>{trainer.callToAction || 'Dowiedz się więcej'}</span>
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