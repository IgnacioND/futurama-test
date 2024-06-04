import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "../api";

const BASE_CLASS = "character-list";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={BASE_CLASS}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

CharacterList.propTypes = {};

export default CharacterList;
