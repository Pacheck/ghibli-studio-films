import React from 'react';
import './index.css';

const Search = ({ listaFilmesHandler, showList }) => {
  return (
    <form className="search-container" onSubmit={listaFilmesHandler}>
      <button type="submit" className="listar-filmes">
        {!showList ? 'Listar todos os filmes' : 'Ocultar listagem de filmes'}
      </button>
    </form>
  );
};

export default Search;
