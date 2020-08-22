import React from 'react';
import './index.css';

const Search = ({ listaFilmesHandler, showList }) => {
  return (
    <div className="search-container">
      <form className="search-all-list" onSubmit={listaFilmesHandler}>
        <button type="submit">
          {!showList ? 'Listar todos os filmes' : 'Ocultar listagem de filmes'}
        </button>
      </form>
      <form className="search-for-name">
        <button>Pesquisar por Nome</button>
        <input />
      </form>
    </div>
  );
};

export default Search;
