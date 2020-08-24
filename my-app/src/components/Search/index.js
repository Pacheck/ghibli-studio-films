import React from 'react';
import './index.css';

const Search = ({
  listaFilmesHandler,
  showList,
  searchFilmForNameHandler,
  filmName,
  searchFilmForNameInputHandler,
}) => {
  return (
    <div className="search-container">
      <form className="search-all-list" onSubmit={listaFilmesHandler}>
        <button type="submit">
          {!showList ? 'Listar todos os filmes' : 'Ocultar listagem de filmes'}
        </button>
      </form>
      <form className="search-for-name" onSubmit={searchFilmForNameHandler}>
        <button type="submit" disabled={!filmName}>
          Pesquisar por Nome
        </button>
        <input
          placeholder="Digite o nome do filme"
          value={filmName}
          onChange={searchFilmForNameInputHandler}
        />
      </form>

      {/* ADICIONAR ULTIMO FILTER ! */}
    </div>
  );
};

export default Search;
