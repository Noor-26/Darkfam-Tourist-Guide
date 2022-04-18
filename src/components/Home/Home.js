import React from 'react';
import Banner from '../Banner/Banner';
import PopularSpot from '../PopularSpots/PopularSpot';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner/>
           <Services/> 
           {/* extra component */}
           <PopularSpot/>
        </div>
    );
};

export default Home;