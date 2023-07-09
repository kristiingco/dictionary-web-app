import { useState } from "react";
import Search from "../Search/Search";
import Word from "../Word/Word";

const Dictionary = () => {
  return (
    <div>
      <Search />
      <Word />
    </div>
  );
};

export default Dictionary;
