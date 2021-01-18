// Import React
import React from 'react';

// Importing Components
import LandingLeft from "../components/LandingLeft";
import LandingRight from "../components/LandingRight"

const LandingPage = () => {
    return ( 
        <div className="hero">
            <LandingLeft />
            <LandingRight />
        </div>
     );
}
 
export default LandingPage;