import React from 'react';
import './gymPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';

import background from '../../../assets/Gym/background.jpg';
import gymImageBlurred from '../../../assets/Gym/GymImgBackground_Blurred.jpeg';
import gymImage from '../../../assets/Gym/GymImgBackground.jpeg';

const item = {
    image: gymImage,
    minatureImage: gymImageBlurred,
    midImage: gymImage,
    smallImage: gymImage,
    alt: 'Treningi personalne - profesjonalna siłownia z nowoczesnym sprzętem treningowym',
    title: 'Treningi Personalne - Indywidualne Podejście do Treningów',
    key: 'gym1',
    primary: 'TRENINGI PERSONALNE',
    secondary: 'Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy',
    schema: {
        "@type": "Service",
        "name": "Treningi Personalne",
        "description": "Profesjonalne treningi personalne dostosowane do indywidualnych potrzeb",
        "provider": {
            "@type": "Organization",
            "name": "PITEAM"
        }
    }
}

/**
 * @function GymPage
 * @returns {JSX.Element} - Component representing the gym page of the application.
 */
function GymPage() {
    return (
        <><Header/>
        <div className="gymMainBox" 
            style={{ backgroundImage: `url(${background})`, backdropFilter: 'blur(5px)' }}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            itemID="gymPageBackground"
        >
            <MainImage item={item} />
            <div className="gymTextBox">
                <p className="gymText">
                    Rozpocznij swoją przygodę ze zdrowiem i kondycją! 
                    Oferujemy najnowocześniejszy sprzęt, zajęcia prowadzone przez doświadczonych instruktorów 
                    oraz wspierającą społeczność. Dołącz do nas i przekonaj się, jak łatwo 
                    możesz osiągnąć swoje cele treningowe!
                </p>
            </div>
            <ContactForm/>
        </div>
        </>
    );
}

export default GymPage;