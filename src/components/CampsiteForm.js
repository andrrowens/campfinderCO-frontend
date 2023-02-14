import React from 'react'
import { useState } from 'react';

const CampsiteForm = ({ setCampsites, setMessage }) => {

  const [newCampsite, setNewCampsite] = useState({
    name : "",
    region: "",
    description: "",
    elevation: "",
    coordinates: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCampsite({...newCampsite, [e.target.name]: e.target.value})
}



const handleSubmit = (e) => {
    e.preventDefault()
        fetch("http://localhost:4000/campsites", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCampsite)
        })
        .then(response => {
            if(response.status===201){
                response.json()
                .then(newCampsiteObj => {
                    setCampsites(currentVal => [...currentVal, newCampsite])
                 
                } )
            } else {
                response.json()
                .then(messageObj => setMessage(messageObj.message))
            }
 
        })
       
        .catch(error => alert(error))
        setNewCampsite({
          name : "",
          region: "",
          description: "",
          elevation: "",
          coordinates: "",
          image: ""
        })
}


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">Submit New Campsite</h2>
          <div>
              <input className="user-input" type="text" name="name" placeholder='Name:' onChange={handleChange} value={newCampsite.name} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="region" placeholder='Region:' onChange={handleChange} value={newCampsite.region} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="description" placeholder='Description:' onChange={handleChange} value={newCampsite.description} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="elevation" placeholder='Elevation:' onChange={handleChange} value={newCampsite.elevation} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="coordinates" placeholder='Coordinates:' onChange={handleChange} value={newCampsite.coordinates} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="image" placeholder='Image URL:' onChange={handleChange} value={newCampsite.image} required/>
          </div>

          

          <input className="submit-btn" type="submit" value="Submit New Campsite" />
          
      </form>
    </div>
  )
}

export default CampsiteForm
