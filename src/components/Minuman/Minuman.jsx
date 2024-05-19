import React from 'react';
import './Minuman.css';
import {Link} from "react-router-dom"
import esselendang from '../../gambar/es selendang.jpg';
import bandrek from '../../gambar/bandrex.jpg';
import oyen from '../../gambar/oyen.jpeg';
import doger from '../../gambar/doger.jpg';
import bir from '../../gambar/bir.webp';
import wedang from '../../gambar/wedang.jpg';
import cincau from '../../gambar/cincau.webp';
import esKopyor from '../../gambar/kopyor.jpg';
import cendol from '../../gambar/cendol.jpg';

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const Row = ({ cards }) => (
  <div className="row">
    {cards.map((card, index) => (
      <Card
        key={index}
        image={card.imageurl}
        title={card.name}
        description={card.description}
      />
    ))}
  </div>
);

const CardList1 = () => {
  const JakartaDrinks = [
    {
      name: "Bandrek",
      description: "Minuman hangat dengan campuran jahe, gula merah, daun pandan, dan santan.",
      imageurl: bandrek,
    },
    {
      name: "Es Doger",
      description: "Minuman dingin dengan campuran es serut, kacang hijau, biji selasih, nangka, dan santan.",
      imageurl: doger,
    },
    {
      name: "Es Selendang Mayang",
      description: "Minuman khas Betawi yang terdiri dari campuran es serut, gula merah cair, santan, dan cincau.",
      imageurl: esselendang,
    },
    {
      name: "Bir Pletok",
      description: "Minuman beralkohol tradisional Betawi yang terbuat dari rempah-rempah seperti jahe, sereh, dan daun pandan.",
      imageurl: bir,
    },
    {
      name: "Wedang Ronde",
      description: "Minuman hangat yang terbuat dari jahe, gula aren, dan bumbu-bumbu lainnya, disajikan dengan ronde (bola-bola tepung ketan yang diisi kacang tanah).",
      imageurl: wedang,
    },
    {
      name: "Es Oyen",
      description: "Minuman segar yang terdiri dari kelapa muda yang dipotong kecil-kecil, air kelapa, dan gula merah yang dicampur dengan es serut.",
      imageurl: oyen,
    },
    {
      name: "Es Cincau Hijau",
      description: "Minuman segar berupa es serut dengan cincau hijau yang disajikan dengan santan dan sirup gula merah.",
      imageurl: cincau,
    },
    {
      name: "Es Kopyor",
      description: "Minuman segar yang terbuat dari daging kelapa muda yang masih lunak (kopyor) yang disajikan dengan es serut dan sirup.",
      imageurl: esKopyor,
    },
    {
      name: "Cendol",
      description: "Minuman tradisional yang terdiri dari tepung beras hijau yang dimasak hingga mengental, disajikan dengan santan dan gula merah cair.",
      imageurl: cendol,
    },
  ];

  const chunkedData = JakartaDrinks.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div className="app">
      {chunkedData.map((rowData, index) => (
        <Row key={index} cards={rowData} />
      ))}
        <button className="tombol-balik"><Link to="/">Back</Link></button>
    </div>
  );
};

export default CardList1;