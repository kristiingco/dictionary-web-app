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
  const { wordInfo, setSearchWord } = useContext(WordContext);
  const { word, phonetic, meanings, sourceUrls } = wordInfo;
  return (
    <Container fluid>
      <Grid columns={2} fluid>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic>
              <Header as='h1'>{word}</Header>
            </Segment>

            <Segment basic>
              <span>{phonetic}</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign='right' basic>
              <Button circular icon='play' size='massive' />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {meanings &&
        meanings.map(({ partOfSpeech, definitions, synonyms }, idx) => {
          return (
            <div key={idx}>
              <Divider horizontal>{partOfSpeech}</Divider>
              <span>Meaning</span>
              <ul>
                {definitions &&
                  definitions.map(({ definition }) => {
                    return <li>{definition}</li>;
                  })}
              </ul>
              {synonyms && (
                <div>
                  Synonyms:
                  {synonyms.map((synonym, idx) => {
                    return (
                      <span onClick={() => setSearchWord(synonym)}>
                        {synonym}
                        {idx !== synonyms.length - 1 ? "," : ""}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      <Divider />
      {sourceUrls && <span>Source: {sourceUrls[0]}</span>}
    </Container>
  );
};

export default Word;
