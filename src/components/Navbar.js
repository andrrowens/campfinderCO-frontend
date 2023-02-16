import React from 'react';
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Navbar= (logout, setLogout) => {


  const handleLogout = () => {
   fetch("/logout", {
      method: "DELETE",
    })
      .then((r) => {
        if (r.status === 204) {
          setLogout(null)
          alert("You are logged out")
        } else {
          r.json()
          .then(err => alert(err))
        }
      })
  }

  // function handleLogout() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   })
  //   .then(res =>{
  //     if(res.ok){
  //       updateUser(null)
  //     }
  //   })
  // }

    return (
    <nav className="nav">
  
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/campsites" className="nav-link">Campsites</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/reviews" className="nav-link">Reviews</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/signup" className="nav-link">Sign Up</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/login" className="nav-link">Login</NavLink>

        {/* <NavLink activeStyle={{ color: "green" }} to="/authenticated_user" className="nav-link">Login</NavLink> */}
     
        {/* <NavLink activeStyle={{ color: "green" }} to="/logout" className="nav-link">Logout</NavLink> */}

        <header> <button onClick={handleLogout}>Logout</button> </header>
     
    </nav>
    );
  }

export default Navbar