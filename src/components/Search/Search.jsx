import { useState, useContext } from "react";
import { Input } from "semantic-ui-react";
import { WordContext } from "../../contexts/WordContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [hasError, setHasError] = useState(false);

  const { setSearchWord } = useContext(WordContext);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (input === "") setHasError(true);
    else {
      setHasError(false);
      setSearchWord(input);
    }
  };

  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      if (input === "") setHasError(true);
      else {
        setHasError(false);
        setSearchWord(input);
      }
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
        error={hasError}
      />
      {hasError && <span>Whoops, can't be empty...</span>}
    </div>
  );
};

export default Search;
