import React from 'react';
import './contactPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'

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
                    <h1>Kontakt</h1>
                    <p>Telefon: +48 123 456 789</p>
                    <p>Email: kontakt@piteam.pl</p>
                </div>
            </div>
            <ContactForm/>
        </div>
        </>
    );
}

export default ContactPage;