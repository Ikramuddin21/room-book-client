import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import useAuth from '../../hooks/useAuth';

const Booking = () => {

    const [service, setService] = useState({});
    const [success, setSuccess] = useState(false);
    const [emptyField, setEmptyField] = useState(false);
    
    const {user} = useAuth();
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://mighty-sands-64586.herokuapp.com/users", data)
        .then(res => {
            if(res.data.insertedId) {
                setSuccess(true);
                reset();
                setEmptyField(true);
            }
        })
    };

    useEffect(() => {
        axios.get(`https://mighty-sands-64586.herokuapp.com/service/${id}`)
            .then(res => setService(res.data))
    }, []);

    return (
        <>
            <HeroRoute title="Booking" />
            <div className="booking-container">
            <div className="booking">
                <div className="booking-left">
                    <img src={service.img} alt="" />
                    <h2 className="booking-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
                <div className="booking-right">
                    <form className="shared-form" onSubmit={handleSubmit(onSubmit)}>
                        <h3>Check Your Activities</h3>
                        <input {...register("userName", { required: true, maxLength: 20 })} defaultValue={emptyField ? "" : user.displayName} />
                        <input {...register("email")} defaultValue={emptyField ? "" : user.email} />
                        <input type="date" {...register("date", { required: true })} />
                        <input {...register("serviceId")}  defaultValue={emptyField ? "" : id} />
                        <input {...register("status")} defaultValue={emptyField ? "" : "Pending"} />
                        <button className={success ? "booking-success booking-submit-btn" : "booking-submit-btn"} type="submit">{success ? "Successfully Submitted" : "Submit"}</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Booking;