import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from "../layout/master";
import { Avatar, Button, CogIcon } from "evergreen-ui";

const ScoreSheet = () => {
  return (
    <div css={sheetMainBox}>
      <div>
        <span css={sheetTimer}>60:43 (h2)</span>
        <span css={sheetLeague}>Brazil-Segunda Division</span>
      </div>
      <div>
        <span css={sheetTeam}>Arsenal</span>
        <span css={sheetTeamScore}>3</span>
      </div>
      <div>
        <span css={sheetTeam}>Chelsea</span>
        <span css={sheetTeamScore}>1</span>
      </div>
      <div>
        <Button size="small" margin={5}>
          1.7
        </Button>
        <Button size="small" margin={5}>
          3.5
        </Button>
        <Button size="small" margin={5}>
          7.2
        </Button>
        <Button size="small" appearance="primary" marginX={40}>
          Details
        </Button>
      </div>
    </div>
  );
};

const BetShore = () => {
  return (
    <div css={shoreMainBox}>
      <ScoreSheet></ScoreSheet>
      <ScoreSheet></ScoreSheet>
      <ScoreSheet></ScoreSheet>
      <ScoreSheet></ScoreSheet>
      <ScoreSheet></ScoreSheet>
    </div>
  );
};

const ViewPage = Layout(BetShore, { title: "BetShore Strategy" });
export default ViewPage;

const sheetMainBox = css`
  border: 1px solid green;
  background-color: black;
  color: white;
  width: 100%;
  float: left;
  padding: 20px;
`;
const shoreMainBox = css`
  width: 25%;
  float: left;
`;
const sheetTimer = css`
  font-size: 14px;
  color: green;
  font-weight: bolder;
  margin-right: 30px;
`;
const sheetLeague = css`
  font-size: 14px;
  font-weight: bolder;
  margin-left: 30px;
`;
const sheetTeam = css`
  font-size: 14px;
  color: lightgray;
  font-weight: bolder;
`;
const sheetTeamScore = css`
  font-size: 14px;
  color: lightgray;
  font-weight: bolder;
  margin-right: 50px;
  float: right;
`;
const sheetAway = css``;
const sheetAwayScore = css``;
const sheetHomeOdd = css``;
const sheetDrawOdd = css``;
