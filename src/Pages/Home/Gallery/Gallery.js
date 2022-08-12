import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {

    const [images, setImages] = useState([]);
    const {pathname} = useLocation();

    useEffect(() => {
        axios.get("https://mighty-sands-64586.herokuapp.com/gallery")
        .then(res => setImages(res.data))
    }, []);
    return (
        <div className="gallery-container">
            <h2>{pathname === "/room" ? "Special Room" : "Photo Gallery"}</h2>
            <div className="gallery">
                {
                    !images.length ? <h1>Loading...</h1> :
                    images.map(image => <div key={image._id} className="album">
                        <img src={image.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;

