import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './ManageBookings.css';

const ManageBookings = () => {

    const [manageUsers, setManageUsers] = useState([]);
    const [manageBookings, setManageBookings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setManageBookings(res.data)
            })

        const uniqueUserFind = () => {
            const uniqueUser = [];
            const unique = manageBookings.filter(booking => {
                const isDuplicate = uniqueUser.includes(booking.email);

                if (!isDuplicate) {
                    uniqueUser.push(booking.email);
                    return true;
                }
                else {
                    return false;
                }
            })
            return unique;
        };
        setManageUsers(uniqueUserFind());
    }, [manageBookings]);

    // handle delete user
    const handleDeleteUser = email => {
        const confirmMess = window.confirm("Are you want to delete user");
        if (confirmMess) {
            axios.delete(`http://localhost:5000/users?email=${email}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        setManageUsers([]);
                    }
                })
        }
    };

    return (
        <>
            <HeroRoute />
            <div className="manage-bookings-container">
                {
                    !manageUsers?.length ? <div>
                        <h1>Do not user</h1>
                        <Link to="/"><button className="shared-btn-2 go-back-btn">Go Home</button></Link>
                    </div> :
                        <h1>All Valid User</h1>

                }
                <div className="manage-bookings">
                    {
                            manageUsers?.map(user => <div key={user._id} className="manage-booking">
                                <span>{user.userName}</span>
                                <span>{user.email}</span>
                                <span>{user.date}</span>
                                <span>Service Id: {user.serviceId}</span>
                                <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
                            </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ManageBookings;