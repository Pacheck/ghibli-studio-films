import React from 'react';
import './index.css';

//Components
import Search from '../Search';
import ListaDeFilmes from '../ListaDeFilmes';
import Movie from '../Movie';

const AppContent = ({
  toBackHandler,
  listaFilmesHandler,
  showFilmInfoHandler,
  filteredFilms,
  showSearch,
  showFilmInfo,
  movie,
  showFilmList,
  searchFilmForNameHandler,
  filmName,
  searchFilmForNameInputHandler,
}) => {
  return (
    <div className="app-content">
      {showSearch && (
        <Search
          filmName={filmName}
          listaFilmesHandler={listaFilmesHandler}
          showSearch={showSearch}
          searchFilmForNameHandler={searchFilmForNameHandler}
          searchFilmForNameInputHandler={searchFilmForNameInputHandler}
        />
      )}

      {showFilmList && (
        <ListaDeFilmes
          filteredFilms={filteredFilms}
          showFilmInfoHandler={showFilmInfoHandler}
          showSearch={showSearch}
          toBackHandler={toBackHandler}
        />
      )}
      {showFilmInfo && <Movie movie={movie} toBackHandler={toBackHandler} />}
    </div>
  );
};

export default AppContent;
