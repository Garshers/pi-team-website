import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';
import courseImage from '../../../assets/Course/CourseImg.jpeg';


import DSC2943 from '../../../assets/Oryginals/_DSC2943.jpg';
import DSC2954 from '../../../assets/Oryginals/_DSC2954.jpg';
import DSC3526 from '../../../assets/Oryginals/_DSC3526.jpg';
import DSC3651 from '../../../assets/Oryginals/_DSC3651.jpg';
import CampImgOryginal from '../../../assets/Oryginals/CampImg_Oryginal.jpg';
import CourseImgOryginal from '../../../assets/Oryginals/CourseImg_Oryginal.jpg';
import GymImgOryginal from '../../../assets/Oryginals/GymImgIza_Oryginal.jpg';
import MassageImgOryginal from '../../../assets/Oryginals/MassageImg_Oryginal.jpeg';
import PoolImgOryginal from '../../../assets/Oryginals/PoolImg_Oryginal.jpeg';

const item = {
    image: courseImage,
    minatureImage: courseImage,
    midImage: courseImage,
    smallImage: courseImage,
    alt: 'Kurs Trenera Personalnego PITEAM - kompleksowe szkolenie online i stacjonarne w Katowicach',
    title: 'Zostań Certyfikowanym Trenerem Personalnym z PITEAM - Szkolenie Katowice',
    key: 'personalTrainerCourse',
    primary: 'KURS TRENERA PERSONALNEGO',
    secondary: 'Zdobądź certyfikat i wiedzę niezbędną do pracy jako profesjonalny trener personalny. Nasz kurs obejmuje anatomię, fizjologię, metodykę treningu, dietetykę i psychologię sportu. Przygotuj się do zawodu z najlepszymi!',
    schema: {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Kurs Trenera Personalnego PITEAM",
        "description": "Kompleksowe szkolenie dla przyszłych trenerów personalnych, obejmujące teorię i praktykę w PITEAM.",
        "provider": {
            "@type": "Organization",
            "name": "PITEAM",
            "sameAs": "https://www.piteam.pl"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Blended",
            "location": {
                "@type": "Place",
                "name": "PITEAM - Katowice",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Francuska 184",
                    "addressLocality": "Katowice",
                    "addressRegion": "Śląskie",
                    "postalCode": "40-507",
                    "addressCountry": "PL"
                }
            },
            "instructor": {
                "@type": "Person",
                "name": "Patryk Iwaszczyszyn",
                "url": "https://www.piteam.pl/kadra/patryk-iwaszczyszyn"
            },
            "startDate": "2025-09-01",
            "endDate": "2025-12-31",
            "offers": {
                "@type": "Offer",
                "price": "3500.00",
                "priceCurrency": "PLN",
                "url": "http://localhost:3000/kontakt"
            },
            "educationalCredentialAwarded": "Certyfikat Trenera Personalnego PITEAM"
        }
    }
};

const imagesArray = [
  {
    id: "course-training-uniqueid445",
    alt: "Kurs trenera personalnego - szkolenie teoretyczne",
    src: DSC2943,
  },
  {
    id: "personal-training-course-uniqueid446",
    alt: "Kurs trenera personalnego - praktyczne zajęcia",
    src: DSC2954,
  },
  {
    id: "course-instruction-uniqueid450",
    alt: "Kurs trenera personalnego - instrukcja z ekspertem",
    src: CourseImgOryginal,
  },
  {
    id: "personal-training-uniqueid451",
    alt: "Trening personalny na nowoczesnej siłowni",
    src: GymImgOryginal,
  },
  {
    id: "swimming-training-uniqueid454",
    alt: "Treningi pływackie - profesjonalna strefa basenowa",
    src: PoolImgOryginal,
  },
  {
    id: "sports-camp-outdoor-uniqueid447",
    alt: "Obóz sportowy - treningi na świeżym powietrzu",
    src: DSC3526,
  },
  {
    id: "sports-camp-pool-uniqueid448",
    alt: "Obóz sportowy - zajęcia przy basenie",
    src: DSC3651,
  },
  {
    id: "sports-camp-activities-uniqueid449",
    alt: "Obóz sportowy - różnorodne zajęcia fitness",
    src: CampImgOryginal,
  },
];

/**
 * @function CoursePage
 * @returns {JSX.Element} - Component representing the course page of the application.
 */
function CoursePage() {
  return (
    <>
    <Header />
    <div className="courseMainBox" style={{ backgroundImage: `url(${background})`}}>
        <MainImage item={item} />
        <div className="main-container"> <div className="courseTextBox">
        <h2>Uczymy przez Doświadczenie</h2>
        <h1>Twoja Droga do Sukcesu w Fitnessie z Ekspertami Branży</h1>
        <p>
            Zapomnij o suchych wykładach i przestarzałych podręcznikach. W PI TEAM zmieniamy zasady gry.
            Zamiast teorii, oferujemy bezpośredni dostęp do wiedzy i doświadczenia czołowych postaci polskiej branży fitness.
            To oni, Twoi przyszli mentorzy, dzielą się sprawdzonymi ścieżkami, które sami przeszli, budując swoje imperia trenerskie.
        </p>
        <div className="coursePoint">
            <span className="coursePointIcon">&#10532;</span>
            <div className="coursePointText">
                <h3>Dlaczego warto wybrać nasz kurs?</h3>
                <p>
                    Chcesz wiedzieć, jak zbudować markę osobistą, prowadzić dochodowy biznes trenerski, czy zarządzać topowym klubem fitness?
                    Uczysz się od tych, którzy to osiągnęli.
                    Nasi eksperci to aktywni gracze na rynku, którzy na co dzień pracują z wymagającymi klientami i znają branżę od podszewki.
                    Ich praktyczne spojrzenie to Twój największy atut.
                </p>
            </div>
        </div>
    </div>
    <ContactForm className="contact-form-absolute"/> </div>
        <div className='imageGalleryWrapper'>
            <ImageGallery
                imagesInfoArray={imagesArray}
                columnCount={4}
                gapSize={5}
                style='visible grid'
            />
        </div>
    </div>
    </>
  );
}

export default CoursePage;