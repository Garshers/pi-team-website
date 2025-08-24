import React from 'react';
import './campPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';

import background from '../../../assets/Gym/background.jpg';

import campImage from '../../../assets/Camp/CampeImgBackground.jpg';
import campImageBlurred from '../../../assets/Camp/CampeImgBackground.jpg';
import campImageMid from '../../../assets/Camp/CampeImgBackground.jpg';
import campImageSmall from '../../../assets/Camp/CampeImgBackground.jpg';

const item = {
    image: campImage,
    minatureImage: campImageBlurred,
    midImage: campImageMid,
    smallImage: campImageSmall,
    alt: 'Obozy sportowe - intensywne treningi i rozwój umiejętności w zorganizowanej grupie',
    title: 'Obozy Sportowe - Rozwijaj Pasję, Buduj Formę',
    key: 'sportscamp1',
    primary: 'OBOZY SPORTOWE',
    secondary: 'Przeżyj niezapomniane sportowe lato! Nasze obozy oferują intensywne treningi pod okiem doświadczonych instruktorów, rozwijając Twoje umiejętności i wytrzymałość. To idealna okazja, by połączyć aktywny wypoczynek z postępem w wybranej dyscyplinie, budując siłę i charakter w gronie pasjonatów.',
    schema: {
        "@type": "Service",
        "name": "Obozy Sportowe",
        "description": "Profesjonalne obozy sportowe dla dzieci i młodzieży, skupiające się na rozwoju umiejętności, kondycji i pracy zespołowej.",
        "provider": {
            "@type": "Organization",
            "name": "PITEAM"
        }
    }
}
/**
 * @function CampPage
 * @returns {JSX.Element} - Component representing the camp page of the application.
 */
function CampPage() {
    return (
        <><Header/>
        <div className="gymMainBox" 
            style={{ backgroundImage: `url(${background})`, backdropFilter: 'blur(5px)' }}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            itemID="CampPageBackground"
        >
            <MainImage item={item} />

            <ContactForm/>
            <CheckAlsoSection />
        </div>
        </>
    );
}

export default CampPage;