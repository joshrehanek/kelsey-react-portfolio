import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <header className='nav'>
            <nav>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        KCS
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/#bio'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Bio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/#education'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Education
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/#prjects'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/#contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}