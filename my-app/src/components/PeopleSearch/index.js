import React from 'react';
import Navigator from '../Navigator';

const People = ({ people, type, toBackHandler }) => {
  return (
    <div className="people-search-container">
      <Navigator myBackHandler={toBackHandler} type={type} />
      <ul className="ul-container">
        {people.map((person, index) => {
          return (
            // name, gender, age, eye color, hair color, films
            <div key={index}>
              <li>{person.name}</li>
              <li>{person.age}</li>
              <li>{person.gender}</li>
              <li>{person.eye_color}</li>
              <li>{person.hair_color}</li>
              <li>{person.films}</li>
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
