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
    console.log(newFilteredFilms);
  }

  return (
    <AppContent
      listaFilmesHandler={listaFilmesHandler}
      filteredFilms={filteredFilms}
      showList={showList}
    />
  );
};

export default App;
