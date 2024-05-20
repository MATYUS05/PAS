import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import hotel from "../../gambar/hotel.jpg";
import hotel1 from "../../gambar/hotel1.jpg";
import "./hotel.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HotelPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="hotel" >
      <div className="hotel-container" data-aos="fade-up">
        <h1>HOTEL AND DESTINATION</h1>
        <div className="hotel-card1">
          <div className="hotel-image-container">
            <img src={hotel} alt="Image 1" />
            <img src={hotel1} alt="Image 2" />
          </div>
          <div className="hotel-content-container">
            <h2>About Our Hotel</h2>
            <h4 className="sub-hotel-1">Find the right Apartment Hotel & Resort for you</h4>
            <p>
    Jakarta, ibu kota Indonesia, menawarkan berbagai pilihan hotel mulai dari mewah bintang lima hingga butik unik. Hotel-hotel di kawasan bisnis seperti Sudirman dan Kuningan memiliki fasilitas modern dan akses mudah ke atraksi utama seperti Monas dan pusat perbelanjaan. Dengan pelayanan ramah dan fasilitas lengkap, hotel-hotel di Jakarta siap memberikan pengalaman menginap yang nyaman dan berkesan.
            </p>
            <button className="hotel-btn"><Link to="/hotel">Find Hotel & Destination Here</Link></button>
            <div className="hotel-features">
              <div>Award-winning Restaurant</div>
              <div>Healthy Food</div>
              <div>Individually styled bedrooms</div>
              <div>Best Resources Available</div>
              <div>Award-winning Playground</div>
              <div>Easy Online Booking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
