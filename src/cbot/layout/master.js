import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Topbar from "./topbar";
import Menubar from "./menu";

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: #fff;
  color: #606468;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
`;

const topBox = css`
  margin: 0px auto;
  width: 98%;
  height: 100vh;
  background-color: #fff;
  /* display: flex; */
`;
function withLayout(WrappedComponent, props = {}) {
  const { title } = props;
  return function LayoutMaster() {
    return (
      <div css={fullscreen}>
        <div css={topBox}>
          <div>
            <Topbar title={title} />
            <Menubar></Menubar>
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
}

export default withLayout;
