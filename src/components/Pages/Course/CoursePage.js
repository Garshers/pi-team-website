import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';
import ArrowSection from '../../Content/ArrowSection.js';
import TextBlockWithPoints from '../../Content/TextBlockWithPoints.js';

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

const arrowSectionData = [
    {
      title: 'WIEDZA W OPARCIU O NAUKĘ',
      description: {
        pre: 'Opieramy się wyłącznie na ',
        bold: 'sprawdzonych naukowo metodach',
        post: '. Nasi wykładowcy to doświadczeni praktycy z imponującymi osiągnięciami naukowymi, którzy skutecznie łączą teorię z praktyką.',
      },
    },
    {
      title: 'WYJĄTKOWY CERTYFIKAT',
      description: {
        pre: 'Otrzymujesz ',
        bold: 'unikalny certyfikat',
        post: ', który wyróżni Cię na tle konkurencji. Jest to potwierdzenie najwyższych kwalifikacji, cenione w całej branży.',
      },
    },
    {
      title: 'NA BIEŻĄCO Z TRENDAMI',
      description: {
        pre: 'Nasze programy są ',
        bold: 'stale aktualizowane',
        post: ' o najnowsze badania i trendy w branży. Zawsze będziesz mieć dostęp do najbardziej aktualnej wiedzy i narzędzi.',
      },
    },
  ];

  const pointSectionData = {
    title: 'Uczymy przez Doświadczenie',
    heading: 'Twoja Droga do Sukcesu w Branży Fitnessu',
    paragraph: 'Zapomnij o suchych wykładach i przestarzałych podręcznikach. W PITEAM zmieniamy zasady gry. Zamiast teorii, oferujemy bezpośredni dostęp do wiedzy i doświadczenia czołowych postaci polskiej branży fitness. To oni, Twoi przyszli mentorzy, dzielą się sprawdzonymi ścieżkami, które sami przeszli, budując swoje imperia trenerskie.',
    image: courseTextBoxImage,
    points: [
      {
        title: 'Dlaczego warto wybrać nasz kurs?',
        text: 'Chcesz wiedzieć, jak zbudować markę osobistą oraz prowadzić dochodowy biznes trenerski? Uczysz się od tych, którzy to osiągnęli. Nasi eksperci to aktywni gracze na rynku, którzy na co dzień pracują z wymagającymi klientami i znają branżę od podszewki. Ich praktyczne spojrzenie to Twój największy atut.',
      },
      {
        title: 'Ulepszone Metody Treningowe',
        text: 'Otrzymasz skuteczne protokoły treningowe, poparte najnowszymi badaniami. Eliminujemy zgadywanie, dając Ci gotowe do wdrożenia rozwiązania dla Twoich klientów.',
      },
    ],
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
          <ArrowSection sections={arrowSectionData} />

          <TextBlockWithPoints
            title={pointSectionData.title}
            heading={pointSectionData.heading}
            paragraph={pointSectionData.paragraph}
            points={pointSectionData.points}
            imageSrc={pointSectionData.image}
          />
          
          <ContactForm/>
        </div>
        <CheckAlsoSection></CheckAlsoSection>
    </div>
    </>
  );
}

export default CoursePage;