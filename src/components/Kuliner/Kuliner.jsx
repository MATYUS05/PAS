import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kuliner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Kuliner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="container" id="kuliner" data-aos="fade-up">
            <h1 className="judul-kuliner">Jakarta Culinary Delights</h1>
            <p className="sub-judul">"Rasakan Kelezatan, Jelajahi Jakarta!"</p>
            <div className="card-kuliner">
                <div className="isi-card">
                        <h3>Taste of Jakarta: Exploring the Culinary Melting Pot</h3>
                        <p>Di kota ini, pengalaman kuliner melampaui batas-batas tradisional dengan sentuhan inovatif yang mengagumkan. Dari warung-warung kaki lima yang menyajikan hidangan-hidangan klasik dengan cita rasa autentik hingga restoran-restoran trendi yang menciptakan kreasi-kreasi baru yang memukau, setiap sudut kota adalah panggung bagi petualangan rasa yang tak terlupakan. Mulai dari sederetan warung-warung khas dengan cita rasa autentik yang menawarkan pengalaman kuliner yang menghubungkan dengan akar-akar budaya. </p>
                        <button><Link to="/makanan">Explore More</Link></button>
                </div>
                <div className="isi-card">
                        <h3>Traditional Jakarta Beverages: Delighting Palates with Local Delicacies</h3>
                        <p>Minuman tradisional Jakarta tidak hanya mempersembahkan aroma dan cita rasa autentik dari kota metropolitan ini, tetapi juga merupakan cerminan dari keberagaman budaya yang mengakar kuat di dalamnya. Dari segarnya es yang menyegarkan hingga kehangatan rempah yang menggugah selera, setiap tegukan adalah perpaduan yang sempurna antara tradisi dan inovasi.</p>
                        <button>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Kuliner;
