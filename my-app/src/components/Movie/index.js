import React from 'react';
import './index.css';

import Navigator from '../Navigator';

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
      <Navigator />
      <table className="movie-table">
        <tr>
          <td>Title: {movie.title}</td>
          <td>Producer: {movie.producer}</td>
          <td>Release date: {movie.releaseDate}</td>
          <td>Rate score: {movie.rateScore}</td>
        </tr>
      </table>
    </div>
  );
};

export default Movie;
