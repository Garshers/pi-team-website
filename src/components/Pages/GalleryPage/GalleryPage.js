import React from 'react';
import './galleryPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';


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
 * @function GalleryPage
 * @returns {JSX.Element} - Component representing the gallery page of the application.
 */
function GalleryPage() {
  return (
    <>
    <Header />
    <div className="courseMainBox">
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

export default GalleryPage;