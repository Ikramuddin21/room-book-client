import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer">
            <div>
                <div className="offer-text">
                    <h3 className="highlight">Spacial Offer</h3>
                    <h1>Enjoy Your Dream Vacation in Dubai</h1>
                    <p>7 Days Only</p>
                    <div className="offer-text-bottom">
                        <h2 className="offer-price highlight">$1500</h2>
                        <button className="shared-btn-2">Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;