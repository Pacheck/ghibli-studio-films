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
  const [filteredFilms, setFilteredFilms] = useState(initiaState);
  const [films, setFilms] = useState(initiaState);
  const [showSearch, setshowSearch] = useState(true);
  const [showFilmList, setShowFilmList] = useState(false);
  const [showFilmInfo, setShowFilmInfo] = useState(false);
  const [movie, setMovie] = useState(initiaState);

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
    console.log(type);
    if (type === 'movie') {
      setShowFilmList(true);
      setShowFilmInfo(false);
      setshowSearch(false);
    } else {
      setshowSearch(true);
      setShowFilmList(false);
    }
  }

  return (
    <AppContent
      listaFilmesHandler={listaFilmesHandler}
      showFilmInfoHandler={showFilmInfoHandler}
      toBackHandler={toBackHandler}
      filteredFilms={filteredFilms}
      showSearch={showSearch}
      showFilmInfo={showFilmInfo}
      movie={movie}
      showFilmList={showFilmList}
    />
  );
};

export default App;
