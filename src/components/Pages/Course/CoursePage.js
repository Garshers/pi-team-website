import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';
import courseImage from '../../../assets/Course/CourseImg.jpeg';

import gymImage_Mid from '../../../assets/HomePage/GymImg_Mid.jpeg';
import poolImage_Mid from '../../../assets/HomePage/PoolImg_Mid.jpeg';
import courseImage_Mid from '../../../assets/HomePage/CourseImg.jpeg';
import massageImage_Mid from '../../../assets/HomePage/MassageImg.jpeg';
import campImage_Mid from '../../../assets/HomePage/CampImg.jpeg';

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
    id: "patryk-uniqueid111",
    alt: "Zdjęcie Patryka",
    src: courseImage_Mid,
  },
  {
    id: "iza-uniqueid222",
    alt: "Zdjęcie Izy",
    src: poolImage_Mid,
  },
  {
    id: "piotr-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: gymImage_Mid,
  },
  {
    id: "piotr2-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: massageImage_Mid,
  },
  {
    id: "iza2-uniqueid222",
    alt: "Zdjęcie Izy",
    src: campImage_Mid,
  },
  {
    id: "piotr3-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: poolImage_Mid,
  },
  {
    id: "piotr4-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: gymImage_Mid,
  },
  {
    id: "iza3-uniqueid222",
    alt: "Zdjęcie Izy",
    src: courseImage_Mid,
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
        <ContactForm/>
        <div className='imageGalleryWrapper'>
            <ImageGallery
                imagesInfoArray={imagesArray}
                columnCount={4}
                gapSize={5}
            />
        </div>
    </div>
    </>
  );
}

export default CoursePage;