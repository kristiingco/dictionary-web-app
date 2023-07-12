import { createContext, useState, useEffect } from "react";

export const WordContext = createContext({
  searchWord: "",
  setSearchWord: () => null,
  wordInfo: {},
  setWordInfo: () => null,
  wordExists: true,
  checkIfSynonymExists: () => null,
});

export const WordProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("");
  const [wordInfo, setWordInfo] = useState({});
  const [wordExists, setWordExists] = useState(true);

  const searchWordChangeHandler = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.resolution) {
          setWordExists(false);
          setWordInfo(data);
        } else {
          setWordExists(true);
          setWordInfo(data[0]);
          console.log(data[0]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    searchWordChangeHandler();
    console.log(wordExists);
  }, [searchWord]);

  return (
    <WordContext.Provider
      value={{
        searchWord,
        setSearchWord,
        wordInfo,
        setWordInfo,
        wordExists,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
