import React from 'react';
import './galleryPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';

import gymImage_Mid from '../../../assets/HomePage/HomePage3_Mid.jpeg';
import poolImage_Mid from '../../../assets/HomePage/HomePage1_Mid.jpeg';
import courseImage_Mid from '../../../assets/HomePage/CourseImg.jpeg';
import massageImage_Mid from '../../../assets/HomePage/MassageImg.jpeg';
import campImage_Mid from '../../../assets/HomePage/CampImg.jpeg';

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
 * @function GalleryPage
 * @returns {JSX.Element} - Component representing the gallery page of the application.
 */
function GalleryPage() {
  return (
    <>
    <Header />
    <div className="galleryMainBox">
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