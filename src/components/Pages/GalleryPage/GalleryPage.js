import React from 'react';
import './galleryPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';
import { ImageGallery } from "react-image-grid-gallery";

import DSC2943 from '../../../assets/Oryginals/_DSC2943.jpg';
import DSC2954 from '../../../assets/Oryginals/_DSC2954.jpg';
import DSC3526 from '../../../assets/Oryginals/_DSC3526.jpg';
import DSC3651 from '../../../assets/Oryginals/_DSC3651.jpg';
import CampImgOryginal from '../../../assets/Oryginals/CampImg_Oryginal.jpg';
import CourseImgOryginal from '../../../assets/Oryginals/CourseImg_Oryginal.jpg';
import GymImgOryginal from '../../../assets/Oryginals/GymImgIza_Oryginal.jpg';
import MassageImgOryginal from '../../../assets/Oryginals/MassageImg_Oryginal.jpeg';
import PoolImgOryginal from '../../../assets/Oryginals/PoolImg_Oryginal.jpeg';

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
                style='visible grid'
            />
        </div>
    </div>
    </>
  );
}

export default GalleryPage;