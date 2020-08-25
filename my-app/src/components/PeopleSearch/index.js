import React from 'react';
import Navigator from '../Navigator';

const People = ({ selectedPeople, type, toBackHandler }) => {
  return (
    <div className="people-search-container">
      <Navigator myBackHandler={toBackHandler} type={type} />
      <ul className="ul-container">
        {selectedPeople.map((person, index) => {
          return (
            // name, gender, age, eye color, hair color, films
            <div key={index}>
              <li>{`Name: ${person.name}`}</li>
              <li>{`Age: ${person.age}`}</li>
              <li>{`Gender: ${person.gender}`}</li>
              <li>{`Eye color: ${person.eye_color}`}</li>
              <li>{`Hair color: ${person.hair_color}`}</li>
              <li>{`Films: ${person.films}`}</li>
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
