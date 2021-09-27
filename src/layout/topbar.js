import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import image from '../assets/pie-chart.png';
import { Pane, Heading, Avatar, Button,Menu,Popover,toaster,Position } from "evergreen-ui";

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
      <img src={image} width="50" height="50" />
        <Heading marginLeft={20} size={700}>{"Chance Bot"}</Heading>
      </Pane>
      <Pane flex={2}>
      </Pane>
    </Pane>
  );
};

const PredictionsMenu = () => { 
  return(
  <Popover
  position={Position.BOTTOM_LEFT}
  content={
    <Menu>
      <Menu.Group>
        <Menu.Item onSelect={() => toaster.notify('Share')}>Prediction Model</Menu.Item>
        <Menu.Item onSelect={() => toaster.notify('Move')}>Prediction Silmulator</Menu.Item>
        <Menu.Item onSelect={() => toaster.notify('Rename')}>
          Score Predictor
        </Menu.Item>
      </Menu.Group>
      {/* <Menu.Divider />
      <Menu.Group>
        <Menu.Item onSelect={() => toaster.danger('Delete')} intent="danger">
          Delete...
        </Menu.Item>
      </Menu.Group> */}
    </Menu>
  }
>
  <Button marginRight={16}>Predictions</Button>
</Popover>
)
}

export default Topbar;
