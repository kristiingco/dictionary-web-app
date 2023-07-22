import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";
import { Checkbox, Menu, Dropdown } from "semantic-ui-react";

import { FontContext } from "../../contexts/FontContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

import "./MenuBar.scss";

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
    <div class='menu--main'>
      <Menu fluid secondary>
        <Logo />
        <Menu.Item position='right'>
          <Dropdown
            text={() => getFont()}
            className={`menu__font-dropdown ${currentFont} ${
              isDarkMode ? "dark-mode" : ""
            }`}
            icon={{
              name: "angle down",
              color: "purple",
            }}
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
          <div className='menu__divider'></div>
          <div className='menu__dark-mode-toggle-container'>
            <Checkbox
              toggle
              checked={isDarkMode}
              onClick={onClickDarkModeHandler}
              className='dark-mode-toggle-container__toggle'
            />
            <MoonIcon
              className={isDarkMode ? "moon-icon--dark" : "moon-icon"}
            />
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuBar;
