import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {



    

    return(
        <div className="bg">
            <div className="header">.
                <h1 className="site-title">CampFinderCO</h1>
                <h2 className="sub-header">Helping Colorado Camp Since 2023</h2>
                <Link className="campsite-link" to="/campsites">View Campsites</Link> <br/>
                <Link className="review-link" to="/reviews">View Reviews</Link>
            </div>
        </div>
        
    )   
}; 

export default Header;