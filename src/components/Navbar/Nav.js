import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    KCS
                </Link>
            </div>
        </nav>
    )
}