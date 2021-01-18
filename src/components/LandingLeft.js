import React from 'react';
import virusImage from '../img/3dImage.png'

const LandingLeft = () => {
    return (
       
            <div className="home-left">
                <div className="title-container" >
                    <h1 className="title">COVID19</h1>
                </div>
                <div className="hero-img" >
                    <img src={virusImage} alt="Virus"/>
                </div>
            </div>
        
    );
}
 
export default LandingLeft;
