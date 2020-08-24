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
  showFoundFilmInfo,
  movie,
  showFilmList,
  searchFilmForNameHandler,
  filmName,
  searchFilmForNameInputHandler,
  types,
}) => {
  // console.log(types);
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
          type={types.else_type}
        />
      )}
      {showFilmInfo && (
        <Movie
          movie={movie}
          toBackHandler={toBackHandler}
          type={types.movie_type}
        />
      )}
      {showFoundFilmInfo && (
        <Movie
          movie={movie}
          toBackHandler={toBackHandler}
          type={types.search_type}
        />
      )}
    </div>
  );
};

export default AppContent;
