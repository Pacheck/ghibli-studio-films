import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Components
import AppContent from './components/AppContent';

const initiaState = [];

const App = () => {
  const [films, setFilms] = useState(initiaState);

  useEffect(() => {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then((res) => setFilms(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  console.log(films);

  // Methods

  return <AppContent />;
};

export default App;
