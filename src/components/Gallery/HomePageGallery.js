import React, { useState, useEffect, useRef } from 'react';
import './galleryStyle.css';
import gymImage from '../../assets/HomePage3.jpeg';
import gymImage_Small from '../../assets/HomePage3_Small.jpeg';
import poolImage from '../../assets/HomePage1.jpeg';
import poolImage_Small from '../../assets/HomePage1_Small.jpeg';
import courseImage from '../../assets/HomePage3.jpeg';
import courseImage_Small from '../../assets/HomePage3_Small.jpeg';
import campImage from '../../assets/HomePage1.jpeg';
import campImage_Small from '../../assets/HomePage1_Small.jpeg';

function HomePageGallery() {
    const [loadedStates, setLoadedStates] = useState([false, false, false, false]);
    const secondaryTextRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [isVisible, setIsVisible] = useState([false, false, false, false]);

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
        {
        threshold: 0.01,
        }
    );

    secondaryTextRefs.forEach(ref => {
        if (ref.current) {
        observer.observe(ref.current);
        }
    });

    return () => {
        observer.disconnect();
    };
    }, [secondaryTextRefs]);

    return (
        <div className='galleryMainFrame'>
            <div className='galleryRow'>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${gymImage_Small})`, filter: loadedStates[0] ? 'none' : 'blur(7px)' }}
                    >
                        <img
                            src={gymImage}
                            alt='siłownia'
                            loading="lazy"
                            key={0}
                            onLoad={() => handleImageLoad(0)}
                            onError={() => console.error("Błąd ładowania obrazu:", gymImage)}
                            style={{ opacity: loadedStates[0] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Siłownia</div>
                        <div className={`galleryBoxName__secondary ${isVisible[0] ? 'animate' : ''}`} ref={secondaryTextRefs[0]}>
                            Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy
                        </div>
                    </div>
                </a>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${poolImage_Small})`, filter: loadedStates[1] ? 'none' : 'blur(7px)' }}
                    >
                        <img
                            src={poolImage}
                            alt='basen'
                            loading="lazy"
                            key={1}
                            onLoad={() => handleImageLoad(1)}
                            onError={() => console.error("Błąd ładowania obrazu:", poolImage)}
                            style={{ opacity: loadedStates[1] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Basen</div>
                        <div className={`galleryBoxName__secondary ${isVisible[1] ? 'animate' : ''}`} ref={secondaryTextRefs[1]}>
                            Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!
                        </div>
                    </div>
                </a>
            </div>
            <div className='galleryRow'>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${courseImage_Small})`, filter: loadedStates[2] ? 'none' : 'blur(7px)' }}
                    >
                        <img
                            src={courseImage}
                            alt='Kurs Trenera Personalnego'
                            loading="lazy"
                            key={2}
                            onLoad={() => handleImageLoad(2)}
                            style={{ opacity: loadedStates[2] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Obozy Sportowe</div>
                        <div className={`galleryBoxName__secondary ${isVisible[2] ? 'animate' : ''}`} ref={secondaryTextRefs[2]}>
                            Wakacje, które robią formę - sportowy reset i piękna pogoda.
                        </div>
                    </div>
                </a>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${campImage_Small})`, filter: loadedStates[3] ? 'none' : 'blur(7px)' }}
                    >
                        <img
                            src={campImage}
                            alt='Obozy Sportowe'
                            loading="lazy"
                            key={3}
                            onLoad={() => handleImageLoad(3)}
                            style={{ opacity: loadedStates[3] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Kurs Trenera Personalnego</div>
                        <div className={`galleryBoxName__secondary ${isVisible[3] ? 'animate' : ''}`} ref={secondaryTextRefs[3]}>
                            Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default HomePageGallery;