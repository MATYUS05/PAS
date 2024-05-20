import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Member.css";
import Next from "../../gambar/next.png";
import Prev from "../../gambar/prev.png";
import Chang from "../../gambar/chang2.jpg";
import Edbert from "../../gambar/edbert1.jpg";
import Jansen from "../../gambar/jansen.jpg";
import Matthew from "../../gambar/matthew.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Member = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < -0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div>
      <div className="Member" id="contact" data-aos="fade-up">
        <h1>About Us</h1>
        <img src={Next} alt="" className="next-btn" onClick={slideForward} />
        <img src={Prev} alt="" className="prev-btn" onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Matthew} alt="Logo" />
                  <div>
                    <h3>Matthew Yuslih</h3>
                    <span>Jakarta, Indonesia</span>
                  </div>
                </div>
                <p className="deskripsi">
                  Hanya pemuda biasa yang memiliki tujuan untuk survive di
                  Informatika. Quotes untuk semester ini -{">"} Di dunia coding,
                  setiap karakter memiliki arti, mengarungi lautan instruksi
                  untuk menciptakan aplikasi yang memukau dan berguna.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Chang} alt="Logo" />
                  <div>
                    <h3>Dhaniel Chang</h3>
                    <span>Jambi, Indonesia</span>
                  </div>
                </div>
                <p className="deskripsi">
                  Saya adalah pemuda merantau dari jambi dengan harapan orang
                  tua di tangan agar bisa menjadi pemuda sukses saya memiliki
                  prinsip hidup : selingkuh hanya untuk suami istri kalau masi
                  pacaran seleksi namanya. :3
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Edbert} alt="Logo" />
                  <div>
                    <h3>Edbert Rendrahadi </h3>
                    <span>Banten, Indonesia</span>
                  </div>
                </div>
                <p className="deskripsi">
                  Pemuda yang yakin sabar sadar. Mahasiswa aktif UMN angkatan
                  2023 jurusan informatika. Gitar kupetik bassku betot, hai nona
                  cantik you're always in my thoughts {"<"}3
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Jansen} alt="Logo" />
                  <div>
                    <h3>Jansen Caesar</h3>
                    <span>Banten, Indonesia</span>
                  </div>
                </div>
                <p className="deskripsi">
                  Saya merupakan lelaki asli daratan Cina memiliki masa lalu
                  sebagai pristel master dan memutuskan untuk mengubah masa
                  depan dengan merantau ke negri konoha dan menempuh ilmu coding
                  demi adu ilmu dengan tetangga cina saya.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button className="tombol-balik">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Member;
