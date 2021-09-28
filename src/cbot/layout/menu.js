import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Pane, Button } from "evergreen-ui";

const MenuBar = ({ title }) => {
  return (
    <Pane
      display="flex"
      padding={5}
      borderBottom={"2px solid #f4f4f7"}
      margin={"30px"}
      borderRadius={3}
    >
      <Button
        onClick={(e) => {
          e.preventDefault();
        }}
        marginRight={100}
        height={40}
      >
        BetShore
      </Button>
    </Pane>
  );
};

export default MenuBar;
