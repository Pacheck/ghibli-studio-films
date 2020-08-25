import React from 'react';
import './index.css';

const Search = ({
  listaFilmesHandler,
  showList,
  searchFilmForNameHandler,
  filmName,
  searchFilmForNameInputHandler,
  peopleNameHandler,
  peopleName,
  showPeopleHandler,
}) => {
  return (
    <div className="search-container">
      <div className="search-all-list">
        <button onClick={listaFilmesHandler}>
          {!showList ? 'Listar todos os filmes' : 'Ocultar listagem de filmes'}
        </button>
      </div>
      <div className="search-for-name">
        <button onClick={searchFilmForNameHandler} disabled={!filmName}>
          Pesquisar por Nome
        </button>
        <input
          placeholder="Digite o nome do filme"
          value={filmName}
          onChange={searchFilmForNameInputHandler}
        />
      </div>
      <div className="search-people-container">
        <button onClick={showPeopleHandler} disabled={!peopleName}>
          Pesquisar pessoa
        </button>
        <input
          placeholder="Digite o nome da pessoa"
          value={peopleName}
          onChange={peopleNameHandler}
        />
      </div>
    </div>
  );
};

export default Search;
