import React from "react"
import { useState } from "react";

const ReviewEditForm = ({ id, campsite, title, date, content, image, setReviews, handleClick}) => {

    const [editReview, setEditReview] = useState({
        campsite: campsite,
        title: title,
        date: date,
        content: content,
        image: image
    });

    const handleChange = (e) => {
        setEditReview({...editReview, [e.target.name]: e.target.value})
    }

    const handleEditReview = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/reviews/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editReview),
            
        })
        .then(response => {
            if(response.status ===200) {
                response.json()
                .then(review => {

                    setReviews(currentReviews => {
                        const updatedReviews = currentReviews.map(rev =>{
                            return rev.id === id ? review : rev
                        })
                        return updatedReviews
                    })
                    handleClick()
                })
            } else {
                response.json()
                .then(error => alert(error))
            }
        })
        .catch(error => alert(error))

    }

    return(
        <form onSubmit={handleEditReview}>
            <input className="user-input" placeholder="Campsite" type="text" name="campsite" value={editReview.campsite} onChange={handleChange} /> 
            <input className="user-input" placeholder="Title" type="text" name="title" value={editReview.title} onChange={handleChange} /> 
            <input className="user-input" placeholder="Date" type="text" name="date" value={editReview.date} onChange={handleChange} /> 
            <input className="user-input" placeholder="Content" type="text" name="content" value={editReview.content} onChange={handleChange} /> 
            <input className="user-input" placeholder="Image" type="text" name="image" value={editReview.image} onChange={handleChange} /> 
            <input className="rev-btn" type="submit" value="Update!" />
        </form>
    )
}

export default ReviewEditForm;