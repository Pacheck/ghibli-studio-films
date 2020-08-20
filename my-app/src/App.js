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
  },
];

const App = () => {
  const [filteredFilms, setFilteredFilms] = useState(initiaState);
  const [films, setFilms] = useState(initiaState);
  const [showList, setShowList] = useState(false);
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
      };
    });

    setFilteredFilms(newFilteredFilms);
    setShowList(!showList);
    setShowFilmInfo(false);

    // console.log(newFilteredFilms);
  }

  function showFilmInfoHandler(id) {
    setShowFilmInfo(true);
    // setShowList(!showList);

    filteredFilms.map((film) => {
      if (id === film.id) {
        setMovie(film);
      }
    });
  }

  return (
    <AppContent
      listaFilmesHandler={listaFilmesHandler}
      filteredFilms={filteredFilms}
      showList={showList}
      showFilmInfoHandler={showFilmInfoHandler}
      showFilmInfo={showFilmInfo}
      movie={movie}
    />
  );
};

export default App;
