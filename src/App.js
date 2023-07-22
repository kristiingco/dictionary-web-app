import { useContext } from "react";

import { Container } from "semantic-ui-react";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";

import { DarkModeContext } from "./contexts/DarkModeContext";

import "./App.css";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Container className='container--main'>
        <MenuBar />
        <Dictionary />
      </Container>
    </div>
  );
}

export default App;
