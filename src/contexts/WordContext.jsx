import { createContext, useState, useEffect } from "react";

export const WordContext = createContext({
  searchWord: "",
  setSearchWord: () => null,
  wordInfo: {},
  setWordInfo: () => null,
});

export const WordProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("hello");
  const [wordInfo, setWordInfo] = useState({});

  useEffect(() => {
    const searchWordChangeHandler = () => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then((response) => response.json())
        .then((data) => {
          setWordInfo(data[0]);
          console.log(data[0]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    searchWordChangeHandler();
  }, [searchWord]);

  return (
    <WordContext.Provider
      value={{ searchWord, setSearchWord, wordInfo, setWordInfo }}
    >
      {children}
    </WordContext.Provider>
  );
};
