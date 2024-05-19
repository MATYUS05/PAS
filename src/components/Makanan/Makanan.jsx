import React from 'react';
import './Makanan.css'; 
import ketoprakImage from '../../gambar/ketoprak.jpg';
import sotobetawiImage from '../../gambar/soto betawi.webp';
import nasiuduk from '../../gambar/nasi uduk.webp';
import keraktelor from '../../gambar/kerak telor.jpg';
import gado from '../../gambar/gado-gado.jpg';
import rujak from '../../gambar/rujak.jpg';
import satebetawi from '../../gambar/sate betawi.jpg';
import sototangkar from '../../gambar/soto tangkar.jpg';
import pancong from '../../gambar/pancong.webp';
import buaya from '../../gambar/buaya.webp' ;

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt="Card" className="card-image" />
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
        image={card.imageUrl}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

const CardList = () => {
  const data = [
    { 
      title: "Ketoprak",
      imageUrl: ketoprakImage,
      description: "Ketoprak adalah makanan ringan khas Jakarta yang terdiri dari ketupat, tahu goreng, tauge, lontong, dan bumbu kacang, seringkali ditambahkan dengan kerupuk." 
    },
    { 
      title: "Kerak Telor", 
      imageUrl: keraktelor, 
      description: "Makanan tradisional Betawi yang terbuat dari campuran beras ketan, telur, serundeng, dan bawang goreng yang kemudian dipanggang hingga matang." 
    },
    { 
      title: "Sate Betawi ", 
      imageUrl: satebetawi, 
      description: "Sate yang terbuat dari daging sapi atau kambing yang dipotong kecil-kecil dan ditusuk, kemudian dipanggang dengan bumbu kacang yang khas Betawi." 
    },
    { 
      title: "Soto Betawi", 
      imageUrl: sotobetawiImage, 
      description: "Soto khas Betawi ini terbuat dari daging sapi yang dimasak dalam kuah santan yang kaya rempah, disajikan dengan nasi, kentang, tomat, dan bawang goreng." 
    },
    { 
      title: "Nasi Uduk", 
      imageUrl: nasiuduk, 
      description: "Nasi Uduk adalah nasi yang dimasak dengan santan dan rempah-rempah, biasanya disajikan dengan lauk-pauk seperti ayam goreng, tempe, tahu, dan telur serta dilengkapi dengan kerupuk." 
    },
    { 
      title: "Roti Buaya", 
      imageUrl: buaya, 
      description: "camilan populer di Jakarta dengan bentuk yang menyerupai buaya dan berbagai pilihan isiRoti Buaya adalah camilan populer di Jakarta dengan bentuk yang menyerupai buaya dan berbagai pilihan isi." 
    },
    { 
      title: "Soto Tangkar", 
      imageUrl: sototangkar, 
      description: "Varian soto khas Jakarta yang menggunakan daging iga sapi sebagai bahan utamanya. Kuahnya yang gurih dan kaya rempah biasanya disajikan dengan nasi, daun bawang, tomat, serta bawang goreng sebagai taburan." 
    },
    { 
      title: "Kue Pancong", 
      imageUrl: pancong, 
      description: "kue tradisional Indonesia terbuat dari campuran tepung beras dan kelapa parut, dipanggang dalam cetakan khusus hingga crispy di luar dan lembut di dalamnya.." 
    },
    { 
      title: "Gado-Gado", 
      imageUrl: gado, 
      description: "Salad sayur yang dicampur dengan tahu, tempe, lontong, dan telur rebus, kemudian disiram dengan saus kacang." 
    },
  ];

  const chunkedData = data.reduce((resultArray, item, index) => { 
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
    </div>
  );
};

export default CardList;