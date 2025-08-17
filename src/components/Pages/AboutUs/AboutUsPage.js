import React from 'react';
import './aboutUsPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';

import Logo from "../../../assets/Logo.PNG";

/**
 * @function ContactPage
 * @returns {JSX.Element} - Component representing the Contact page of the application.
 */
function ContactPage() {
    return (
        <><Header/>
        <div className="mainAboutUsBox" style={{ '--logo-url': `url(${Logo})` }}>
            <h1 data-text="O NAS">O NAS</h1>
        </div>
        <CheckAlsoSection></CheckAlsoSection>
        </>
    );
}

export default ContactPage;