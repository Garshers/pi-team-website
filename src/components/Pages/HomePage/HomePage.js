import React from 'react';
import HomePageGallery from '../../Gallery/HomePageGallery.js';

/**
 * @function HomePage
 * @returns {JSX.Element} - Component representing the home page of the application.
 */
function HomePage() {
    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            height: 'fit-content',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <HomePageGallery />
        </div>
    );
}

export default HomePage;