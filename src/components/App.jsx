import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MoviesDetails } from './MovieDetails/MovieDetails';

import css from './App.module.css';
import styled from 'styled-components';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: green;
  }
`;

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.homeNav}>
          <StyledLink className={css.homeLink} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.homeLink} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
