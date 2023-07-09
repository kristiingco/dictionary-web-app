import React from "react";
import { Input } from "semantic-ui-react";

const Search = ({ setSearchWord }) => {
  const searchHandler = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <div>
      <Input
        icon='search'
        placeholder='Search for any word...'
        fluid
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
