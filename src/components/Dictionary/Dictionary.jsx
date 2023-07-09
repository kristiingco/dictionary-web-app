import { useState } from "react";
import Search from "../Search/Search";
import Word from "../Word/Word";

const Dictionary = () => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <Search setSearchWord={setSearchWord} />
      <Word word={searchWord} />
    </div>
  );
};

export default Dictionary;
