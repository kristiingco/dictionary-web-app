import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Menu, Dropdown } from "semantic-ui-react";

const MenuBar = () => {
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  return (
    <Menu fluid secondary>
      <Logo />
      {/* Font Menu */}
      <Menu.Item position='right'>
        <Dropdown text={currentFont}>
          <Dropdown.Menu>
            <Dropdown.Item
              text='Sans Serif'
              active={currentFont === "Sans Serif"}
              onClick={() => setCurrentFont("Sans Serif")}
            />
            <Dropdown.Item
              text='Serif'
              active={currentFont === "Serif"}
              onClick={() => setCurrentFont("Serif")}
            />
            <Dropdown.Item
              text='Mono'
              active={currentFont === "Mono"}
              onClick={() => setCurrentFont("Mono")}
            />
          </Dropdown.Menu>
        </Dropdown>
        <Checkbox toggle />
      </Menu.Item>

      {/* Dark Mode */}
    </Menu>
  );
};

export default MenuBar;
