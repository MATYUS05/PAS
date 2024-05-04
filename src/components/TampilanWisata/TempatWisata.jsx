import React, {useEffect} from 'react';
import './TempatWisata.css';
import GambarWisata from './GambarWisata';
import KotaTua from "../../gambar/kotatua.png";
import Ancol from "../../gambar/Ancol1.png";
import Monas from "../../gambar/monas.png";
import Pulau from "../../gambar/pulauseribu.jpg";
import Taman from "../../gambar/TMII.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'

function TempatWisata() {

    useEffect(()=> {
      AOS.init({duration: 1000})
    }, [])
  
  return (
    <div className='cards' id='destination' data-aos='fade-up'>
      <h1>POPULAR DESTINATION!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <GambarWisata
              src={Pulau}
              text='Thousand Islands: Paradise Found, Where Dreams Sail Away!'
            />
            <GambarWisata
              src={Taman}
              text='Miniature Park, Majestic Experience: Taman Mini Indonesia Indah'
            />
          </ul>
          <ul className='cards__items'>
            <GambarWisata
              src={Ancol}
              text='Experience Adventure, Discover Tranquility: Ancol, Where Fun Meets Serenity!'
            />
            <GambarWisata
              src={Monas}
              text='Monas: Towering Icon, Beacon of Unity!'
            />
            <GambarWisata
              src={KotaTua}
              text='Ancient Heritage, New Charms: Old Town Jakarta'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TempatWisata;