import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../layout/master"
import { allLogs } from "../data/serverdata";
import Evergreentable from "../components/tables/evergreentable"
import InfoBox from "./info"

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

const LoggerPage = () => {

  const [data, setData] = useState([]);
  const [logdata, setLogData] = useState([]);
  const cols = [
    { id: 1, name: "id" },
    { id: 2, name: "Count" },
    { id: 3, name: "Time" },
    { id: 3, name: "Status" },
    { id: 4, name: "" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await allLogs();
    console.log(data);
    setData(data);
  };

  const setViewDetails = (data) => {
    setLogData(data);
  };

  const showFormations = () => {
    return (
      <React.Fragment>        
        <br/>
          <InfoBox />
        <br/>
        <br/>
        <Text fontWeight="bold">Select Bet Platform</Text>
        <br/>
        <br/>
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
                  e.preventDefault();
                }}
                marginRight={100}
                height={40}
              >
                Refresh Logs
              </Button>
            </Pane>
          </Pane>
        </Pane>
      </Pane>

      <Pane
        css={centerForm}

        float="left"
        margin={24}
        display="flex"
        flexDirection="column"
      >
        <Pane width="95%">
          <Pane clearfix>
            <Pane width="40%" elevation={1} marginRight={27} float="left">
              <Evergreentable cols={[cols]} data={data} setLog={setViewDetails} />
            </Pane>
            <Pane width="55%" elevation={1} float="left">
              <h3>{JSON.stringify(logdata)}</h3>
            </Pane>
          </Pane>
        </Pane>
      </Pane></React.Fragment>
  );
};
const ViewPage = LayoutMaster(LoggerPage, { title: "logger" });
export default ViewPage;