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
import { FontContext } from "../../contexts/FontContext";

import { ReactComponent as NewWindowIcon } from "../../assets/images/icon-new-window.svg";

const Word = () => {
  const { wordInfo, wordExists } = useContext(WordContext);
  const { currentFont } = useContext(FontContext);
  const { word, phonetic, phonetics, meanings, sourceUrls } = wordInfo;

  let audio = null;

  if (phonetics && phonetics.length > 0 && phonetics[0].audio) {
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
                  <Header as='h1' className={currentFont}>
                    {word}
                  </Header>
                </Segment>

                <Segment basic>{phonetic && <span>{phonetic}</span>}</Segment>
              </Grid.Column>
              <Grid.Column>
                {audio && (
                  <Segment textAlign='right' basic>
                    <Button
                      circular
                      icon={{ name: "play", color: "purple" }}
                      size='massive'
                      onClick={onPlay}
                    />
                  </Segment>
                )}
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
                      definitions.map(({ definition }, idx) => {
                        return <li key={idx}>{definition}</li>;
                      })}
                  </ul>
                  {synonyms && synonyms.length > 0 && (
                    <div>
                      Synonyms:{" "}
                      {synonyms.map((synonym, idx) => {
                        return (
                          <span className='word__definition__synonym' key={idx}>
                            {synonym}
                            {idx !== synonyms.length - 1 ? (
                              <span style={{ color: "black" }}>, </span>
                            ) : (
                              ""
                            )}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          {word && <Divider />}

          {sourceUrls && (
            <span>
              Source: <a href={sourceUrls[0]}>{sourceUrls[0]}</a>
              <NewWindowIcon />
            </span>
          )}
        </div>
      ) : (
        <Container
          text
          textAlign='center'
          className={`word--no-definition-container ${currentFont}`}
        >
          <span className='word--no-definition-container__emoji'>😕</span>
          <Header as='h2' className={currentFont}>
            {wordInfo.title}
          </Header>
          <span>
            Sorry pal, we couldn't find the definitions of the word you're
            looking for. {wordInfo.resolution}
          </span>
        </Container>
      )}
    </Container>
  );
};

export default Word;
