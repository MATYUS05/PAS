import React from "react";
import Navbar from "./components/navbar/Navbar";
import Tampilan from "./components/tampilan/Tampilan";
// import JWeather from "./components/JWeather/JWeather";
import Weather from "./components/Weather/Weather";
import TempatWisata from "./components/TampilanWisata/TempatWisata";
import TtgJkt from "./components/TentangJakarta/TentangJkt";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import JNews from "./components/Judul News/JNews";
import Kuliner from "./components/Kuliner/Kuliner";
import HalamanHotel from "./components/Hotel/hotel";

const App = () => {
    return (
        <div>
            <Navbar />
            <Tampilan />
            <div className="container">
                {/* <JWeather /> */}
                <TtgJkt />
                <Weather />
                <TempatWisata />
                <Kuliner />
                <HalamanHotel />
                <JNews />
                <News />
                <Footer />
            </div>
        </div>
    );
}

export default App;
