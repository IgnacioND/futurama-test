import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetails } from "../api";
import FavoriteButton from "./FavoriteButton";

const BASE_CLASS = "character-detail";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterDetails(id);
      setCharacter(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-content`}>
        <img
          src={character.images.main}
          width={96}
          alt={character.name.first}
        />
        <div className={`${BASE_CLASS}-info`}>
          <h2>{`${character.name.first} ${character.name.last}`}</h2>
          <p>{`${character.age} - ${character.gender} - ${character.species}`}</p>
          <p>{`${character.occupation}`}</p>
          <ul>
            {character.sayings.map((saying, index) => (
              <li key={index}>{saying}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${BASE_CLASS}-favorite`}>
        <FavoriteButton characterId={character.id} />
      </div>
    </div>
  );
};

export default CharacterDetail;
