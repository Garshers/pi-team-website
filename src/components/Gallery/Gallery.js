import React, { useState, useEffect } from 'react';
import './galleryStyle.css';

function Gallery({ photos }) {
    const galleryLayouts = ['50/50', '40/60', '60/40'];
    const galleryendpoints = [
        '/o_nas',
        '/plywanie_dorosli',
        '/plywanie_dzieci',
        '/interwaly',
        '/lokalizacje',
        '/harmonogram',
        '/wyjazdy',
        '/'
      ];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='galleryMainFrame'>
            {photos.reduce((rows, photo, index, array) => {
                if (index % 2 === 0) {
                    rows.push(array.slice(index, index + 2));
                }
                return rows;
            }, []).map((pair, rowIndex) => {
                const layout = galleryLayouts[rowIndex % galleryLayouts.length];
                const [width1, width2] = layout.split('/').map(Number);
                const endpoint1 = galleryendpoints[(rowIndex * 2) % galleryendpoints.length];
                const endpoint2 = galleryendpoints[(rowIndex * 2 + 1) % galleryendpoints.length];
                const photo1 = pair[0];
                const photo2 = pair[1];

                return (
                    <div className='galleryRow' key={`row-${rowIndex}`}>
                        {photo1 && photo2 && (
                            <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${width1}%`, padding: isMobile ? '0' : '10px 5px 0 10px',}}>
                                <img src={photo1.image} alt=''  className='galleryImageStyle' loading="lazy" key={photo1.id}/>
                                <a href={endpoint1} className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                        {photo1 && !photo2 && (
                            <div className='galleryBox' style={{ width: `${100}%`, padding: isMobile ? '0' : '10px 5px 0 10px',}}>
                                <img src={photo1.image} alt='' className='galleryImageStyle' loading="lazy" key={photo1.id}/>
                                <a href={endpoint2} className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                        {photo2 && (
                            <div className='galleryBox'style={{width: isMobile ? 'auto' : `${width2}%`,padding: isMobile ? '0' : '10px 10px 0 5px',}}>
                                <img src={photo2.image} alt='' className='galleryImageStyle' loading="lazy" key={photo2.id}/>
                                <a href={endpoint2} className='galleryButtonLink'>Zobacz więcej</a>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;