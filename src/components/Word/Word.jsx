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

import "./Word.scss";

const Word = () => {
  const { wordInfo, wordExists, setSearchWord } = useContext(WordContext);
  const { word, phonetic, phonetics, meanings, sourceUrls } = wordInfo;

  let audio = null;

  if (phonetics && phonetics[0].audio) {
    audio = new Audio(phonetics[0].audio);
  }

  const onPlay = () => {
    if (audio) {
      audio.play();
    }
  };
  return (
    <Container fluid>
      {wordExists ? (
        <div>
          <Grid columns={2} fluid>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment basic>
                  <Header as='h1'>{word}</Header>
                </Segment>

                <Segment basic>{phonetic && <span>{phonetic}</span>}</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment textAlign='right' basic>
                  <Button
                    circular
                    icon={{ name: "play", color: "purple" }}
                    size='massive'
                    onClick={onPlay}
                  />
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
                  {synonyms && synonyms.length > 0 && (
                    <div>
                      Synonyms:
                      {synonyms.map((synonym, idx) => {
                        return (
                          <span className='word__definition__synonym'>
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
          {sourceUrls && (
            <span>
              Source: <a href={sourceUrls[0]}>{sourceUrls[0]}</a>
            </span>
          )}
        </div>
      ) : (
        <div>
          <Header as='h2'>{wordInfo.title}</Header>
          <span>{wordInfo.resolution}</span>
        </div>
      )}
    </Container>
  );
};

export default Word;
