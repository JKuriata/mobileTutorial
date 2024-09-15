//NavBar.jsx

import './NavBar.css';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom"

export const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <div className="navigation">
            <ul className={hamburgerOpen ? 'open' : ''}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <IconContext.Provider value={{ color: 'white', size: '50px' }}>
                    <IoMdMenu />
                </IconContext.Provider>
            </div>
        </div>
    );
};