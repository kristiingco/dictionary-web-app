import { useState } from "react";
import Search from "../Search/Search";
import Word from "../Word/Word";

const Dictionary = () => {
  const [searchWord, setSearchWord] = useState("");
  const [wordInfo, setWordInfo] = useState({});
  return (
    <div>
      <Search
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setWordInfo={setWordInfo}
      />
      <Word wordInfo={wordInfo} />
    </div>
  );
};

export default Dictionary;
