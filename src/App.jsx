import React from "react";
import Navbar from "./components/navbar/Navbar";
import Tampilan from "./components/tampilan/Tampilan";
import TempatWisata from "./components/TampilanWisata/TempatWisata";
import TtgJkt from "./components/TentangJakarta/TentangJkt";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import JNews from "./components/Judul News/JNews";

const App = () => {
    return (
        <div>
            <Navbar />
            <Tampilan />
            <div className="container">
                <TtgJkt />
                <TempatWisata />
                <JNews />
                <News />
                <Footer />
            </div>
        </div>
    );
}

export default App;
