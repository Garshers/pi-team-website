import React, { useState, useEffect } from 'react';
import './galleryStyle.css';
import gymImage from '../../assets/HomePage3.jpeg';
import poolImage from '../../assets/HomePage1.jpeg'

function HomePageGallery() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='galleryMainFrame'>
            <div className='galleryRow'>
                <div className='galleryBox' style={{ height: '100vh', width: isMobile ? 'auto' : `${25}%`, padding: isMobile ? '0' : '5px 5px 0 5px',}}>
                    <img src={gymImage} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${25}%`, padding: isMobile ? '0' : '5px 5px 0 0',}}>
                    <img src={poolImage} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${25}%`, padding: isMobile ? '0' : '5px 5px 0 0',}}>
                    <img src={gymImage} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${25}%`, padding: isMobile ? '0' : '5px 5px 0 0',}}>
                    <img src={poolImage} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
            </div>
        </div>
    );
}

export default HomePageGallery;

/*
function HomePageGallery() {
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
            <div className='galleryRow'>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${48}%`, padding: isMobile ? '0' : '5px 5px 0 5px',}}>
                    <img src={'https://images.unsplash.com/photo-1742155032253-744e8adaafc8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${52}%`, padding: isMobile ? '0' : '5px 5px 0 0',}}>
                    <img src={'https://images.unsplash.com/photo-1741851374721-a546dc41561a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
            </div>
            <div className='galleryRow'>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${55}%`, padding: isMobile ? '0' : '5px 5px 0 5px',}}>
                    <img src={'https://images.unsplash.com/photo-1742155032253-744e8adaafc8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
                <div className='galleryBox' style={{ width: isMobile ? 'auto' : `${45}%`, padding: isMobile ? '0' : '5px 5px 0 0',}}>
                    <img src={'https://images.unsplash.com/photo-1741851374721-a546dc41561a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        alt='lena' className='galleryImageStyle' loading="lazy" key={'lena'} />
                    <a href={'/'} className='galleryButtonLink'>Zobacz więcej</a>
                </div>
            </div>
        </div>
    );
}*/