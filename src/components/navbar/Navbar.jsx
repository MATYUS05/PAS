import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../gambar/logo.png"
import menu_icon from "../../gambar/MenuIcon2.png"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    }, []);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenu(false); 
        }
    }

    return (
        <nav className={`container ${sticky ? 'white-nav' : ''}`}>
            <img src=""alt="logo" />
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('destination')}>Destination</li>
                <li>Kosong</li>
                <li>Kosong</li>
                <li onClick={() => scrollToSection('contact')}><button className="btn">Contact</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
