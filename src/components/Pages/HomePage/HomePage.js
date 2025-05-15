import React from 'react';
import './homePageStyle.css';
import Gallery from '../../Gallery/Gallery';
import HomePageGallery from '../../Gallery/HomePageGallery.js';
import { Header } from '../../HeaderAndFooter/header.js';
import Items from './TabsArray.js';

/**
 * @function HomePage
 * @returns {JSX.Element} - Component representing the home page of the application.
 * It includes a photo gallery.
 */
function HomePage() {
    return (
        <>{/*<Header menuItems={Items} />*/}
        <div className="mainBox">
            {/* Renders the HomePageGallery component*/}
            {/* <Gallery photos={photoDataContent} /> */}
            <HomePageGallery />
        </div></>
    );
}

export default HomePage;