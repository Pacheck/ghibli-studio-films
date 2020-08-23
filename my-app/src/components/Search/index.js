import React from 'react';
import './index.css';

const Search = ({ listaFilmesHandler, showList, searchFilmForNameHandler }) => {
  return (
    <div className="search-container">
      <form className="search-all-list" onSubmit={listaFilmesHandler}>
        <button type="submit">
          {!showList ? 'Listar todos os filmes' : 'Ocultar listagem de filmes'}
        </button>
      </form>
      <form className="search-for-name" onSubmit={searchFilmForNameHandler}>
        <button type="submit">Pesquisar por Nome</button>
        <input placeholder="Digite o nome do filme" />
      </form>
    </div>
  );
};

export default Search;
