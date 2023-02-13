import React from 'react'

const ReviewCard = ({id, title, date, content, image, setReviews}) => {
  return (
        <>
            <div className="review-box">
                <p id={id} setReviews={setReviews}> </p>
                <p className="review-title">Title: {title}</p>
                <p className="review-date">Date: {date}</p>
                <p className="review-content">Content: {content}</p>
                <p className="review-image">Image: {image}</p>
            </div>
        </>
    )
};

export default ReviewCard
