import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);
    const [services, setServices] = useState([]);
    const {user} = useAuth();

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
            return myBookings.find(booking => {
                return booking.serviceId === service._id && booking.email === user.email;
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
            {
                    !filteredServices().length ? <div>
                        <h1>Do not information</h1>
                        <Link to="/"><button className="shared-btn-2 go-back-btn">Go Home</button></Link>
                    </div> :
                        <h1>My All Booking Information</h1>

               }
                <div className="my-bookings">
                    {
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