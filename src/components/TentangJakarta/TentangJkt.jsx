import React, { useEffect } from "react";
import "./TentangJkt.css";
import LetakJkt from "../../gambar/letakjkt1.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const TtgJkt = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    }, [])
    return(
        <div id="about" className="container"> 
            <div className="TtgJkt" data-aos='fade-up'>
                <h1> About DKI Jakarta</h1>
                <p>Jakarta, the dynamic capital of Indonesia, stands as a vibrant testament to Southeast Asia's rich cultural tapestry and rapid modernization. This sprawling metropolis blends centuries-old traditions with the sleekness of modern skyscrapers, creating a unique urban experience. From the historic wonders of Kota Tua, the old town, to the luxurious shopping malls in the business districts, Jakarta offers a diverse range of attractions. The city is also known for its lively culinary scene, where street food vendors serve up local favorites alongside upscale restaurants offering international cuisine. As the cultural and economic heart of Indonesia, Jakarta is not just a hub of activity but also a melting pot of Javanese, Malay, Chinese, Arab, Indian, and European influences, making it a fascinating destination for travelers.</p>
                <img src={LetakJkt} alt="LetakJkt" />
            </div>
        </div>
    )
}

export default TtgJkt;
