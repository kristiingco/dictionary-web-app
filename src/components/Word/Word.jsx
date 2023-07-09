import { useContext } from "react";
import {
  Header,
  Button,
  Divider,
  Container,
  Grid,
  Segment,
} from "semantic-ui-react";
import { WordContext } from "../../contexts/WordContext";

const Word = () => {
  const { wordInfo } = useContext(WordContext);
  const { word, phonetic, meanings, sourceUrls } = wordInfo;
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Header as='h1'>{word}</Header>
            </Segment>

            <Segment>
              <span>{phonetic}</span>
            </Segment>
          </Grid.Column>
          <Segment>
            <Button circular icon='play' size='massive' />
          </Segment>
        </Grid.Row>
      </Grid>
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
      {sourceUrls && <span>Source: {sourceUrls[0]}</span>}
    </Container>
  );
};

export default Word;
