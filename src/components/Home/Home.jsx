import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import css from './Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const apiKey = '0ff4fc9e76b445d056f12e20a2c7c06f';

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <div className={css.trending_box}>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id} className={css.movie_item}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
