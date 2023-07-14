import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Checkbox, Menu, Dropdown, Icon, Divider } from "semantic-ui-react";

import "./MenuBar.scss";
import { FontContext } from "../../contexts/FontContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const MenuBar = () => {
  const { currentFont, setCurrentFont } = useContext(FontContext);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const getFont = () => {
    if (currentFont === "sans-serif") return "Sans Serif";
    else if (currentFont === "serif") return "Serif";
    else return "Mono";
  };

  const onClickDarkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Menu fluid secondary>
      <Logo />
      {/* Font Menu */}
      <Menu.Item position='right'>
        <Dropdown
          text={() => getFont()}
          className={`menu__font-dropdown ${currentFont}`}
        >
          <Dropdown.Menu>
            <Dropdown.Item
              text='Sans Serif'
              active={currentFont === "sans-serif"}
              onClick={() => setCurrentFont("sans-serif")}
              className='sans-serif'
            />
            <Dropdown.Item
              text='Serif'
              active={currentFont === "serif"}
              onClick={() => setCurrentFont("serif")}
              className='serif'
            />
            <Dropdown.Item
              text='Mono'
              active={currentFont === "mono"}
              onClick={() => setCurrentFont("mono")}
              className='mono'
            />
          </Dropdown.Menu>
        </Dropdown>
        <Checkbox
          toggle
          checked={isDarkMode}
          onClick={onClickDarkModeHandler}
        />
        <Icon name='moon outline' size='large' />
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
