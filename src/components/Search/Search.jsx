import { useState, useContext } from "react";
import { Input } from "semantic-ui-react";
import { WordContext } from "../../contexts/WordContext";

const Search = () => {
  const [input, setInput] = useState("");

  const { setSearchWord } = useContext(WordContext);

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
          color: "purple",
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
