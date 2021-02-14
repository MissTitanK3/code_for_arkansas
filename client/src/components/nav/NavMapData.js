import React from "react";

import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavMapData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoMdHome />,
    cName: "nav-text",
  },
  {
    title: "Newsfeed",
    path: "/newsfeed",
    icon: <FaIcons.FaNewspaper />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPaperPlane />,
    cName: "nav-text",
  },
  {
    title: "Admin",
    path: "/adminhome",
    icon: <RiIcons.RiAdminFill />,
    cName: "nav-text",
  },
];
