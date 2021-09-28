import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import image from "../../assets/pie-chart.png";
import { Pane, Heading } from "evergreen-ui";

const Topbar = ({ title }) => {
  return (
    <Pane
      display="flex"
      padding={5}
      borderBottom={"2px solid #f4f4f7"}
      margin={"30px"}
      borderRadius={3}
    >
      <Pane flex={1} alignItems="left" display="flex">
        <img alt="" src={image} width="50" height="50" />
        <Heading marginLeft={20} size={700}>
          {"Chance Bot"}
        </Heading>
      </Pane>
      <Pane flex={2}></Pane>
    </Pane>
  );
};

export default Topbar;
