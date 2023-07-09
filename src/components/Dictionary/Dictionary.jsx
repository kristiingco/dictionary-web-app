import { useState } from "react";
import Search from "../Search/Search";
import Word from "../Word/Word";

const Dictionary = () => {
  let [searchWord, setSearchWord] = useState("hello");
  return (
    <div>
      <Search setSearchWord={setSearchWord} />
      <Word word={searchWord} />
    </div>
  );
};

export default Dictionary;
