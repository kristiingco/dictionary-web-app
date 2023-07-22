import { useState, useEffect, useContext } from "react";
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
  const [audio, setAudio] = useState(null);
  const { wordInfo, wordExists } = useContext(WordContext);
  const { currentFont } = useContext(FontContext);
  const { word, phonetic, phonetics, meanings, sourceUrls } = wordInfo;

  useEffect(() => {
    if (phonetics && phonetics.length > 0) {
      for (const p of phonetics) {
        if (p.audio) {
          setAudio(new Audio(p.audio));
          break;
        }
      }
    }
  }, [word]);

  const onPlay = () => {
    if (audio) {
      audio.play();
    }
  };
  return (
    <div>
      {wordExists ? (
        <div>
          <Grid columns={2} fluid>
            <Grid.Row>
              <Grid.Column>
                <Segment basic>
                  <Header as='h1' className={`word__keyword  ${currentFont}`}>
                    {word}
                  </Header>
                  {phonetic && (
                    <span className='word__phonetics'>{phonetic}</span>
                  )}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                {audio && (
                  <Segment textAlign='right' basic>
                    <Button
                      circular
                      icon={{ name: "play", color: "purple" }}
                      size='massive'
                      onClick={onPlay}
                      style={{ backgroundColor: "rgba(164, 69, 237, 0.25)" }}
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
                  <span className='word__header--small'>Meaning</span>
                  <ul>
                    {definitions &&
                      definitions.map(({ definition }, idx) => {
                        return <li key={idx}>{definition}</li>;
                      })}
                  </ul>
                  {synonyms && synonyms.length > 0 && (
                    <div>
                      <span className='word__header--small'>Synonyms </span>

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
            <div className='word__source'>
              <span className='word__header--small'>Source </span>
              <span>
                <a href={sourceUrls[0]}>{sourceUrls[0]}</a>
                <NewWindowIcon style={{ marginLeft: 5, marginBottom: -2 }} />
              </span>
            </div>
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
    </div>
  );
};

export default Word;
