import React from 'react';
import './gymPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import gymImage from '../../../assets/HomePage3.jpeg';

/**
 * @function GymPage
 * @returns {JSX.Element} - Component representing the gym page of the application.
 */
function GymPage() {
    return (
        <><Header/>
        <div className="gymMainBox">
            <div className="gymImageBox" style={{ backgroundImage: `url(${gymImage})` }}>
                <div className="gymOverlay">
                    <h1 className="gymTitle">Treningi Personalne</h1>
                    <p className="gymDescription">Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default GymPage;