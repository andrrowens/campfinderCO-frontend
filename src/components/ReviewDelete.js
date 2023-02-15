import React from "react";
import { useState } from "react";
import ReviewEditForm from "./ReviewEditForm";

const ReviewDelete = ({id, campsite, title, date, content, image, setReviews}) => {


    const [showForm, setShowForm] = useState(false)


    const handleClick = () => {
        setShowForm(currentValue => !currentValue)
    }

    const handleDeleteReview = () => {
        fetch(`http://localhost:4000/reviews/${id}`,
        {
            method: "DELETE"
        })
        setReviews(currentReviews => currentReviews.filter(element => element.id !== id))
    }

    
    return(
            <div className="reviewBox">
                {showForm ? <ReviewEditForm id={id} campsite={campsite} title={title} date={date} content={content} image={image} setReviews={setReviews} handleClick={handleClick} />:(
                    <div className="reviewCard">
                     {campsite} :
                     {title} :
                     {date} :
                     {content}
                     {image}
                            <button className="form-btn" onClick={handleDeleteReview}> 
                                DELETE &#10006;
                            </button>
                            <button className="form-btn" onClick={handleClick}>
                                EDIT &#9999;
                            </button>  
                    </div>
                )}
            </div>
    )
}; 

export default ReviewDelete;