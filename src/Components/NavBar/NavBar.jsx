//NavBar.jsx

import './NavBar.css';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <div className="navigation">
            <ul className={hamburgerOpen ? 'open' : ''}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <IconContext.Provider value={{ color: 'white', size: '50px' }}>
                    <IoMdMenu />
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default NavBar;
