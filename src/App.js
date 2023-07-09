import { Container } from "semantic-ui-react";
import "./App.css";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";
import { WordProvider } from "./contexts/WordContext";

function App() {
  return (
    <Container className='App'>
      <WordProvider>
        <MenuBar />
        <Dictionary />
      </WordProvider>
    </Container>
  );
}

export default App;
