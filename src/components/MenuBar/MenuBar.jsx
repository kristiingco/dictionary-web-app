import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Menu, Dropdown } from "semantic-ui-react";

const MenuBar = () => {
  return (
    <Menu fluid secondary>
      <Logo />
      {/* Font Menu */}
      <Menu.Item position='right'>
        <Dropdown />
        <Checkbox toggle />
      </Menu.Item>

      {/* Dark Mode */}
    </Menu>
  );
};

export default MenuBar;
