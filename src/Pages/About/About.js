import React from 'react';
import aboutImage from '../../images/about.jpg';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './About.css';

const About = () => {
    return (
        <>
            <HeroRoute />
            <div className="about">
                <div className="about-left">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="about-right">
                    <h2>We have been successfully providing services for 15 years.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque eius odio sequi repellat. Architecto reprehenderit aspernatur nam explicabo incidunt, labore commodi minima neque non qui rem illum error, officia et, laboriosam saepe fugit obcaecati cupiditate eius esse odio earum rerum sed! Eaque laudantium deleniti perferendis repellendus. Suscipit, pariatur facilis consectetur dolore illum voluptatum veniam! Ullam vel, tempore illum quod amet quasi laborum corporis qui enim in dignissimos odio eos maiores inventore doloribus dolor unde harum quam hic. Quod quis quaerat dolorem optio excepturi, quasi porro ipsam ullam nihil veritatis sequi commodi, sint maxime neque esse, deleniti quas sed blanditiis.</p>
                </div>
            </div>
        </>
    );
};

export default About;