import { useContext } from "react";
import { FontContext } from "../../contexts/FontContext";
import Search from "../Search/Search";
import Word from "../Word/Word";

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
