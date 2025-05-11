import React, { useState } from 'react';
import './galleryStyle.css';
import gymImage from '../../assets/HomePage3.jpeg';
import gymImage_Small from '../../assets/HomePage3_Small.jpeg';
import poolImage from '../../assets/HomePage1.jpeg';
import poolImage_Small from '../../assets/HomePage1_Small.jpeg';
import courseImage from '../../assets/HomePage3_copy.jpeg';
import courseImage_Small from '../../assets/HomePage3_copy_Small.jpeg';
import campImage from '../../assets/HomePage1_copy.jpeg';
import campImage_Small from '../../assets/HomePage1_copy_Small.jpeg';

function HomePageGallery() {
    const [loadedStates, setLoadedStates] = useState([false, false, false, false]);

    const handleImageLoad = (index) => {
        const newLoadedStates = [...loadedStates];
        newLoadedStates[index] = true;
        console.log("Loaded index: ", index, "(", newLoadedStates[index], ")");
        setLoadedStates(newLoadedStates);
    };

    return (
        <div className='galleryMainFrame'>
            <div className='galleryRow'>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${gymImage_Small})`, filter: loadedStates[0] ? 'none' : 'blur(5px)' }}
                    >
                        <img
                            src={gymImage}
                            alt='siłownia'
                            className='galleryImageStyle'
                            loading="lazy"
                            key={'gym1'}
                            onLoad={() => handleImageLoad(0)}
                            style={{ opacity: loadedStates[0] ? 1 : 0 }}
                        />
                        {console.log('Ścieżka obrazu 0:', loadedStates[0] ? gymImage : gymImage_Small)}
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Siłownia</div>
                        <div className='galleryBoxName__secondary'>Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy</div>
                    </div>
                </a>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${poolImage_Small})`, filter: loadedStates[1] ? 'none' : 'blur(5px)' }}
                    >
                        <img
                            src={poolImage}
                            alt='basen'
                            className='galleryImageStyle'
                            loading="lazy"
                            key={'pool1'}
                            onLoad={() => handleImageLoad(1)}
                            style={{ opacity: loadedStates[1] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Basen</div>
                        <div className='galleryBoxName__secondary'>Chcesz się czuć jak ryba w wodzie dosłownie i w przenośni? Lepiej nie trafisz!</div>
                    </div>
                </a>
            </div>
            <div className='galleryRow'>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${courseImage_Small})`, filter: loadedStates[2] ? 'none' : 'blur(5px)' }}
                    >
                        <img
                            src={courseImage}
                            alt='Kurs Trenera Personalnego'
                            className='galleryImageStyle'
                            loading="lazy"
                            key={'course'}
                            onLoad={() => handleImageLoad(2)}
                            style={{ opacity: loadedStates[2] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Obozy Sportowe</div>
                        <div className='galleryBoxName__secondary'>Wakacje, które robią formę - sportowy reset i piękna pogoda.</div>
                    </div>
                </a>
                <a href={'/'} className='galleryBox'>
                    <div
                        className="blurred-img"
                        style={{ backgroundImage: `url(${campImage_Small})`, filter: loadedStates[3] ? 'none' : 'blur(5px)' }}
                    >
                        <img
                            src={campImage}
                            alt='Obozy Sportowe'
                            className='galleryImageStyle'
                            loading="lazy"
                            key={'camp'}
                            onLoad={() => handleImageLoad(3)}
                            style={{ opacity: loadedStates[3] ? 1 : 0 }}
                        />
                    </div>
                    <div className='galleryBoxName'>
                        <div className='galleryBoxName__primary'>Kurs Trenera Personalnego</div>
                        <div className='galleryBoxName__secondary'>Marzysz o pracy, która łączy sport, rozwój i poczucie satysfakcji? Zostań trenerem personalnym! Potężna dawka nowoczesnej wiedzy, działającej praktyki i skutecznej motywacji. Nauczysz się, jak planować treningi, budować relacje z klientem i być najlepszym w swoim fachu. Tylko z PITEAM.</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default HomePageGallery;