import React from 'react';
import banner from '../../../images/hero-banner.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div>
                <h1 className="hero-title">Find your perfect place to stay</h1>
                <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae minus accusamus! Qui eaque laboriosam id quaerat optio. Quidem facere corporis porro quibusdam voluptatem, accusantium accusamus nihil mollitia consequuntur repellendus.</p>
                <button className="shared-bg-btn">Booking</button>
            </div>
        </div>
    );
};

export default Hero;