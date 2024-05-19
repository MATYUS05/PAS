import React, { useState, useEffect } from "react";
import "./TempatWisata.css";
import GambarWisata from "./GambarWisata";
import PopUpCard from "./PopUpCard"; 
import KotaTua from "../../gambar/kotatua.png";
import Ancol from "../../gambar/Ancol1.png";
import Monas from "../../gambar/monas.png";
import Pulau from "../../gambar/pulauseribu.jpg";
import Taman from "../../gambar/TMII.jpg";
import Museum from "../../gambar/Museum.jpg";
import GI from "../../gambar/grandindonesia.jpg";
import CP from "../../gambar/centralpark.jpg";
import Glodok from "../../gambar/chinatown.jpg";
import TIM from "../../gambar/TIM.jpg";
import MBank from "../../gambar/museum1.jpg";
import SWJ from "../../gambar/SWJ.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function TempatWisata() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [showPopUp, setShowPopUp] = useState(false); 
    const [popUpContent, setPopUpContent] = useState("");
    const [popUpDescription, setPopUpDescription] = useState("");
    const [popUpImage, setPopUpImage] = useState("");
    const [showMore, setShowMore] = useState(false);

    const showPopUpCard = (content, description, image) => {
        setPopUpContent(content);
        setPopUpDescription(description);
        setPopUpImage(image);
        setShowPopUp(true);
    };

    const hidePopUpCard = () => {
        setShowPopUp(false);
    };

    const loadMore = () => {
        setShowMore(true);
    };

    return (
        <div className="cards" id="destination" data-aos="fade-up">
            <h1>POPULAR DESTINATION!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <GambarWisata
                            src={Pulau}
                            text="Thousand Islands: Paradise Found, Where Dreams Sail Away!"
                            onClick={() => showPopUpCard("Thousand Islands", "Telusuri keindahan Kepulauan Seribu di tengah gemerlapnya DKI Jakarta! Dengan total wilayah mencapai 4.745,62 km2, termasuk lebih dari 110 pulau cantik yang siap memukau Anda. Tersembunyi di antara lautan, keindahan daratan seluas 8,76 km2 ini menawarkan petualangan tak terlupakan. Jelajahi pesonanya dan temukan keajaiban alam yang menakjubkan di sini!", Pulau)}
                        />
                        <GambarWisata
                            src={Taman}
                            text="Miniature Park, Majestic Experience: Taman Mini Indonesia Indah"
                            onClick={() => showPopUpCard("Taman Mini Indonesia Indah", "Perpaduan sempurna dari kekayaan budaya Indonesia! Sebuah taman yang menjadi wadah bagi kebudayaan dari 33 provinsi Indonesia pada tahun 1975. Di sini, Anda akan menemukan aneka aspek kehidupan sehari-hari masyarakat yang terwakili melalui anjungan daerah berarsitektur tradisional. Mulai dari busana tradisional yang memukau, tarian-tarian yang memikat, hingga tradisi-tradisi yang memikat hati. Setiap sudut menggambarkan keindahan dan keunikan budaya bangsa ini dengan begitu memikat!", Taman)}
                        />
                        {/* <GambarWisata
                            src={Museum}
                            text='"Trunk Tales, Ancient Trails: Elephant Museum, Where History Roars and Beauty Soars"'
                            onClick={() => showPopUpCard("Elephant Museum", "Selamat datang di Museum Gajah, mercusuar kebudayaan di pusat Jakarta! Sebagai museum tertua dan terbesar di Asia Tenggara, didirikan pada 24 April 1778, Museum Gajah memamerkan kekayaan arkeologi, sejarah, etnografi, dan geografi Indonesia. Dengan koleksi yang mengagumkan, setiap langkah di dalamnya membawa Anda melintasi peradaban dari masa lampau hingga masa kini.", Museum)}
                        /> */}
                    </ul>
                    <ul className="cards__items">
                        <GambarWisata
                            src={Ancol}
                            text="Experience Adventure, Discover Tranquility: Ancol, Where Fun Meets Serenity!"
                            onClick={() => showPopUpCard("Ancol", "Taman Impian Jaya Ancol, sebuah destinasi rekreasi tematik terbesar dan paling lengkap di Jakarta Utara, hadir sebagai oase hiburan yang menghadap langsung ke Laut Jawa. Dengan luas lahan mencapai 80 hektar, kawasan ini membanggakan koleksi wahana-wahana seru dan pantai yang menyejukkan, menciptakan pengalaman tak terlupakan bagi pengunjung yang mencari petualangan dan kesenangan di tepi laut.", Ancol)}
                        />
                        <GambarWisata
                            src={Monas}
                            text="Monas: Towering Icon, Beacon of Unity!"
                            onClick={() => showPopUpCard("Monas", "Monumen Nasional, atau yang lebih dikenal dengan sebutan Monas, adalah sebuah simbol kebanggaan yang resmi dibangun pada 17 Agustus 1961, dengan pintu pertamanya dibuka untuk umum pada tanggal 12 Juli 1975. Menara setinggi 132 meter, sekitar 433 kaki, ini menjulang gagah di atas lahan seluas 80 hektar. Monas bukan hanya sebuah landmark fisik, tapi juga sebuah penanda penting dalam sejarah dan identitas nasional Indonesia, menjadi tujuan wisata yang mendebarkan serta tempat peringatan yang megah bagi para pengunjung dari dalam dan luar negeri.", Monas)}
                        />
                        <GambarWisata
                            src={KotaTua}
                            text="Ancient Heritage, New Charms: Old Town Jakarta"
                            onClick={() => showPopUpCard("Old Town Jakarta", "Kota Tua Jakarta menggoda dengan kekayaan sejarahnya, masih memancarkan jejak kuat dari masa kolonial Belanda dalam arsitektur bangunannya. Setiap sudutnya memancarkan pesona zaman dahulu, membiarkan Anda menyelami atmosfer masa lalu melalui jalan-jalan bersejarah dan museum-museum yang memamerkan artefak berharga. Rasakan gemerlapnya masa lampau yang terwujud dalam keindahan bangunan-bangunan dan cerita-cerita yang terkandung di dalamnya.", KotaTua)}
                        />
                    </ul>
                    <ul className="cards__items">
                    {/* {showMore && (
                            <> */}
                        <GambarWisata
                            src={GI}
                            text="Grand Indonesia: Elevating Experiences, Every Step of the Way!"
                            onClick={() => showPopUpCard("Ancol", "Taman Impian Jaya Ancol, sebuah destinasi rekreasi tematik terbesar dan paling lengkap di Jakarta Utara, hadir sebagai oase hiburan yang menghadap langsung ke Laut Jawa. Dengan luas lahan mencapai 80 hektar, kawasan ini membanggakan koleksi wahana-wahana seru dan pantai yang menyejukkan, menciptakan pengalaman tak terlupakan bagi pengunjung yang mencari petualangan dan kesenangan di tepi laut.", GI)}
                        />
                        <GambarWisata
                            src={CP}
                            text="Central Park: Where Urban Chic Meets Green Serenity!"
                            onClick={() => showPopUpCard("Monas", "Monumen Nasional, atau yang lebih dikenal dengan sebutan Monas, adalah sebuah simbol kebanggaan yang resmi dibangun pada 17 Agustus 1961, dengan pintu pertamanya dibuka untuk umum pada tanggal 12 Juli 1975. Menara setinggi 132 meter, sekitar 433 kaki, ini menjulang gagah di atas lahan seluas 80 hektar. Monas bukan hanya sebuah landmark fisik, tapi juga sebuah penanda penting dalam sejarah dan identitas nasional Indonesia, menjadi tujuan wisata yang mendebarkan serta tempat peringatan yang megah bagi para pengunjung dari dalam dan luar negeri.", CP)}
                        />
                        {/* <GambarWisata
                            src={Glodok}
                            text="China Town Glodok: Where Tradition Meets Modern Vibrancy!"
                            onClick={() => showPopUpCard("Old Town Jakarta", "Kota Tua Jakarta menggoda dengan kekayaan sejarahnya, masih memancarkan jejak kuat dari masa kolonial Belanda dalam arsitektur bangunannya. Setiap sudutnya memancarkan pesona zaman dahulu, membiarkan Anda menyelami atmosfer masa lalu melalui jalan-jalan bersejarah dan museum-museum yang memamerkan artefak berharga. Rasakan gemerlapnya masa lampau yang terwujud dalam keindahan bangunan-bangunan dan cerita-cerita yang terkandung di dalamnya.", Glodok)}
                        /> */}
                        {/* </>
                        )} */}
                    </ul>
                    <ul className="cards__items">
                    {/* {showMore && (
                            <> */}
                        <GambarWisata
                            src={TIM}
                            text="Taman Ismail Marzuki: Where Arts and Culture Flourish in Harmony!"
                            onClick={() => showPopUpCard("Ancol", "Taman Impian Jaya Ancol, sebuah destinasi rekreasi tematik terbesar dan paling lengkap di Jakarta Utara, hadir sebagai oase hiburan yang menghadap langsung ke Laut Jawa. Dengan luas lahan mencapai 80 hektar, kawasan ini membanggakan koleksi wahana-wahana seru dan pantai yang menyejukkan, menciptakan pengalaman tak terlupakan bagi pengunjung yang mencari petualangan dan kesenangan di tepi laut.", TIM)}
                        />
                        <GambarWisata
                            src={MBank}
                            text="Museum Bank Indonesia: Unraveling the Rich Tapestry of Financial History!"
                            onClick={() => showPopUpCard("Monas", "Monumen Nasional, atau yang lebih dikenal dengan sebutan Monas, adalah sebuah simbol kebanggaan yang resmi dibangun pada 17 Agustus 1961, dengan pintu pertamanya dibuka untuk umum pada tanggal 12 Juli 1975. Menara setinggi 132 meter, sekitar 433 kaki, ini menjulang gagah di atas lahan seluas 80 hektar. Monas bukan hanya sebuah landmark fisik, tapi juga sebuah penanda penting dalam sejarah dan identitas nasional Indonesia, menjadi tujuan wisata yang mendebarkan serta tempat peringatan yang megah bagi para pengunjung dari dalam dan luar negeri.", MBank)}
                        />
                        <GambarWisata
                            src={SWJ}
                            text="Sea World Jakarta: Dive into an Ocean of Discovery and Wonder!"
                            onClick={() => showPopUpCard("Old Town Jakarta", "Kota Tua Jakarta menggoda dengan kekayaan sejarahnya, masih memancarkan jejak kuat dari masa kolonial Belanda dalam arsitektur bangunannya. Setiap sudutnya memancarkan pesona zaman dahulu, membiarkan Anda menyelami atmosfer masa lalu melalui jalan-jalan bersejarah dan museum-museum yang memamerkan artefak berharga. Rasakan gemerlapnya masa lampau yang terwujud dalam keindahan bangunan-bangunan dan cerita-cerita yang terkandung di dalamnya.", SWJ)}
                        />
                        {/* </>
                        )} */}
                    </ul>
                    {/* {!showMore && (
                        <button className="button-wisata" onClick={loadMore}>
                            Load More
                        </button>
                    )} */}
                </div>
            </div>
            {showPopUp && (
                <PopUpCard
                    content={popUpContent}
                    description={popUpDescription}
                    imgUrl={popUpImage}
                    onClose={hidePopUpCard}
                />
            )}
        </div>
    );
}

export default TempatWisata;
