import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://mighty-sands-64586.herokuapp.com/services")
            .then(res => setServices(res.data))
    }, []);

    return (
        <div className="services-container">
            <h2>Our Adventure Room</h2>
            <div className="services">
                {
                    !services.length ? <h1>Loading...</h1> :
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;