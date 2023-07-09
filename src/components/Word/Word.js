import React from "react";
import { Header, Button, Divider, Container } from "semantic-ui-react";

const Word = ({ word }) => {
  return (
    <Container>
      <Header as='h1'>{word}</Header>
      <span>pronunciation</span>
      <Button circular icon='play' />
      <Divider horizontal>noun</Divider>
      <span>Meaning</span>
      <ol>
        <li>Definitions here</li>
      </ol>
    </Container>
  );
};

export default Word;
