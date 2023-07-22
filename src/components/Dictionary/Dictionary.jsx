import { useContext } from "react";

import Search from "../Search/Search";
import Word from "../Word/Word";

import { FontContext } from "../../contexts/FontContext";

const Dictionary = () => {
  const { currentFont } = useContext(FontContext);
  return (
    <div className={currentFont}>
      <Search />
      <Word />
    </div>
  );
};

export default Dictionary;
