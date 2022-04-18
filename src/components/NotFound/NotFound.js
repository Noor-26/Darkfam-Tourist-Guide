import React from 'react';
import './NotFound.css'
import gif from '../../images/NotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <img src={gif} alt="" className="gif-img mx-auto d-block" />
        </div>
    );
};

export default NotFound;