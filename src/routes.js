import React, { useState } from "react";
import { Router } from "@reach/router";
import PredictorPage from "./chancebot/webview"
import LoggerPage from "./chancebot/logger"


const Routes = () => {

  return (
    <Router>
    <PredictorPage path="/" />
    <LoggerPage path="/logger" />
  </Router>
  );
};

export default Routes;
