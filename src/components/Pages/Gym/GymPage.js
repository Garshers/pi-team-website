import React from 'react';
import './gymPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import Items from '../../../assets/Arrays/TabsArray.js';

/**
 * @function GymPage
 * @returns {JSX.Element} - Component representing the home page of the application.
 * It includes a photo gallery.
 */
function HomePage() {
    return (
        <>
        <div className="mainBox">
            <Header menuItems={Items} />
   

        </div>
        </>
    );
}

export default HomePage;