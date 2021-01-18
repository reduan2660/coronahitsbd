import React from 'react';
// Importing Icons
import headlineIcon from "../img/headlineIcon.svg"

const InfoCard = () => {
    return ( 
        <div className="info-card">
            <div className="info-numbers">
                <div className="confirmed">504868<br/>Confirmed</div>
                <div className="deatchs">7359 <br/>Death</div>
            </div>
            <div className="info-news">
                <div className="info-news-icon">
                    <img src={headlineIcon} alt=""/>
                </div>
                <div className="info-news-headline">
                    <a href="#">New Variant of Covid detected</a>
                </div>
            </div>
        </div>
     );
}
 
export default InfoCard;