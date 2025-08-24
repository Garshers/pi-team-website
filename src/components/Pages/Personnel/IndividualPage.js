import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header } from '../../HeaderAndFooter/header';
import CheckAlsoSection from '../../HeaderAndFooter/CheckAlsoSection.js';
import './individualPageStyle.css';

import imgPatryk from '../../../assets/Personnel/imgPatrykMobile.png';
import imgIza from '../../../assets/Personnel/imgIzaMobile.png';
import imgNatalia from '../../../assets/Personnel/imgNataliaMobile.png';
import imgDawid from '../../../assets/Personnel/imgDawidMobile.png';

import imgPatrykMinature from '../../../assets/Personnel/imgPatrykMinature.png';
import imgIzaMinature from '../../../assets/Personnel/imgIzaMinature.png';
import imgNataliaMinature from '../../../assets/Personnel/imgNataliaMinature.png';
import imgDawidMinature from '../../../assets/Personnel/imgDawidMinature.png';

const trainersData = [
  { 
    srcImg: imgPatryk,
    srcImgMinature: imgPatrykMinature,
    slug: 'patryk-iwaszczyszyn',
    name: 'PATRYK',
    description: 'Cześć, tu Patryk Iwaszczyszyn - założyciel PITEAM, trener personalny, wielokrotny mistrz Polski i osoba, która stoi za tą firmą od pierwszego dnia.',
  },
  { 
    srcImg: imgIza,
    srcImgMinature: imgIzaMinature,
    slug: 'iza-pawik',
    name: 'IZA',
    description: 'Poznajcie Izę - pasjonatkę treningu siłowego, trenerkę kobiet oraz naszą specjalistkę od treningu pływackiego!',
  },
  { 
    srcImg: imgNatalia,
    srcImgMinature: imgNataliaMinature,
    slug: 'natalia-polaczek',
    name: 'NATALIA',
    description: 'Poznajcie Natalię - naszą utalentowaną masażystkę!',
  },
  { 
    srcImg: imgDawid,
    srcImgMinature: imgDawidMinature,
    slug: 'dawid-slonina',
    name: 'DAWID',
    description: 'Poznajcie Dawida - naszego specjalistę od fizjoterapii ortopedycznej i treningu medycznego!',
  }
];

const IndividualPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const daneOsoby = trainersData.find(trainer => trainer.slug === slug);

  if (!daneOsoby) {
    return (
      <div>
        <h1>Pracownik nie znaleziony!</h1>
        <button onClick={() => navigate(-1)}>Wróć do listy</button>
      </div>
    );
  }

  return (
    <><Header/>
    <div className='mainIndividualBox'>
        <div className='buissnessCardBox'>
            <div className='individualImageBox'>
                <img 
                    src={daneOsoby.srcImg}
                    alt={daneOsoby.name}
                />
            </div>
            <div className='buissnessCardSmallBox'>
                <h1>{daneOsoby.name}</h1>
                <p>{daneOsoby.description}</p>
            </div>
        </div>
        <CheckAlsoSection />
    </div></>
  );
};

export default IndividualPage;