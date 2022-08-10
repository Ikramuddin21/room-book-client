import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeroRoute.css';

const HeroRoute = ({title}) => {
    const {pathname} = useLocation();
    return (
        <div className="hero-route">
            <h1>{title ? title : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</h1>
            <div>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <h2 className='highlight'>{title ? title : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</h2>
            </div>
        </div>
    );
};

export default HeroRoute;