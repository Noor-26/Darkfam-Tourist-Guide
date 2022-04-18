import React from 'react';
import Service from '../Service/Service';
import services from './data.json' 
const Services = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Services</h2>
            <div className="mt-3 row row-cols-1 row-cols-md-3 ">
            {
                services.map(service => <Service key={service.id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;