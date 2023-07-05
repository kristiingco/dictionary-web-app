import { useState } from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Dropdown } from "semantic-ui-react";

const MenuBar = () => {
  return (
    <div>
      <Logo />
      {/* Font Menu */}
      <Dropdown />
      {/* Dark Mode */}
      <Checkbox toggle />
    </div>
  );
};

export default MenuBar;
