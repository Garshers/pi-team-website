import React, { useState, useEffect, useCallback } from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';


import MainImage from '../../MainImage/MainImage.js';
import PromoBanner from '../../Content/PromoBanner.js';
import ArrowSection from '../../Content/ArrowSection.js';
import TextBlockWithPoints from '../../Content/TextBlockWithPoints.js';
import CourseForm from '../../Form/CourseForm.js'
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import PersonnelGallery from '../../Content/PersonnelGallery.js';
import { trainersData } from '../../Content/PersonnelData.js';
import CourseTimeline from '../../Content/CourseTimeline.js';

import background from '../../../assets/Gym/background.jpg';
import offerImage from '../../../assets/Course/IMG_4249_400_320.jpg';
import courseImage from '../../../assets/Course/CourseImg.jpeg';
import courseImageBlurred from '../../../assets/Course/CourseImgBackground_Blurred.jpeg';
import courseImageMid from '../../../assets/Course/CourseImgBackground_Mid.jpeg';
import courseImageSmall from '../../../assets/Course/CourseImgBackground_Small.jpeg';
import courseTextBoxImage from '../../../assets/Course/CourseTextBoxImage.jpg';

const item = {
    image: courseImage,
    minatureImage: courseImageBlurred,
    midImage: courseImageMid,
    smallImage: courseImageSmall,
    alt: 'Kurs Trenera Personalnego PITEAM - kompleksowe szkolenie online i stacjonarne w Katowicach',
    title: 'Zostań Certyfikowanym Trenerem Personalnym z PITEAM - Szkolenie Katowice',
    key: 'personalTrainerCourse',
    primary: 'KURS NA TRENERA PERSONALNEGO',
    secondary: 'Masz dość pracy, która Cię nie rozwija? Chcesz żyć z pasji, którą już masz (lub zawsze chciałeś/aś mieć)? Stwórz swoją nową rzeczywistość! Zdobądź certyfikat i wiedzę niezbędną do pracy jako profesjonalny trener personalny. Nasz kurs obejmuje anatomię, fizjologię, metodykę treningu, dietetykę i psychologię sportu. Przygotuj się do zawodu  z  najlepszymi!',
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
            "startDate": "2025-12-06",
            "endDate": "2025-12-31",
            "offers": {
                "@type": "Offer",
                "price": "3299.00",
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
    title: 'CZEGO DOWIESZ SIĘ NA SZKOLENIU?',
    heading: 'TWOJA DROGA DO SUKCESU W BRANŻY FITNESS',
    paragraph: 'Zapomnij o suchych wykładach i przestarzałych podręcznikach. W PITEAM zmieniamy zasady gry. Zamiast teorii, oferujemy bezpośredni dostęp do wiedzy i doświadczenia czołowych postaci polskiej branży fitness. To oni, Twoi przyszli mentorzy, dzielą się sprawdzonymi ścieżkami, które sami przeszli, budując swoje imperia trenerskie.',
    image: courseTextBoxImage,
    points: [
        {
          title: 'Profesjonalne Prowadzenie Klienta',
          text: 'Nauczymy Cię kompletnego procesu pracy z podopiecznym. Zaczniemy od tego, jak przeprowadzić skuteczną pierwszą konsultację, zdiagnozować potrzeby i ustalić realne cele. Dowiesz się, jak monitorować postępy i dostosowywać plan, aby zapewnić trwałe i widoczne rezultaty, budując długofalową relację opartą na zaufaniu.'
        },
        {
          title: 'Solidne Fundamenty: Anatomia, Dietetyka, Trening',
          text: 'Zdobędziesz niezbędną wiedzę merytoryczną stanowiącą filar pracy trenera. Opanujesz kluczowe zagadnienia z anatomii funkcjonalnej i fizjologii wysiłku, zrozumiesz podstawy bilansowania diety i suplementacji oraz nauczysz się, jak układać skuteczne i bezpieczne plany treningowe.'
        },
        {
          title: 'Gotowy Warsztat Pracy i Narzędzia',
          text: 'Nie zostaniesz z samą teorią. Otrzymasz od nas pakiet gotowych do użycia materiałów, które usprawnią Twoją codzienną pracę. Będą to m.in. profesjonalne formularze wywiadu z klientem, checklisty do oceny postępów oraz szablony planów treningowych i żywieniowych.'
        },
        {
          title: 'Budowanie Marki Osobistej i Biznes',
          text: 'Wiedza to jedno, ale trzeba jeszcze umieć ją sprzedać. Pokażemy Ci, jak krok po kroku zbudować silną markę osobistą w mediach społecznościowych. Dowiesz się, jakie treści tworzyć, jak docierać do potencjalnych klientów i przekuwać zainteresowanie w realną współpracę.'
        },
        {
          title: 'Certyfikat i Nowe Możliwości Zawodowe',
          text: 'Po ukończeniu kursu i zdaniu egzaminu otrzymasz oficjalny certyfikat trenera personalnego. To Twój klucz do rozpoczęcia pracy w zawodzie – dokument, który potwierdza Twoje kwalifikacje i jest honorowany w siłowniach, klubach fitness oraz przy prowadzeniu własnej działalności online.'
        },
        {
          title: 'Wsparcie i Dostęp do Zamkniętej Społeczności',
          text: 'Zyskasz dostęp do ekskluzywnej, zamkniętej grupy (Facebook lub WhatsApp) na 3 miesiące po kursie, gdzie będziesz mógł zadawać pytania szkoleniowcom i brać udział w specjalnych live streamach online, pogłębiających Twoją wiedzę.'
        }
    ],
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contactFormSection');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to contact form section');
    }
  };

  const MOBILE_BREAKPOINT = 900;
  const LARGE_SCREEN_BREAKPOINT = 1400;
  const displayedTrainers = trainersData.filter(trainer => trainer.name !== 'NATALIA');

