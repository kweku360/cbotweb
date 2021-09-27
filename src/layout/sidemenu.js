import React, { useState } from "react";
import { Menu, Heading } from "evergreen-ui";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { navigate } from "@reach/router";

const leftBox = css`
  width: 15%;
  height: 100vh;
  float: left;
  /* background-color: #2c3338; */
  background-color: #000;
`;
const menuItem = css`
  /* background-color: white; */
  border-radius: 25px 0px 0px 25px;
  color: #fff;
  cursor: pointer;
  svg {
    fill: #ffb200 !important;
  }
`;

const Sidemenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("active");
  let menuList = [
    {
      id: 10,
      parent: 4,
      name: "Dashboard",
      active: false,
      icon: "",
      link: "/statsfpl",
    },
    // {
    //   id: 1,
    //   parent: 1,
    //   name: "All Requests",
    //   active: false,
    //   icon: "circle-arrow-right",
    //   link: "/request/list",
    // },
    // {
    //   id: 2,
    //   parent: 2,
    //   name: "Manage Agents / Vendors",
    //   active: false,
    //   icon: "application",
    //   link: "/agent/list",
    // },
  ];
  let menuGroup = [
    {
      id: 4,
      name: "",
    },
    // {
    //   id: 1,
    //   name: "Requests",
    // },
    // {
    //   id: 2,
    //   name: "Agents",
    // },
    // {
    //   id: 3,
    //   name: "Pricing Model",
    // },
  ];

  return (
    <div css={leftBox}>
      <div>
        <Heading
          css={css`
            color: #fff;
            padding: 30px 30px 5px 30px;
          `}
          size={500}
        >
          Stats FPL
        </Heading>
        <hr
          css={css`
            margin-left: 20px;
            height: 0.1px;
            margin-right: 30px;
            h2 {
              color: #000 !important;
            }
          `}
        ></hr>
      </div>
      <br />
      <br />
      <div
        css={css`
          margin-left: 30px;
          h2 {
            color: #fff;
          }
        `}
      >
        <Menu>
          {menuGroup.map((groupItem) => {
            return (
              <Menu.Group key={groupItem.id} title={groupItem.name}>
                {menuList.map((item) => {
                  if (groupItem.id == item.parent) {
                    return (
                      <Menu.Item
                        key={item.id}
                        css={menuItem}
                        onSelect={async () => {
                          await navigate(item.link);
                        }}
                        icon={item.icon}
                      >
                        {item.name}
                      </Menu.Item>
                    );
                  }
                })}
              </Menu.Group>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};

export default Sidemenu;
