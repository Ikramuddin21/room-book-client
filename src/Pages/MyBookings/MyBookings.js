import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyBooking from '../MyBooking/MyBooking';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setMyBookings(res.data);
            })

        // all services
        axios.get("http://localhost:5000/services")
            .then(res => setServices(res.data))
    }, []);

    // filter two array
    const filteredServices = () => {
        let servicesItem = [];
        servicesItem = services.filter(service => {
            return myBookings.find(item => {
                return item.serviceId === service._id;
            })
        })
        return servicesItem;
    };

    // handle delete 
    const handleDeleteBooking = id => {
        const confirmMess = window.confirm("Are You Want to Delete?");
        if (confirmMess) {
            axios.delete(`http://localhost:5000/users/${id}`)
                .then(res => {
                    console.log(res);
                    if (res.data.deletedCount > 0) {
                        const remainingBooking = myBookings.filter(booking => booking.serviceId !== id);
                        setMyBookings(remainingBooking);
                    }
                })
        }
    };

    return (
        <>
            <HeroRoute title="My Booking" />
            <div className="my-bookings-container">
                <h1>My All Booking Information</h1>
                <div className="my-bookings">
                    {
                        !filteredServices().length ? <p>Do not data add.</p> :
                        filteredServices().map(booking => <MyBooking
                            key={booking._id}
                            booking={booking}
                            handleDeleteBooking={handleDeleteBooking}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default MyBookings;