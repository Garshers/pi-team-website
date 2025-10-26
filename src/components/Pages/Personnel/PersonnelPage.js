import React, { useState, useEffect, useCallback } from 'react';
import './personnelPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import PersonnelGallery from '../../Content/PersonnelGallery.js';
import { trainersData } from '../../Content/PersonnelData.js';

import blackCurtainMobile from '../../../assets/Personnel/blackCurtainMobile.jpg';
import blackCurtainDesktop from '../../../assets/Personnel/blackCurtainDesktop240p.jpg';

const MOBILE_BREAKPOINT = 900;
const LARGE_SCREEN_BREAKPOINT = 1400;

function PersonnelPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > LARGE_SCREEN_BREAKPOINT);
  
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

  return (
    <>
      <Header/>
      <div className="mainPersonnelBox" style={{backgroundImage: isMobile ? `url(${blackCurtainMobile})` : `url(${blackCurtainDesktop})`}}>
        <h1 data-text="NASZ TEAM">NASZ TEAM</h1>
        
        <PersonnelGallery 
          isMobile={isMobile}
          isLargeScreen={isLargeScreen}
          trainers={trainersData}
        />
        
        <CheckAlsoSection></CheckAlsoSection>
      </div>
    </>
  );
}

export default PersonnelPage;