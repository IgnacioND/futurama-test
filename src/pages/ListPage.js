import React, { useEffect, useState } from "react";
import { getCharacters } from "../api";

const BASE_CLASS = "list-page";

const ListPage = () => {
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

  return <div className={BASE_CLASS}>{characters[0].name.first}</div>;
};

export default ListPage;
