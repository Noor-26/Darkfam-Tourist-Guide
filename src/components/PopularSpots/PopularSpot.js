import React from 'react';
import img from '../../images/touristSpot.png'
import "./PopularSpots.css"
const PopularSpot = () => {
    return (
        <div className="p-3 my-2">
            <h2 className="text-center">Popular Spots In Bangladesh</h2>
            <div className="tour-component py-5">
                <div className="tour-img ">
                <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="place-names px-5 pt-4">
                        <p>Dhaka city</p>
                        <p>Ahsan Manzil</p>
                        <p>Cox’s Bazar</p>
                        <p>Teknaf</p>
                        <p>Saint Martin Island</p>
                        <p> Sunderbans</p>
                        <p> Sonargaon</p>
                        <p>Lalbagh fort</p>
                        <p>Kuakata Sea Beach</p>
                        <p>Lawachara forest</p>
                </div>
            </div>
            
        </div>
    );
};

export default PopularSpot;