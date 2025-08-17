import React from 'react';
import './massagePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';

import background from '../../../assets/Gym/background.jpg';

import gymImage from '../../../assets/Gym/GymImgBackground.jpeg';
import gymImageBlurred from '../../../assets/Gym/GymImgBackground_Blurred.jpeg';
import gymImageMid from '../../../assets/Gym/GymImgBackground_Mid.jpeg';
import gymImageSmall from '../../../assets/Gym/GymImgBackground_Small.jpeg';

const item = {
    image: gymImage,
    minatureImage: gymImageBlurred,
    midImage: gymImageMid,
    smallImage: gymImageSmall,
    alt: 'Masaże relaksacyjne - chwila ukojenia i odprężenia dla ciała i umysłu',
    title: 'Masaże Relaksacyjne - Oaza Spokoju i Regeneracji',
    key: 'massage1',
    primary: 'MASAŻE RELAKSACYJNE',
    secondary: 'Pozwól sobie na chwilę głębokiego relaksu i odprężenia. Nasze masaże pomogą Ci zredukować stres, rozluźnić napięte mięśnie i odzyskać wewnętrzną równowagę. Zadbaj o swoje ciało i umysł z naszymi doświadczonymi terapeutami.',
    schema: {
        "@type": "Service",
        "name": "Masaże Relaksacyjne",
        "description": "Profesjonalne masaże relaksacyjne, które przynoszą ulgę w stresie i napięciu mięśniowym.",
        "provider": {
            "@type": "Organization",
            "name": "PITEAM"
        }
    }
}
/**
 * @function MassagePage
 * @returns {JSX.Element} - Component representing the massage page of the application.
 */
function MassagePage() {
    return (
        <><Header/>
        <div className="gymMainBox" 
            style={{ backgroundImage: `url(${background})`, backdropFilter: 'blur(5px)' }}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            itemID="MassagePageBackground"
        >
            <MainImage item={item} />

            <ContactForm/>
            <CheckAlsoSection />
        </div>
        </>
    );
}

export default MassagePage;