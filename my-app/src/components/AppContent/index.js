import React from 'react';
import './index.css';

//Components
import Search from '../Search';
import ListaDeFilmes from '../ListaDeFilmes';
import Film from '../Film';

const AppContent = ({ filteredFilms, showList, listaFilmesHandler }) => {
  console.log(showList);
  return (
    <div className="app-content">
      <Search listaFilmesHandler={listaFilmesHandler} showList={showList} />

      {!!showList && <ListaDeFilmes filteredFilms={filteredFilms} />}
    </div>
  );
};

export default AppContent;
