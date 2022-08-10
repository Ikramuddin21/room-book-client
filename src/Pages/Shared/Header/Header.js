import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="header">
            <div>
                <div className="header-logo-area">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="header-lists">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/room">Room</Link></li>
                    {
                        user.email && <li><Link to="/my-booking">My Booking</Link></li>
                    }
                    {
                        user.email && <li><Link to="/manage-booking">Manage Booking</Link></li>
                    }
                </ul>
                <div className="header-right">
                    {
                        user.email && <span className="user-name">{user.displayName}</span>
                    }
                    {
                        user.email ? <button onClick={logOut} className="shared-bg-btn">Logout</button> :
                            <Link to="/login">
                                <button className="shared-bg-btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;