import React from 'react';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Offer />
            <Gallery />
        </div>
    );
};

export default Home;