import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

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
      <div className={`${BASE_CLASS}-favorite`}>
        <FavoriteButton characterId={character.id} />
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    age: PropTypes.number,
    gender: PropTypes.string,
    id: PropTypes.number,
    images: PropTypes.shape({
      main: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    species: PropTypes.string,
    occupation: PropTypes.string,
  }),
};

export default CharacterCard;
