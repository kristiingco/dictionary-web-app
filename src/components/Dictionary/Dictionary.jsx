import React from "react";
import Search from "../Search/Search";
import { Header, Button, Divider } from "semantic-ui-react";

const Dictionary = () => {
  return (
    <div>
      <Search />
      {/* Word Information */}
      <div>
        <Header as='h1'>keyboard</Header>
        <span>pronunciation</span>
        <Button circular icon='play' />
        <Divider horizontal>noun</Divider>
        <span>Meaning</span>
        <ol>
          <li>Definitions here</li>
        </ol>
      </div>
    </div>
  );
};

export default Dictionary;
