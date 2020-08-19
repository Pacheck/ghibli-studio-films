import React from 'react';
import './index.css';

import Film from '../Film';

const Lista = ({ filteredFilms }) => {
  console.log(filteredFilms);
  return (
    <div className="lista-container">
      <span> Lista de filmes</span>
      <ul className="ul-container">
        {filteredFilms.map((filme, index) => {
          return <Film key={index} film={filme} />;
        })}
      </ul>
    </div>
  );
};

export default Lista;
