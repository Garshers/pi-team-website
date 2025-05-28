import React from 'react';
import './contactPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

import Logo from "../../../assets/Logo.PNG";
import ImgContact from '../../../assets/Contact/TeamBackground.jpeg';

/**
 * @function ContactPage
 * @returns {JSX.Element} - Component representing the Contact page of the application.
 */
function ContactPage() {
    return (
        <><Header/>
        <div className="mainContactBox" style={{ backgroundImage: `url(${ImgContact})` }}>
            <div className='contactContainer'>
                <img src={Logo} className="contactImage" alt="Logo piteam"></img>
                <div className="contactDescriptionBox">
                    <h1 className="contactTitle">Kontakt</h1>
                    <p className="contactDescription">Telefon: +48 123 456 789</p>
                    <p className="contactDescription">Email: piteam@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactPage;