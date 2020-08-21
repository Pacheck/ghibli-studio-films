import React from 'react';
import './index.css';

const Navigator = ({ myBackHandler, name }) => {
  return (
    <nav>
      <button onClick={myBackHandler}>Voltar</button>
      <span>{name ? name : 'Lista de Filmes'}</span>
    </nav>
  );
};

export default Navigator;
