import React from 'react';
import './index.css';

const Film = ({ film }) => {
  return (
    <li className="li-container">
      <span>{film.title}</span>
    </li>
  );
};

export default Film;
