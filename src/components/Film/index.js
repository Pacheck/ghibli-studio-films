import React from 'react';
import './index.css';

const Film = ({ film, showFilmInfoHandler }) => {
  return (
    <li className="li-container" onClick={() => showFilmInfoHandler(film.id)}>
      {film.title}
    </li>
  );
};

export default Film;
