import React from 'react';
import './gymPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'
import MainPageImage from '../../MainPageImage/MainPageImage.js'

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
            <MainPageImage 
                Image={gymImage}
                Title={'Treningi Personalne'}
                Description={'Chcesz, by Twoja determinacja, charakter i upór była zauważana i interpretowana już przez pryzmat samego wyglądu? Jak bardzo wygląd przekłada się na postrzeganie Ciebie jako osoby? Zapraszamy do współpracy'}
            />
            <div className="gymTextBox">
                <p className="gymText">
                    Rozpocznij swoją przygodę ze zdrowiem i kondycją! 
                    Oferujemy najnowocześniejszy sprzęt, zajęcia prowadzone przez doświadczonych instruktorów 
                    oraz wspierającą społeczność. Dołącz do nas i przekonaj się, jak łatwo 
                    możesz osiągnąć swoje cele treningowe!
                </p>
            </div>
            <ContactForm/>
            <div className="gymCheckAlsoContainer">
                <a href="/treningi-plywackie" className="gymCheckAlsoBox">Treningi Pływackie</a>
                <a href="/kursy-trenera-personalnego" className="gymCheckAlsoBox">Kursy Trenera Personalnego</a>
                <a href="/obozy-sportowe" className="gymCheckAlsoBox">Obozy Sportowe</a>
                <a href="/masaze" className="gymCheckAlsoBox">Masaże</a>
            </div>
        </div>
        </>
    );
}

export default GymPage;