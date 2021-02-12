import React from "react";

import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavMapData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoMdHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaPaperPlane />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },
  {
    title: "Org Bio",
    path: "/org-bio",
    icon: <IoIcons.IoLogoBitcoin />,
    cName: "nav-text",
  },
];
