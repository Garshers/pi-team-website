import React from 'react';
import HomePageGallery from '../../Gallery/HomePageGallery.js';
import { Header } from '../../HeaderAndFooter/header.js';

/**
 * @function HomePage
 * @returns {JSX.Element} - Component representing the home page of the application.
 */
function HomePage() {
    return (
        <><Header/>
        <div style={{
            width: '100%',
            minHeight: '100svh',
            height: 'fit-content',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <HomePageGallery />
        </div>
        </>
    );
}

export default HomePage;