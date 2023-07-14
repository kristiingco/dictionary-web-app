import { Container } from "semantic-ui-react";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";
import { WordProvider } from "./contexts/WordContext";
import { FontProvider } from "./contexts/FontContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <DarkModeProvider>
        <FontProvider>
          <WordProvider>
            <Container>
              <MenuBar />
              <Dictionary />
            </Container>
          </WordProvider>
        </FontProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
