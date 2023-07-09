import { useState } from "react";
import { Input } from "semantic-ui-react";

const Search = ({ setSearchWord }) => {
  const [input, setInput] = useState("");

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
