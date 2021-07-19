import React from "react";
import "../../index.css"
import "./Hero.css"
import HeroBackground from "../../assets/images/blueSky.jpeg"
import HeroImage from "../../assets/images/kelsSamplePic.jpg"

export default function Hero() {
    return (
        <div className='hero'>
            <img
                src={HeroBackground}
                alt='sky background'
            />
            <section className="banner" id="home">
                <div className="text-box">
                    <h2>Kelsey Camden Smith</h2>
                    <img
                        className="samplePic"
                        src= {HeroImage}
                        alt= 'sample pic'
                        />
                    <h4>Behavioral Health Therapist</h4>
                </div>
            </section>

        </div >
    );
}