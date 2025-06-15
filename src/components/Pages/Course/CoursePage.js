import React from 'react';
import './coursePageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import ContactForm from '../../Form/ContactForm.js'
import { ImageGallery } from "react-image-grid-gallery";

import background from '../../../assets/Gym/background.jpg';
import courseImage from '../../../assets/Course/CourseImg.jpeg';

import gymImage_Mid from '../../../assets/HomePage/GymImg_Mid.jpeg';
import poolImage_Mid from '../../../assets/HomePage/PoolImg_Mid.jpeg';
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
 * @function CoursePage
 * @returns {JSX.Element} - Component representing the course page of the application.
 */
function CoursePage() {
  return (
    <>
    <Header />
    <div className="courseMainBox" style={{ backgroundImage: `url(${background})`}}>
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