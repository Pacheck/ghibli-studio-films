import React from 'react';
import './index.css';

const Film = ({ film }) => {
  return (
    <li className="li-container">
      <a href="#">{film.title}</a>
    </li>
  );
};

export default Film;
