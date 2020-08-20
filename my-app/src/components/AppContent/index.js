import React from 'react';
import './index.css';

//Components
import Search from '../Search';
import ListaDeFilmes from '../ListaDeFilmes';
import Movie from '../Movie';

const AppContent = ({
  filteredFilms,
  showList,
  listaFilmesHandler,
  showFilmInfoHandler,
  showFilmInfo,
  movie,
  backToFilmListHandler,
}) => {
  console.log(showList);
  return (
    <div className="app-content">
      {!showList && (
        <Search listaFilmesHandler={listaFilmesHandler} showList={showList} />
      )}

      {!!showList && (
        <ListaDeFilmes
          filteredFilms={filteredFilms}
          showFilmInfoHandler={showFilmInfoHandler}
          showList={showList}
          backToFilmListHandler={backToFilmListHandler}
        />
      )}
      {!!showFilmInfo && <Movie movie={movie} />}
    </div>
  );
};

export default AppContent;
