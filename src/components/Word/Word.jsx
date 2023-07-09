import { Header, Button, Divider, Container } from "semantic-ui-react";

const Word = ({ wordInfo }) => {
  const { word, phonetic, meanings, sourceUrls } = wordInfo;
  return (
    <Container>
      <Header as='h1'>{word}</Header>
      <span>{phonetic}</span>
      <Button circular icon='play' />
      {meanings &&
        meanings.map(({ partOfSpeech, definitions }, idx) => {
          return (
            <div key={idx}>
              <Divider horizontal>{partOfSpeech}</Divider>
              <span>Meaning</span>
              <ul>
                {definitions.map(({ definition }) => {
                  return <li>{definition}</li>;
                })}
              </ul>
            </div>
          );
        })}
      <Divider />
      <span>Source: {sourceUrls[0]}</span>
    </Container>
  );
};

export default Word;
