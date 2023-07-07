import { Container } from "semantic-ui-react";
import "./App.css";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <Container className='App'>
      <MenuBar />
      <Dictionary />
    </Container>
  );
}

export default App;
