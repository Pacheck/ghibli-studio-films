import React from 'react';
import './index.css';

const Navigator = ({ backToFilmListHandler }) => {
  return (
    <nav>
      <button onClick={backToFilmListHandler}>Voltar</button>
      <span> Lista de filmes</span>
    </nav>
  );
};

export default Navigator;
