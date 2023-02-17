import React from "react"
import { useState } from "react";

const ReviewEditForm = ({ id, title, date, content, image, setReviews, handleClick}) => {

    const [editReview, setEditReview] = useState({
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
        fetch(`/reviews/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editReview),
            
        })
        .then(response => {
            if(response.status ===202) {
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
        <form className="form" onSubmit={handleEditReview}>
            <input className="user-input" placeholder="Title" type="text" name="title" value={editReview.title} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Date" type="text" name="date" value={editReview.date} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Content" type="text" name="content" value={editReview.content} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Image" type="text" name="image" value={editReview.image} onChange={handleChange} /> <br/> 
            <input className="rev-btn" type="submit" value="Update Review" />
        </form>
    )
}

export default ReviewEditForm;