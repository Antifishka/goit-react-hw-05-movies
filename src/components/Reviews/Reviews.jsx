import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../helpers/api";
import { ReviewsList, ReviewsItem, ReviewsTitle } from "./Reviews.styled";

export const Reviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews();

    async function getMovieReviews() {
      try {
        const fetchReviews = await API.fetchMovieReviews(movieId);
        console.log(fetchReviews);
        setReviews(fetchReviews);

      } catch (error) {
        console.log(error);
      };
    };
  }, [movieId]);

  return (
    <>
      {reviews 
        ? <ReviewsList>
            {reviews.map(({ id, author, content }) => 
              <ReviewsItem key={id}>
                <ReviewsTitle>Author: {author}</ReviewsTitle>  
                <p>{content}</p>
              </ReviewsItem>)} 
          </ReviewsList >
        : <div>We don't have any reviews for this movie</div>}
    </>
    
    
  );
};