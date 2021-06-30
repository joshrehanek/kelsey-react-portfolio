import React from "react";
import "../../index.css"
import "./Hero.css"
import HeroBackground from "../../assets/images/hero-background.jpg"

export default function Hero() {
    return (
        <div className='hero'>
            <img
                src={HeroBackground}
                alt='green background'
                />
            <section class="banner" id="home">
                <div class="text-box">
                    <h2>Kelsey Camden Smith</h2>
                    <h3>Behavioral Health Therapist</h3>
                </div>
            </section>

        </div>
    );
}