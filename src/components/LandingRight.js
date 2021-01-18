import React from 'react';

// importing components
import InfoCard from "./InfoCard";

const LandingRight = () => {
    return ( 
        <div className="home-right">
            <div className="title-section">
                <h2 className="main-title">Corona Virus <br/>Hits Bangladesh</h2>
            </div>
            <InfoCard />
            <div className="home-links">
                <a href="#" className="home-link">Safety</a>
                <a href="#" className="home-link">Stats</a>
                <a href="#" className="home-link">News</a>
            </div>
        </div>
     );
}
 
export default LandingRight;