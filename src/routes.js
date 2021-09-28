import React, { useState } from "react";
import { Router } from "@reach/router";
import PredictorPage from "./chancebot/webview";
import LoggerPage from "./chancebot/logger";
import BetShore from "./cbot/strategies/betshore";

const Routes = () => {
  return (
    <Router>
      <BetShore path="/" />
      <LoggerPage path="/logger" />
    </Router>
  );
};

export default Routes;
