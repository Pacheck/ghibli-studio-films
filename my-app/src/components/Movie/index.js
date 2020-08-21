import React from 'react';
import './index.css';

import Navigator from '../Navigator';

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
      <Navigator />
      <table className="movie-table">
        <tr>
          <td>{movie.title}</td>
          <td>{movie.producer}</td>
          <td>{movie.releaseDate}</td>
          <td>{movie.rateScore}</td>
        </tr>
      </table>
    </div>
  );
};

export default Movie;
