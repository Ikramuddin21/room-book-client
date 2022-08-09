import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div>
                <div className="header-logo-area">
                    <img src={logo} alt="" />
                </div>
                <ul className="header-lists">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Room</a></li>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">My Booking</a></li>
                    <li><a href="#">Manage Booking</a></li>
                </ul>
                <div className="header-right">
                    <button className="shared-bg-btn">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;