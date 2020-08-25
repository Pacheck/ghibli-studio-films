import React from 'react';
import Navigator from '../Navigator';

const People = ({ people, type, toBackHandler }) => {
  return (
    <div className="people-search-container">
      <Navigator myBackHandler={toBackHandler} type={type} />
      <ul className="ul-container">
        {people.map((person, index) => {
          return (
            <div key={index}>
              <li>{person.name}</li>
              <li></li>
              <li></li>
              <li></li>
            </div>
            // <Film
            //   key={index}
            //   film={filme}
            //   showFilmInfoHandler={showFilmInfoHandler}
            //   myBackHandler={toBackHandler}
            // />
          );
        })}
      </ul>
    </div>
  );
};

export default People;
