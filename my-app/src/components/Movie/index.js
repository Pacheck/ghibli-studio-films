import React from 'react';
import './index.css';

import Navigator from '../Navigator';

const Movie = ({ movie, toBackHandler, type }) => {
  return (
    <div className="movie-container">
      <Navigator
        myBackHandler={(e) => toBackHandler(type)}
        name={movie.title}
      />
      <div className="movie-table">
        <span>Title: {movie.title}</span>
        <span>Director: {movie.director}</span>
        <span>Producer: {movie.producer}</span>
        <span> Release date: {movie.releaseDate}</span>
        <span>Rate score: {movie.rateScore}</span>
        <span>Description: {movie.description}</span>
      </div>
    </div>
  );
};

export default Movie;
