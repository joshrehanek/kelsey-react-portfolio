import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
}