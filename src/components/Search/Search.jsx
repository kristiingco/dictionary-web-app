import { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";

const Search = ({ searchWord, setSearchWord, setWordInfo }) => {
  const [input, setInput] = useState("");

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

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setSearchWord(input);
  };

  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      setSearchWord(input);
    }
  };

  return (
    <div>
      <Input
        icon={{
          name: "search",
          link: true,
          onClick: onClickHandler,
        }}
        placeholder='Search for any word...'
        fluid
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
    </div>
  );
};

export default Search;
