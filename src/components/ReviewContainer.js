import React from "react";
import ReviewCard from "./ReviewCard";
import { useEffect } from "react";
// import ReviewForm from "./ReviewForm";


const ReviewContainer = ({reviews, setReviews}) => {

    const mappedReview = reviews.map(review => (
        <ReviewCard {...review} key={review.id} setReviews={setReviews} />
    ));

    return(
        <div className="ReviewContainer">
            {mappedReview}
        </div>
    )
}; 

export default ReviewContainer;
