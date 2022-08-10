import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyBooking from '../MyBooking/MyBooking';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);
    // const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setMyBookings(res.data);
            })

            // all services
            // axios.get("http://localhost:5000/services")
            // .then(res => setServices(res.data))
    }, []);
    // console.log(myBookings);

    return (
        <>
            <HeroRoute title="My Booking" />
            <div>
                <h1>My All Booking Information</h1>
                <div>
                    {
                        // myBookings.map(booking => <MyBooking key={booking._id} booking={booking} />)
                    }
                </div>
            </div>
        </>
    );
};

export default MyBookings;