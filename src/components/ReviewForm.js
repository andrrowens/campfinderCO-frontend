import React from 'react'
import { useState } from 'react';

const ReviewForm = ({ setMessage, setReviews }) => {

    const [newReview, setNewReview] = useState({
        campsite: "",
        title: "",
        date: "",
        content: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewReview({...newReview, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("http://localhost:/4000/reviews", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
            .then(response => {
                if(response.status===201){
                    response.json()
                    .then(review => {
                        setReviews(currentReviews => [...currentReviews, newReview])
                        setMessage("Thanks for submitting!")
                    } )
                
                } else {
                    response.json()
                    .then(messageObj => setMessage(messageObj.message))
                }
               
                
            })
           
            .catch(error => alert(error))
            setNewReview({
                campsite: "",
                title: "",
                date: "",
                content: "",
                image: ""
            })
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title"> &#127957; Create your Review &#127957;</h2>
                <div>
                    <input className="user-input" type="text" name="campsite" placeholder='Campsite:' onChange={handleChange} value={newReview.name} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="title" placeholder='Title:' onChange={handleChange} value={newReview.review} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="date" placeholder='Date:' onChange={handleChange} value={newReview.review} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="content" placeholder='Content:' onChange={handleChange} value={newReview.review} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="image" placeholder='Image URL:' onChange={handleChange} value={newReview.review} required />
                </div>

                <input className="submit-btn" type="submit" value="Submit Review" />
                
            </form>
        </div>
    )
    
}


export default ReviewForm
