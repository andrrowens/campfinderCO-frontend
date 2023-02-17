import React from 'react'
import { useState } from "react";
import ReviewEditForm from "./ReviewEditForm";

const ReviewCard = ({id, title, date, content, image, setReviews}) => {


    const [showForm, setShowForm] = useState(false)


    const handleClick = () => {
        setShowForm(currentValue => !currentValue)
    }

    const handleDeleteReview = () => {
        fetch(`/reviews/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setReviews(currentReviews => currentReviews.filter(element => element.id !== id)))
    }

    
    return(
            <div className="reviewBox">
                {showForm ? <ReviewEditForm id={id} title={title} date={date} content={content} image={image} setReviews={setReviews} handleClick={handleClick} />:(
                    <div className="reviewCard">
                     <strong>Title: </strong>{title} <br/>
                     <strong>Date: </strong>{date} <br/>
                     <strong>Content: </strong>{content} <br/>
                     {/* <strong>Image: </strong>{image} <br/> */}
                     <img className="campsite-image" src={image} alt={""}/> <br/>
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

export default ReviewCard;


// const ReviewCard = ({id, title, date, content, image, setReviews}) => {
//   return (
//         <>
//             <div className="review-box">
//                 <p id={id} setReviews={setReviews}> </p>
//                 <p className="review-title">Title: {title}</p>
//                 <p className="review-date">Date: {date}</p>
//                 <p className="review-content">Content: {content}</p>
//                 <p className="review-image">Image: {image}</p>
//             </div>
//         </>
//     )
// };


