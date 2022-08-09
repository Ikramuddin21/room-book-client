import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/gallery")
        .then(res => setImages(res.data))
    }, []);
    return (
        <div className="gallery-container">
            <h2>Photo Gallery</h2>
            <div className="gallery">
                {
                    images.map(image => <div key={image._id} className="album">
                        <img src={image.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;

