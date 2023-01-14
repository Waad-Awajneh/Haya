import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";

import Posts from "views/Posts.js";
import Allposts from "views/Allposts.js";

import Comments from "views/Comments.js";
import News from "views/News.js";

import AllExpectation from "views/Expectation";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: TableList,
    layout: "/admin",
  },

  {
    path: "/posts",
    name: "Posts Request",
    icon: "nc-icon nc-send",
    component: Posts,
    layout: "/admin",
  },
  {
    path: "/allposts",
    name: "All Posts",
    icon: "nc-icon nc-paper-2",
    component: Allposts,
    layout: "/admin",
  },
  {
    path: "/comments",
    name: "Comments",
    icon: "nc-icon nc-chat-round",
    component: Comments,
    layout: "/admin",
  },
  {
    path: "/news",
    name: "News",
    icon: "nc-icon nc-single-copy-04",
    component: News,
    layout: "/admin",
  },
  {
    path: "/expectation",
    name: "Expectation",
    icon: "nc-icon nc-alien-33",
    component: AllExpectation,
    layout: "/admin",
  },
];

export default dashboardRoutes;
