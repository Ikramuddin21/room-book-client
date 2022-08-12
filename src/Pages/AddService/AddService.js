import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './AddService.css';

const AddService = () => {

    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("https://mighty-sands-64586.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })
    };

    return (
        <>
            <HeroRoute title="Add Service" />
            <div className="add-service-container">
                <h1>Add a New Service</h1>
                <div>
                    <form className="shared-form" onSubmit={handleSubmit(onSubmit)}>
                        {
                            success ? <h3 className="highlight-2">Service Added, Check Home Page</h3> :
                            <h3>Fillup the form</h3>
                        }
                        <input {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
                        <input {...register("price", { required: true })} placeholder="Price" />
                        <input {...register("img")} placeholder="Image online url" />
                        <textarea {...register("description", { required: true, minLength: 32 })} placeholder="Description at least 32 word" />
                        <button className={`booking-submit-btn ${success ? "booking-success" : ""}`} type="submit">{success ? "Successfully Submitted" : "Submit"}</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddService;