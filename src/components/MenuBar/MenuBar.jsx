import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Container, Dropdown } from "semantic-ui-react";

const MenuBar = () => {
  return (
    <div>
      <Logo />
      {/* Font Menu */}
      <Container position='right'>
        <Dropdown />
        <Checkbox toggle />
      </Container>

      {/* Dark Mode */}
    </div>
  );
};

export default MenuBar;
