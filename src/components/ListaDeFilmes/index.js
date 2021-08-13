import React from 'react';
import './index.css';

import Film from '../Film';
import Navigator from '../Navigator';

const Lista = ({ filteredFilms, showFilmInfoHandler, toBackHandler, type }) => {
  return (
    <div className="lista-container">
      <Navigator myBackHandler={toBackHandler} type={type} />
      <ul className="ul-container">
        {filteredFilms.map((filme, index) => {
          return (
            <Film
              key={index}
              film={filme}
              showFilmInfoHandler={showFilmInfoHandler}
              myBackHandler={toBackHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Lista;
