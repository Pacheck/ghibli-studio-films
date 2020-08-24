import React from 'react';
import './index.css';

import Navigator from '../Navigator';

const Movie = ({ movie, toBackHandler, type }) => {
  console.log(movie[0]);
  return (
    <div className="movie-container">
      <Navigator
        myBackHandler={(e) => toBackHandler(type)}
        name={movie.title}
      />
      <div className="movie-table">
        <span>Title: {movie[0].title}</span>
        <span>Director: {movie[0].director}</span>
        <span>Producer: {movie[0].producer}</span>
        <span> Release date: {movie[0].releaseDate}</span>
        <span>Rate score: {movie[0].rateScore}</span>
        <span>Description: {movie[0].description}</span>
      </div>
    </div>
  );
};

export default Movie;
