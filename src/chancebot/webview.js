import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../layout/master"
import {
  TextInputField,
  Text,
  Pane,
  Button,
  toaster,
  Spinner,
  Combobox,
} from "evergreen-ui";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;
const selectCustom = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 4-px;
  padding: 10px 38px 10px 16px;
  background-size: 10px;
  transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const WebViewPage = () => {

  const [pData, setData] = useState([]);
  const [formationV, setFormationV] = useState([]);
  const [formation, setFormation] = useState([]);
  const [strategy, setStrategy] = useState("");

  useEffect(() => {

  }, []);

  const loadData = async () => {
    //setData(main([5, 2, 3], "cheapest", data))
  };

  const showFormations = () => {
    const formationsList = [[4, 4, 2], [5, 4, 1], [4, 3, 3], [3, 4, 3], [5, 2, 3], [3, 5, 2]]
    return (
      <React.Fragment>
        <Text fontWeight="bold">Select Bet Platform</Text>
        <br />
        <br />
        <select
          css={selectCustom}
          onBlur={(event) => setFormationV(formationsList[event.target.value])}
        >
          <option value="">Choose..</option>
          <option value="0"> Sportybet</option>
        </select>
        <br />
        <br /></React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Pane
        css={centerForm}
        elevation={1}
        float="left"
        margin={24}
        display="flex"
        flexDirection="column"
      >        <Pane width="60%">
          <Pane clearfix>
            <Pane width="30%" marginRight={27} float="left">
              {showFormations()} </Pane>
            <Pane width="30%" float="left">
              <br /><br />
              <Button
                onClick={(e) => {
                  setData(main(formationV, strategy, data))
                  setFormation(formationV);
                  e.preventDefault();
                }}
                marginRight={100}
                height={40}
              // iconBefore="arrow-left"
              >
                Run Prediction
              </Button>
            </Pane>
          </Pane>
        </Pane>
      </Pane>

      <Pane
        css={centerForm}
        elevation={1}
        float="left"
        margin={24}
        display="flex"
        flexDirection="column"
      >
        <Pane width="80%">
          <Pane clearfix>
            <Pane width="50%" marginRight={27} float="left">
            </Pane>
          </Pane>
        </Pane>
      </Pane></React.Fragment>
  );
};
const ViewPage = LayoutMaster(WebViewPage, { title: "Webview" });
export default ViewPage;