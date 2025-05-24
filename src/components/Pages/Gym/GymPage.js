import React from 'react';
import './gymPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

import background from '../../../assets/Gym/background.jpg';
import gymImage from '../../../assets/Gym/HomePage3_GymPage.jpeg';

/**
 * @function GymPage
 * @returns {JSX.Element} - Component representing the gym page of the application.
 */
function GymPage() {
    return (
        <><Header/>
        <div className="gymMainBox" style={{ backgroundImage: `url(${background})` }}>
            <div className="gymImageBox" style={{ backgroundImage: `url(${gymImage})` }}>
                <div className="gymOverlay">
                    <h1 className="gymTitle">Treningi Personalne</h1>
                    <p className="gymDescription">Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy</p>
                </div>
            </div>
            <div className='gymFormWrapper'>
                <form className="gymForm">
                    <h1 className="gymFormTitle">Formularz zgłoszeniowy</h1>
                    <input type="text" placeholder="Imię" className="gymInput" required />
                    <input type="text" placeholder="Nazwisko" className="gymInput" required />
                    <input type="email" placeholder="Email" className="gymInput" required />
                    <input type="tel" placeholder="Telefon" className="gymInput" required />
                    <textarea placeholder="Uwagi" className="gymTextarea"></textarea>
                    <button type="submit" className="gymButton">Wyślij</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default GymPage;