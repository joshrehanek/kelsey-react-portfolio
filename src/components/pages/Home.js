import React from 'react';
import "../../index.css";
import Hero from "../Hero/Hero";
import Bio from "../Bio/Bio";
import Contact from "../Contact/Contact";
import Projects from '../Projects/Project';


export default function Home () {
    return (
        <div>
            <Hero />
            <Bio />
            <Projects />
            <Contact />
        </div>
    )
}

