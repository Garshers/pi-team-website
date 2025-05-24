import React from 'react';
import './personnelPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

import ImgTrainer1 from '../../../assets/Gym/Trainer1.jpg';

/**
 * @function PersonnelPage
 * @returns {JSX.Element} - Component representing the personnel page of the application.
 * It includes a photo gallery.
 */
function PersonnelPage() {
    return (
        <><Header/>
        <div className="mainBox">
            <img src={ImgTrainer1} className="trainerProfile"></img>
            <img src={ImgTrainer1} className="trainerProfile"></img>
            <img src={ImgTrainer1} className="trainerProfile"></img>
        </div>
        </>
    );
}

export default PersonnelPage;