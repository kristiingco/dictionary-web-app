import { Container } from "semantic-ui-react";
import Dictionary from "./components/Dictionary/Dictionary";
import MenuBar from "./components/MenuBar/MenuBar";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Container className='container--main'>
        <MenuBar />
        <Dictionary />
      </Container>
    </div>
  );
}

export default App;
