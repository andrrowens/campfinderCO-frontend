import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import { Switch } from "react";

import CampsiteContainer from './CampsiteContainer';
import Header from './Header';




function App() {

const [campsites, setCampsites] = useState([])


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

  return (
    <div className="App">
       <Navbar />
        <Header/>
          <Switch>
      
            <Route path="/campsites">
              <CampsiteContainer campsites={campsites} setCampsites={setCampsites} />
              
            </Route >
          </Switch>
     </div>
  )
}

export default App;
