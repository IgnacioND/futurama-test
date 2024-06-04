import React from "react";
import CharacterDetail from "../components/CharacterDetail";

const BASE_CLASS = "detail-page";

const DetailPage = () => {
  return (
    <div className={BASE_CLASS}>
      <CharacterDetail />
    </div>
  );
};

export default DetailPage;
