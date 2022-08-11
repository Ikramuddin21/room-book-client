import React from 'react';
import './MyBooking.css';

const MyBooking = ({booking, handleDeleteBooking}) => {
    return (
        <div className="my-booking">
            <div className="my-booking-img-area">
                <img src={booking.img} alt="" />
            </div>
            <div className="my-booking-text-area">
                <h2 className="my-booking-title">{booking.title}</h2>
                <h2 className="highlight">${booking.price}</h2>
                <button onClick={() => handleDeleteBooking(booking._id)} className="my-booking-delete">Delete</button>
            </div>
        </div>
    );
};

export default MyBooking;