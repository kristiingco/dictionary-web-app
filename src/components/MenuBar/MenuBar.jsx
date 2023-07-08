import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Menu, Dropdown, Icon, Divider } from "semantic-ui-react";

import "./MenuBar.scss";

const MenuBar = () => {
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  return (
    <Menu fluid secondary>
      <Logo />
      {/* Font Menu */}
      <Menu.Item position='right'>
        <Dropdown text={currentFont} className='menu__font-dropdown'>
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
        <Icon name='moon outline' size='large' />
      </Menu.Item>

      {/* Dark Mode */}
    </Menu>
  );
};

export default MenuBar;
