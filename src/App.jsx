import React from "react";
import Navbar from "./components/navbar/Navbar";
import Tampilan from "./components/tampilan/Tampilan";
import TempatWisata from "./components/TampilanWisata/TempatWisata";
import TtgJkt from "./components/TentangJakarta/TentangJkt";
import Member from "./components/Member/Member";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Tampilan />
            <div className="container">
                <TtgJkt />
                <TempatWisata />
                <Member />
                <Footer />
            </div>
        </div>
    );
}

export default App;
