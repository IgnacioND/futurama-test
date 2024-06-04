import React from "react";
import CharacterDetail from "../components/CharacterDetail";
import CharacterList from "../components/CharacterList";
import { useMediaQuery } from "react-responsive";

const BASE_CLASS = "detail-page";

const DetailPage = () => {
  const isLargerThanMobile = useMediaQuery({ query: `(min-width: 768px)` });
  return (
    <div className={BASE_CLASS}>
      {isLargerThanMobile ? (
        <CharacterList />
      ) : (
        <button
          className={`${BASE_CLASS}-button`}
          onClick={() => (window.location.href = "/")}
        >
          Homepage
        </button>
      )}
      <CharacterDetail />
    </div>
  );
};

export default DetailPage;
