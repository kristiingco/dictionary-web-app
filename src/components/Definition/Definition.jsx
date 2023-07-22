import { useContext } from "react";

import DefinitionDivider from "../DefinitionDivider/DefinitionDivider";

import { DarkModeContext } from "../../contexts/DarkModeContext";
const Definition = ({ partOfSpeech, definitions, synonyms }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <DefinitionDivider partOfSpeech={partOfSpeech} />
      <span className='word__header--small'>Meaning</span>
      <ul>
        {definitions &&
          definitions.map(({ definition, example }, idx) => {
            return (
              <div key={idx} style={{ marginBottom: 10 }}>
                <li>{definition}</li>
                {example && (
                  <span className='word__header--small'>"{example}"</span>
                )}
              </div>
            );
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
                  <span style={{ color: isDarkMode ? "white" : "black" }}>
                    {" "}
                    |{" "}
                  </span>
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
};

export default Definition;
