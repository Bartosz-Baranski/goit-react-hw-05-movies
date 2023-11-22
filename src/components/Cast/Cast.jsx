import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import { BsPersonCircle } from 'react-icons/bs';

import css from './Cast.module.css';

export const Cast = () => {
  const [movieActors, setMovieActors] = useState([]);
  const id = useOutletContext();
  const apiKey = '0ff4fc9e76b445d056f12e20a2c7c06f';

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setMovieActors(data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieCredits();
  }, [id]);

  return (
    <div>
      <div className={css.castTittleBox}>
        <h2 className={css.castTittle}>Cast</h2>
      </div>
      <div className={css.actorsBox}>
        {movieActors.map(actor => (
          <div key={actor.credit_id}>
            {actor.profile_path ? (
              <ul className={css.listOfActors}>
                <li className={css.movieElement} key={actor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <p className={css.actorName}>{actor.name}</p>
                </li>
              </ul>
            ) : (
              <ul className={css.listOfActors}>
                <li className={css.movieElement} key={actor.id}>
                  <div className={css.emptyImage}>
                    <BsPersonCircle size="150px" />
                  </div>
                  <div>
                    <p className={css.actorName}>{actor.name}</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
