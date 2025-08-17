import React from 'react';
import './poolPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import ContactForm from '../../Form/ContactForm.js'
import MainImage from '../../MainImage/MainImage.js';
import ArrowSection from '../../Content/ArrowSection.js';
import TextBlockWithPoints from '../../Content/TextBlockWithPoints.js';

import background from '../../../assets/Gym/background.jpg';

import poolImage from '../../../assets/Pool/poolImgBackground.jpg';
import poolImageBlurred from '../../../assets/Pool/poolImgBackground_blurred.jpg';
import poolImageMid from '../../../assets/Pool/poolImgBackground.jpg';
import poolImageSmall from '../../../assets/Pool/poolImgBackground_small.jpg';

import swimmingTrainingImage from '../../../assets/Pool/swimmingKid.jpg';

const item = {
    image: poolImage,
    minatureImage: poolImageBlurred,
    midImage: poolImageMid,
    smallImage: poolImageSmall,
    alt: 'Treningi pływackie - profesjonalne zajęcia w basenie dla każdego poziomu',
    title: 'Treningi Pływackie - Opanuj Wodę, Popraw Technikę',
    key: 'swimming1',
    primary: 'TRENINGI PŁYWACKIE',
    secondary: 'Chcesz nauczyć się pływać, podszlifować technikę lub szukasz efektywnej alternatywy dla siłowni? Zapraszamy na treningi pływackie na wszystkich poziomach zaawansowania – zarówno dla początkujących, jak i bardziej doświadczonych. ',
    schema: {
        "@type": "Service",
        "name": "Treningi Pływackie",
        "description": "Nauka pływania dla dzieci i dorosłych, doskonalenie techniki pływania, przygotowanie do triathlonów.",
        "provider": {
            "@type": "Organization",
            "name": "PITEAM"
        }
    }
}

const arrowSectionData = [
  {
    title: 'PŁYWANIE DZIECI',
    description: {
      pre: 'Na naszych lekcjach dzieci z radością wskakują do wody i nie mogą doczekać się kolejnych zajęć. Uczymy przez ',
      bold: 'zabawę w przyjaznej atmosferze',
      post: ', co pozwala oswoić się z wodą i zbudować solidne podstawy techniki pływackiej.',
    },
  },
  {
    title: 'PŁYWANIE DOROŚLI',
    description: {
      pre: 'Niezależnie od tego, czy chcesz przełamać strach przed wodą, czy udoskonalić swoją technikę, jesteś we właściwym miejscu. ',
      bold: 'Dostosujemy treningi do Twoich indywidualnych celów',
      post: ', dbając o Twój komfort i postępy.',
    },
  },
  {
    title: 'TRIATHLON',
    description: {
      pre: 'Przygotuj się do swojego pierwszego lub kolejnego triathlonu z naszymi treningami pływackimi. Opracujemy dla Ciebie ',
      bold: 'spersonalizowany plan',
      post: ', który pozwoli Ci pewnie i efektywnie pokonać etap pływacki w triathlonie.',
    },
  },
];

const pointSectionData = {
  title: 'Pływanie od Podstaw i na Poziomie Mistrzowskim',
  heading: 'Twoja Droga do Doskonałości w Wodzie',
  paragraph: 'Zapomnij o nieskutecznych metodach i stagnacji. Nasz program szkoleniowy rewolucjonizuje naukę pływania, dostarczając sprawdzonych technik i personalizowanego wsparcia. Zamiast standardowych lekcji, oferujemy dostęp do wiedzy i doświadczenia czołowych pływaków i trenerów, którzy pomogą Ci osiągnąć każdy cel, od podstaw po zaawansowane techniki sportowe.',
  image: swimmingTrainingImage,
  points: [
    {
      title: 'Nauka od podstaw',
      text: 'Nigdy wcześniej nie pływałeś? Nic nie szkodzi! Nasze zajęcia dla początkujących to idealny start bez względu na wiek. Krok po kroku nauczymy Cię podstawowych technik, oswoimy z wodą i pomożemy przełamać wszelkie obawy. Z nami poczujesz się pewnie w basenie i zaczniesz czerpać radość z pływania.',
    },
    {
      title: 'Doskonalenie techniki pływania',
      text: 'Jeśli umiesz już pływać, ale chcesz poprawić swoją technikę lub pływać szybciej, te treningi są dla Ciebie. Skupimy się na analizie Twoich ruchów, skorygujemy błędy i nauczymy Cię zaawansowanych elementów. Dzięki temu Twoje umiejętności wzniosą się na wyższy poziom.',
    },
    {
      title: 'Treningi pływackie do triathlonu',
      text: 'Na naszych treningach kompleksowo przygotujemy Cię do pływania w triathlonie. Skupimy się na poprawie techniki kraula oraz damy wskazówki jak radzić sobie pływając w grupie i na wodach otwartych.',
    },
    {
      title: 'Lekcje indywidualne lub w małych grupach do 4 osób',
      text: 'W treningach indywidualnych skupimy się w 100% na Twoich potrzebach i celach. Małe grupy do 4 osób pozwalają na indywidualne podejście trenera przy jednoczesnej motywacji płynącej z treningu w zespole. Wybierz formę zajęć, która najbardziej Ci odpowiada!',
    },
  ],
};

/**
 * @function PoolPage
 * @returns {JSX.Element} - Component representing the pool page of the application.
 */
function PoolPage() {
    return (
        <><Header/>
        <div className="gymMainBox" 
            style={{ backgroundImage: `url(${background})`, backdropFilter: 'blur(5px)' }}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            itemID="PoolPageBackground"
        >
            <MainImage item={item} />

            <ArrowSection sections={arrowSectionData} />

            <TextBlockWithPoints
                title={pointSectionData.title}
                heading={pointSectionData.heading}
                paragraph={pointSectionData.paragraph}
                points={pointSectionData.points}
                imageSrc={pointSectionData.image}
            />

            <ContactForm/>
            <CheckAlsoSection />
        </div>
        </>
    );
}

export default PoolPage;