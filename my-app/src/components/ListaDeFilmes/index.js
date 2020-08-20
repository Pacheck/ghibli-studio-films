import React from 'react';
import './index.css';

import Film from '../Film';

const Lista = ({
  filteredFilms,
  showFilmInfoHandler,
  backToFilmListHandler,
}) => {
  console.log(filteredFilms);
  return (
    <div className="lista-container">
      <nav>
        <button onClick={backToFilmListHandler}>Voltar</button>
        <span> Lista de filmes</span>
      </nav>
      <ul className="ul-container">
        {filteredFilms.map((filme, index) => {
          return (
            <Film
              key={index}
              film={filme}
              showFilmInfoHandler={showFilmInfoHandler}
              backToFilmListHandler={backToFilmListHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Lista;
