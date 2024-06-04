import React from "react";
import { Link } from "react-router-dom";

const BASE_CLASS = "character-card";

const CharacterCard = ({ character }) => {
  return (
    <div className={BASE_CLASS}>
      <Link to={`/character/${character.id}`}>
        <div className={`${BASE_CLASS}-content`}>
          <img
            src={character.images.main}
            width={48}
            alt={character.name.first}
          />
          <div className={`${BASE_CLASS}-info`}>
            <h2>{`${character.name.first} ${character.name.last}`}</h2>
            <p>{`${character.age} - ${character.gender} - ${character.species}`}</p>
            <p>{`${character.occupation}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
