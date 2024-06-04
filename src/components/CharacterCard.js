import React from "react";

const BASE_CLASS = "character-card";

const CharacterCard = ({ character }) => {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-content`}>
        <h2>{`${character.name.first} ${character.name.last}`}</h2>
        <p>{`${character.age} - ${character.gender} - ${character.species}`}</p>
        <p>{`${character.occupation}`}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
