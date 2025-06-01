import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import MainPageImage from '../../MainPageImage/MainPageImage.js'
import ContactForm from '../../Form/ContactForm.js'
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';
import gymImage from '../../../assets/Gym/HomePage3_GymPage.jpeg';

const imagesArray = [
  {
    id: "patryk-uniqueid111",
    alt: "Zdjęcie Patryka",
    src: 'https://images.pexels.com/photos/32131630/pexels-photo-32131630/free-photo-of-droga-nad-jeziorem-maligne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "iza-uniqueid222",
    alt: "Zdjęcie Izy",
    src: 'https://images.pexels.com/photos/31044658/pexels-photo-31044658/free-photo-of-parking-przy-budynku-burbank-triangle-o-godzinie-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "piotr-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: 'https://images.pexels.com/photos/8984854/pexels-photo-8984854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "piotr2-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: 'https://images.pexels.com/photos/31527634/pexels-photo-31527634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "iza2-uniqueid222",
    alt: "Zdjęcie Izy",
    src: 'https://images.pexels.com/photos/30918681/pexels-photo-30918681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "piotr3-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: 'https://images.pexels.com/photos/31540692/pexels-photo-31540692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "piotr4-uniqueid333",
    alt: "Zdjęcie Piotra",
    src: 'https://images.pexels.com/photos/31864704/pexels-photo-31864704/free-photo-of-wloski-detal-architektoniczny-z-pralnia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: "iza3-uniqueid222",
    alt: "Zdjęcie Izy",
    src: 'https://images.pexels.com/photos/32277444/pexels-photo-32277444/free-photo-of-czarny-kot-na-geometrycznych-schodach-w-stambule.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    <div className="courseMainBox" style={{ backgroundImage: `url(${background})` }}>
        <MainPageImage 
            Image={gymImage}
            Title={'Kurs Trenera Personalnego'}
            Description={'Chcesz przekształcić swoją pasję do fitnessu w profesjonalną karierę i pomagać innym w osiąganiu ich celów? Nasz Kurs Trenera Personalnego to kompleksowe szkolenie, które wyposaży Cię w niezbędną wiedzę i praktyczne umiejętności. Nauczysz się planowania treningów, zasad żywienia, motywowania klientów i budowania autorytetu. Z nami Twoja determinacja i wiedza staną się Twoją najlepszą wizytówką, a Ty będziesz inspirować innych do zmian!'}
        />
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