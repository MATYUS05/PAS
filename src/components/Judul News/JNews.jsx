import React,{useEffect} from "react";
import "./JNews.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

function JNews() {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

  return (
    <div id="news" className="container" data-aos='fade-up'>
      <div className="judul-sub">
        <h1>NEWS IN INDONESIA</h1>
        <p>
          Stay Informed, Stay Ahead: Bringing You the Latest News from Indonesia
        </p>
      </div>
    </div>
  );
}

export default JNews;
