import React from 'react';
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Navbar= () =>{
    return (
    <nav className="nav">
      {/* <li> */}
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
      {/* </li> */}
      {/* <li> */}
        <NavLink activeStyle={{ color: "green" }} to="/campsites" className="nav-link">Campsites</NavLink>
      {/* </li> */}
      {/* <li> */}
        <NavLink activeStyle={{ color: "green" }} to="/reviews" className="nav-link">Reviews</NavLink>
      {/* </li> */}
           {/* <li> */}
           <NavLink activeStyle={{ color: "green" }} to="/Login" className="nav-link">Login</NavLink>
      {/* </li> */}
    </nav>
    );
  }

export default Navbar