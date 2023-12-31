import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useParams, useLocation, Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import css from './MovieDetails.module.css';

const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: green;
  }
`;

export const MoviesDetails = () => {
  const { id: movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const apiKey = '0ff4fc9e76b445d056f12e20a2c7c06f';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const getYearFromDate = dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <div>
      <div>
        <button className={css.goBackBtn} onClick={goBack}>
          Go Back
        </button>
      </div>
      <div className={css.movieDetailsBox}>
        <div>
          {movieDetails && (
            <img
              className={css.moviePoster}
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
        </div>

        {movieDetails ? (
          <div className={css.movieInfo}>
            <h1>
              {movieDetails.title} ({getYearFromDate(movieDetails.release_date)}
              )
            </h1>
            <p>Popularity: {movieDetails.popularity}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Geners</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {location.state && location.state.movies && (
        <div>
          <h2>Search Results:</h2>
          <ul className={css.listOfMovies}>
            {location.state.movies.map(movie => (
              <li className={css.movieElement} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className={css.homeNav}>
        <ul className={css.addInfoBox}>
          <li>
            <StyledLink
              className={css.homeLink}
              to={{
                pathname: `/movies/${movieId}/cast`,
              }}
            >
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink
              className={css.homeLink}
              to={{
                pathname: `/movies/${movieId}/reviews`,
              }}
            >
              Reviews
            </StyledLink>
          </li>
        </ul>
      </nav>
      <Outlet context={movieId} />
    </div>
  );
};
