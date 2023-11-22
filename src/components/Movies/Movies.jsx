import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import css from './Movies.module.css';

export const Movies = () => {
  const apiKey = '0ff4fc9e76b445d056f12e20a2c7c06f';
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );
      setMovies(response.data.results);
      navigate('/movies');
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div>
      <div className={css.movies_box}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.moviesFormInput}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className={css.moviesBtn} type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        <h2 className={css.moviesTittle}>Search Results:</h2>
        <ul className={css.listOfMovies}>
          {movies.map(movie => (
            <li className={css.moviesElement} key={movie.id}>
              <Link
                className={css.moviesLink}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { movies },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
