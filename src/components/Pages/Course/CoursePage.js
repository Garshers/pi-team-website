import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';

import background from '../../../assets/Gym/background.jpg';
import courseImage from '../../../assets/Course/CourseImg.jpeg';
import courseTextBoxImage from '../../../assets/Course/CourseTextBoxImage.jpg';

const item = {
    image: courseImage,
    minatureImage: courseImage,
    midImage: courseImage,
    smallImage: courseImage,
    alt: 'Kurs Trenera Personalnego PITEAM - kompleksowe szkolenie online i stacjonarne w Katowicach',
    title: 'Zostań Certyfikowanym Trenerem Personalnym z PITEAM - Szkolenie Katowice',
    key: 'personalTrainerCourse',
    primary: 'KURS NA TRENERA PERSONALNEGO',
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
        <div className="main-container"> 
          <div className="arrowSection">
            <div className='arrowSectionBox'>
              <span className="arrow">&#10132;</span>
              <h2 className="arrowText">WIEDZĄ WYPRZEDZAMY INNYCH</h2>
              <p>Bazujemy wyłącznie na metodach potwierdzonych naukowo. Nasi wykładowcy to praktycy z wieloletnim doświadczeniem i tytułami naukowymi, którzy łączą teorię z praktyką.</p>
            </div>
            <div className='arrowSectionBox'>
              <span className="arrow">&#10132;</span>
              <h2 className="arrowText">JEDYNY TAKI CERTYFIKAT W POLSCE</h2>   
              <p>Bazujemy wyłącznie na metodach potwierdzonych naukowo. Nasi wykładowcy to praktycy z wieloletnim doświadczeniem i tytułami naukowymi, którzy łączą teorię z praktyką.</p>
            </div>
            <div className='arrowSectionBox'>
              <span className="arrow">&#10132;</span>
              <h2 className="arrowText">17 000 ZADOWOLONYCH ABSOLWENTÓW</h2>
              <p>Bazujemy wyłącznie na metodach potwierdzonych naukowo. Nasi wykładowcy to praktycy z wieloletnim doświadczeniem i tytułami naukowymi, którzy łączą teorię z praktyką.</p>
            </div>
          </div>

          <div className='courseMainContainer'>
            <div className="courseTextBox">
              <img src={courseTextBoxImage} alt="Kurs Trenera Personalnego PITEAM" />
              <h2>Uczymy przez Doświadczenie</h2>
              <h1>Twoja Droga do Sukcesu w Fitnessie z Ekspertami Branży</h1>
              <p className='courseTextBoxDescription'>
                  Zapomnij o suchych wykładach i przestarzałych podręcznikach. W PITEAM zmieniamy zasady gry.
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
          </div>
          
          <ContactForm/>
        </div>
        <CheckAlsoSection></CheckAlsoSection>
    </div>
    </>
  );
}

export default CoursePage;