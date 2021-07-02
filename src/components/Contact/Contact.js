import React from 'react';
import './Contact.css';

export default function Footer() {
    return (
        <div id="contact" className="footer-container">
            <div className="footer-contact">
                <div class="heading">
                    <h2>Contact</h2>
                </div>
                <div class="content">
                    <div class="contactInfo">
                        <div class="contactInfoBox"> 
                            <div class="box">
                                <div class="icon">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="text">
                                    <h3>Phone</h3>
                                    <p>503-310-0091</p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="text">
                                    <h3>Email</h3>
                                    <p>kelsey.camden.smith@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
