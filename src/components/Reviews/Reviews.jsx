import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';

import css from './Reviews.module.css';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const id = useOutletContext();
  const apiKey = '0ff4fc9e76b445d056f12e20a2c7c06f';

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
        );
        
        setMovieReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <div>
      <div className={css.reviewsBox}>
        <h2 className={css.reviewsTittle}>Reviews</h2>
      </div>
      <div>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <div key={review.id}>
              <ul className={css.listOfReviews}>
                <li className={css.reviewElement}>
                  <p className={css.authorName}>{review.author}</p>
                  <p className={css.reviewContent}>{review.content}</p>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <div>
            <p className={css.noReviews}>No reviews</p>
          </div>
        )}
      </div>
    </div>
  );
};
