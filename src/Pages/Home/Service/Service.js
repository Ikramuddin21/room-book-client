import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, title, description, price, img } = props.service;
    return (
        <div className="service">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="service-text-area">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description.split(" ").slice(0, 32).join(" ")}.</p>
                <h2 className="service-price">${price}</h2>
                <Link to={`/booking/${_id}`}>
                    <button className="service-booking-btn">Booking</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;