import React from 'react';
import './homePageStyle.css';
import Gallery from '../../Gallery/Gallery';
import HomePageGallery from '../../Gallery/HomePageGallery.js';
import { Header } from '../../HeaderAndFooter/header.js';
import Items from './TabsArray.js';

import MainVideo from "../../../assets/MainVideo.mp4";

/**
 * @function HomePage
 * @returns {JSX.Element} - Component representing the home page of the application.
 * It includes a background video section and a photo gallery. It utilizes the Header component
 * to display the navigation menu.
 */
function HomePage() {
    return (
        <>{/*<Header menuItems={Items} />*/}
        <div className="mainBox">
            {/*<div className='mainVideoContainer'>
                <video
                    src={MainVideo}r
                    autoPlay
                    loop
                    muted
                    className="mainVideoStyle"
                />
            </div>*/}

            {/* Renders the HomePageGallery component*/}
            {/* <Gallery photos={photoDataContent} /> */}
            <HomePageGallery />
        </div></>
    );
}

export default HomePage;