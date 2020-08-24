import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Components
import AppContent from './components/AppContent';

const initiaState = [
  {
    id: '',
    producer: '',
    releaseDate: '',
    rateScore: '',
    title: '',
    description: '',
    director: '',
  },
];

const App = () => {
  const [films, setFilms] = useState(initiaState);
  const [filteredFilms, setFilteredFilms] = useState(initiaState);
  const [filmName, setFilmName] = useState('');
  const [movie, setMovie] = useState(initiaState);
  const [showSearch, setshowSearch] = useState(true);
  const [showFilmInfo, setShowFilmInfo] = useState(false);
  const [showFilmList, setShowFilmList] = useState(false);
  const [showFoundFilmInfo, setShowFoundFilmInfo] = useState(false);
  const [types, setTypes] = useState({
    movie_type: 'movie',
    search_type: 'search',
    else_type: 'else',
  });

  useEffect(() => {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then((res) => setFilms([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  // Methods

  function listaFilmesHandler(e) {
    e.preventDefault();

    const newFilteredFilms = films.map((film) => {
      return {
        id: film.id,
        title: film.title,
        producer: film.producer,
        releaseDate: film.release_date,
        rateScore: film.rt_score,
        description: film.description,
        director: film.director,
      };
    });

    setFilteredFilms(newFilteredFilms);
    setshowSearch(!showSearch);
    setShowFilmList(!showFilmList);
  }

  function showFilmInfoHandler(id) {
    setShowFilmInfo(true);
    setShowFilmList(!showFilmList);

    filteredFilms.map((film) => {
      if (id === film.id) {
        return setMovie(film);
      }
      return film;
    });
  }

  function toBackHandler(type) {
    if (type === 'movie') {
      setShowFilmList(true);
      setShowFilmInfo(false);
      setshowSearch(false);
    } else if (type === 'search') {
      setshowSearch(true);
      setShowFoundFilmInfo(false);
      setShowFilmList(false);
      console.log('search type');
    } else {
      setshowSearch(true);
      setShowFilmList(false);
    }
  }

  function searchFilmForNameHandler(e) {
    e.preventDefault();

    const foundFilm = films.filter((film) => {
      if (film.title.toUpperCase() === filmName.toUpperCase()) {
        setShowFoundFilmInfo(true);
        setFilmName('');
        setshowSearch(false);
        return film;
      }
      return null;
    });

    console.log(foundFilm);
  }

  function searchFilmForNameInputHandler(e) {
    const userInput = e.target.value;
    setFilmName(userInput);
  }

  return (
    <AppContent
      listaFilmesHandler={listaFilmesHandler}
      showFilmInfoHandler={showFilmInfoHandler}
      toBackHandler={toBackHandler}
      filteredFilms={filteredFilms}
      showSearch={showSearch}
      showFilmInfo={showFilmInfo}
      showFoundFilmInfo={showFoundFilmInfo}
      movie={movie}
      showFilmList={showFilmList}
      searchFilmForNameHandler={searchFilmForNameHandler}
      filmName={filmName}
      searchFilmForNameInputHandler={searchFilmForNameInputHandler}
      types={types}
    />
  );
};

export default App;
