import React from "react";
import CharacterList from "../components/CharacterList";

const BASE_CLASS = "list-page";

const ListPage = () => {
  return (
    <div className={BASE_CLASS}>
      <CharacterList />
    </div>
  );
};

export default ListPage;
