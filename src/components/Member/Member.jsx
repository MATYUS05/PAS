import React,{useRef, useEffect} from "react";
import "./Member.css";
import Next from "../../gambar/next.png";
import Prev from "../../gambar/prev.png";
import Chang from"../../gambar/chang.jpg";
import Edbert from"../../gambar/edbert.jpg";
import Jansen from"../../gambar/jansen.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Member = () => {

    useEffect(()=> {
        AOS.init({duration: 1000})
      }, [])

    const slider =useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () =>{
    if(tx < -0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
  return (
      <div className="Member" id="contact" data-aos='fade-up'>
        <h1>Our Member</h1>
        <img src={Next} alt="" className="next-btn" onClick={slideForward}/>
        <img src={Prev} alt="" className="prev-btn" onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src="#" alt="Logo" />
                  <div>
                    <h3>Matthew Yuslih</h3>
                    <span>Jakarta</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque ullam sit voluptatum dolorem temporibus totam nostrum
                  magnam, culpa nam sequi, eaque cum repellat reiciendis
                  officiis labore, hic in odio omnis quisquam nobis veniam
                  quaerat. Illo nemo placeat, molestiae, labore facere sint
                  aspernatur deserunt veritatis aperiam eligendi quo soluta, nam
                  non!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Chang} alt="Logo" />
                  <div>
                    <h3>Dhaniel Chang</h3>
                    <span>Jakarta</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque ullam sit voluptatum dolorem temporibus totam nostrum
                  magnam, culpa nam sequi, eaque cum repellat reiciendis
                  officiis labore, hic in odio omnis quisquam nobis veniam
                  quaerat. Illo nemo placeat, molestiae, labore facere sint
                  aspernatur deserunt veritatis aperiam eligendi quo soluta, nam
                  non!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Edbert} alt="Logo" />
                  <div>
                    <h3>Edbert</h3>
                    <span>Jakarta</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque ullam sit voluptatum dolorem temporibus totam nostrum
                  magnam, culpa nam sequi, eaque cum repellat reiciendis
                  officiis labore, hic in odio omnis quisquam nobis veniam
                  quaerat. Illo nemo placeat, molestiae, labore facere sint
                  aspernatur deserunt veritatis aperiam eligendi quo soluta, nam
                  non!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="member-info">
                  <img src={Jansen} alt="Logo" />
                  <div>
                    <h3>Jansen</h3>
                    <span>Jakarta</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque ullam sit voluptatum dolorem temporibus totam nostrum
                  magnam, culpa nam sequi, eaque cum repellat reiciendis
                  officiis labore, hic in odio omnis quisquam nobis veniam
                  quaerat. Illo nemo placeat, molestiae, labore facere sint
                  aspernatur deserunt veritatis aperiam eligendi quo soluta, nam
                  non!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Member;