/**
 * @function CoursePage
 * @returns {JSX.Element} - Component representing the course page of the application.
 */
function CoursePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > LARGE_SCREEN_BREAKPOINT);
  
  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const newIsLargeScreen = window.innerWidth > LARGE_SCREEN_BREAKPOINT;

    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);
    }
    if (newIsLargeScreen !== isLargeScreen) {
      setIsLargeScreen(newIsLargeScreen);
    }
  }, [isMobile, isLargeScreen]);

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <>
    <Header />
    <PromoBanner />
    <div className="courseMainBox" style={{ backgroundImage: `url(${background})`}}>
        <MainImage item={item}> 
          <div className="courseNextSession">
            <div className='courseBox'>
              <img src={offerImage} alt={item.alt} />
            </div>
            <div className='courseBox' style={{ width: '100%'}}>
              <h2>Kurs na Trenera Personalnego</h2>
              <p>
                Zapisz się na nasz kurs trenera personalnego i zdobądź wiedzę oraz umiejętności niezbędne do pracy w branży fitness.
              </p>
              <p style={{ color: 'orange', fontWeight: 'bold', marginTop: '10px' }}>
                Katowice, Francuska 184 - 6 grudnia 2025
              </p>
            </div>
            <div className='courseBox' id='courseButton' style={{ alignItems: 'center', padding: '0 20px', gap: '10px' }}>
              <h3 style={{ width: '150px' }}>3299 PLN</h3>
              <button onClick={scrollToContactForm}>Zapisz się</button>
            </div>
          </div>
        </MainImage>

        <div className="main-container"> 

          
          <h2 className='header2' data-text={'3 WYKŁADOWCÓW'}>3 WYKŁADOWCÓW</h2>
          <h2 className='header2' data-text={'1 KOMPLEKSOWY KURS'}>1 KOMPLEKSOWY KURS</h2>
          <PersonnelGallery 
            isMobile={isMobile}
            isLargeScreen={isLargeScreen}
            trainers={displayedTrainers}
          />

          <h2 className='header2' data-text={'TERMINARZ'}>TERMINARZ</h2>
          <CourseTimeline />

          <ArrowSection sections={arrowSectionData} />

          <TextBlockWithPoints
            title={pointSectionData.title}
            heading={pointSectionData.heading}
            paragraph={pointSectionData.paragraph}
            points={pointSectionData.points}
            imageSrc={pointSectionData.image}
          />
          
          <div id="contactFormSection"></div>
          <CourseForm/>
        </div>
        <CheckAlsoSection></CheckAlsoSection>
    </div>
    </>
  );
}

export default CoursePage;