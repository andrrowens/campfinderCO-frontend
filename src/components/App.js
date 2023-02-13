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
import Notification from './Notification';




function App() {

const [campsites, setCampsites] = useState([])
const [reviews, setReviews]= useState([])
const [message, setMessage]= useState("")


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
            </Route>

          </Switch>
     </div>
  )
}

export default App;
