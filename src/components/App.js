import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
// import { Switch } from "react";

import CampsiteContainer from './CampsiteContainer';
import CampsiteForm from './CampsiteForm';
import Header from './Header';
import ReviewContainer from './ReviewContainer';
import ReviewForm from './ReviewForm';
import ReviewEditForm from './ReviewEditForm';
import ReviewDelete from './ReviewDelete';
import Notification from './Notification';
// import UserForm from './UserForm';
import Login from './Login';




function App() {

const [campsites, setCampsites] = useState([])
const [reviews, setReviews]= useState([])
const [message, setMessage]= useState("")
const [user, setUser] = useState(null);


useEffect(() => { // fetch campsites
  const fetchCampsites = async () => {
    try {
      const resp = await fetch("http://localhost:4000/campsites")
      const data = await resp.json()
      setCampsites(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchCampsites()
}, [])

useEffect(() => { // fetch reviews
  const fetchReviews = async () => {
    try {
      const resp = await fetch("http://localhost:4000/reviews")
      const data = await resp.json()
      setReviews(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchReviews()
}, [])



// useEffect(() => {
//   fetch("/me").then((response) => {
//     if (response.ok) {
//       response.json().then((user) => setUser(user));
//     }
//   });
// }, []);

// if (user) {
//   return <h2>Welcome, {user.username}!</h2>;
//   } else {
//   return <Login onLogin={setUser} />;
//   };




  // useEffect(() => {
  //   fetch("/authorized")
  //     .then(res => {
  //       if(res.ok) {
  //         res.json().then(user => {
  //           setUser(user)
  //           // fetchCampsites()
  //         })
  //       } else {
  //         res.json().then(() => setUser(null))
  //       }
  //     })
  // }, [])
  



// useEffect(() => { // fetch users
//   const fetchUsers = async () => {
//     try {
//       const resp = await fetch("http://localhost:4000/users")
//       const data = await resp.json()
//       setUsers(data)
//     } catch (error) {
//       alert(error)
//     }
//   }
//   fetchUsers()
// }, [])

// if (!user) return (
//   <>
//     {/* <Login updateUser={updateUser} /> */}
//   </>
// )

  return (
    <div className="App">
      <Notification message={message} setMessage={setMessage} />

       <Navbar />
        <Header/>
          <Switch>

            <Route path="/campsites">
              <CampsiteContainer campsites={campsites} setCampsites={setCampsites} />
              <CampsiteForm setCampsites={setCampsites} setMessage={setMessage} />
            </Route >

            <Route path="/reviews">
              <ReviewForm setMessage={setMessage} setReviews={setReviews} />
              <ReviewContainer setMessage={setMessage} reviews={reviews} setReviews={setReviews} />
              <ReviewEditForm reviews={reviews} setReviews={setReviews} />
              <ReviewDelete reviews={reviews} setReviews={setReviews} />
            </Route>

            <Route path="/login">
              <Login user={setUser} setUser={setUser} />
            </Route>

          </Switch>
     </div>
  )
}

export default App;
