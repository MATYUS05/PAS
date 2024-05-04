import React from "react";
import "./Tampilan.css";
import dark_arrow from "../../gambar/darkarrow.jpg";

const Tampilan = () => {
  return (
    <div id="home" className="Tampilan">
      <div className="Tampilan-text">
        <h1>JOURNEY THROUGH JAKARTA</h1>
        <p>
          {" "}
          Explore the Charm, Discover Jakarta!
        </p>
        <button className="btn">
          <a href="/Explore">Explore More<img src={dark_arrow} alt=""/></a>
        </button>
      </div>
    </div>
  );
};

export default Tampilan;
