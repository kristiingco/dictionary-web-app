import { useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";
import { WordProvider } from "./contexts/WordContext";
import { FontProvider } from "./contexts/FontContext";

function App() {
  return (
    <Container className='App'>
      <FontProvider>
        <WordProvider>
          <MenuBar />
          <Dictionary />
        </WordProvider>
      </FontProvider>
    </Container>
  );
}

export default App;
