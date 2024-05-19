import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kuliner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Kuliner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="kuliner" data-aos="fade-up">
      <h1 className="judul-kuliner">JAKARTA CULINARY</h1>
      <p className="sub-judul-kuliner">"Explore Jakarta's Culinary Wonders: Elevate Your Taste Adventures!"</p>
      <div className="container-kuliner">
        <div className="card-kuliner">
          <div className="isi-card-kuliner">
            <div className="tampilan-depan">
              <h2>FOOD CULINARY</h2>
            </div>
            <div className="tampilan-belakang">
              <h3>Taste of Jakarta: Exploring the Culinary Melting Pot</h3>
              <p>
                Di kota ini, pengalaman kuliner melampaui batas-batas
                tradisional dengan sentuhan inovatif yang mengagumkan. Dari
                warung-warung kaki lima yang menyajikan hidangan-hidangan klasik
                dengan cita rasa autentik hingga restoran-restoran trendi yang
                menciptakan kreasi-kreasi baru yang memukau, setiap sudut kota
                adalah panggung bagi petualangan rasa yang tak terlupakan.{" "}
              </p>
              <button><Link to="/makan">Explore More</Link></button>
            </div>
          </div>
        </div>
        <div className="card-kuliner">
          <div className="isi-card-kuliner">
            <div className="tampilan-depan1">
              <h2>BEVARAGE CULINARY</h2>
            </div>
            <div className="tampilan-belakang1">
              <h3>
                Traditional Jakarta Beverages: Delighting Palates with Local
                Delicacies
              </h3>
              <p>
                Minuman tradisional Jakarta tidak hanya mempersembahkan aroma
                dan cita rasa autentik dari kota metropolitan ini, tetapi juga
                merupakan cerminan dari keberagaman budaya yang mengakar kuat di
                dalamnya. Dari segarnya es yang menyegarkan hingga kehangatan
                rempah yang menggugah selera, setiap tegukan adalah perpaduan
                yang sempurna antara tradisi dan inovasi.
              </p>
              <button><Link to="/minum">Explore More</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kuliner;
