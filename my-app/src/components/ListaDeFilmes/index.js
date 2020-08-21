import React from 'react';
import './index.css';

import Film from '../Film';
import Navigator from '../Navigator';

const Lista = ({
  filteredFilms,
  showFilmInfoHandler,
  backToFilmListHandler,
}) => {
  console.log(filteredFilms);
  return (
    <div className="lista-container">
      <Navigator backToFilmListHandler={backToFilmListHandler} />
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
