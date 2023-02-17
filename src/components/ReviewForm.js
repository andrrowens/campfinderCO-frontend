import React from 'react'
import { useState } from 'react';

const ReviewForm = ({ campsites, setReviews, setMessage }) => {

    const [newReview, setNewReview] = useState({
        title: "",
        date: "",
        content: "",
        image: "",
        campsite_id: "" 
    })

    const handleChange = (e) => {
        setNewReview(currentReview => ({...currentReview, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/reviews", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
            .then(response => {
                console.log("fetch")
                if(response.status===201){
                    response.json()
                    .then(review => {
                        console.log(review)
                        setReviews(currentReview => [...currentReview, review])
                        setNewReview({
                            title: "",
                            date: "",
                            content: "",
                            image: "",
                            campsite_id: ""
                        })
                    } )
                } else {
                    response.json()
                    .then(errorObj => setMessage(errorObj.error))
                }    
            })
            .catch(error => alert(error))
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title"> &#127957; Create your Review &#127957;</h2>
                <div>
                    <input className="user-input" type="text" name="title" placeholder='Title:' onChange={handleChange} value={newReview.title} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="date" placeholder='Date:' onChange={handleChange} value={newReview.date} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="content" placeholder='Content:' onChange={handleChange} value={newReview.content} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="image" placeholder='Image URL:' onChange={handleChange} value={newReview.image} required />
                </div>

                <div>
                    <select className="user-input" name="campsite_id" onChange={handleChange} value={newReview.campsite_id} required>
                        <option value=""> Select Campsite </option>
                        {campsites.map(campsite => <option value={campsite.id}>{campsite.name}</option>)}
                    </select>
                </div>

                <input className="submit-btn" type="submit" value="Submit Review" />
            </form>
        </div>
    )
}


export default ReviewForm
