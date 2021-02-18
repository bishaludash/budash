import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import { NavLink, useLocation } from "react-router-dom";

const textLink = {
  color: "inherit",
  textDecoration: "inherit",
};

export const ListItems = () => {
  const { pathname } = useLocation();

  return (
  <div>
    <NavLink to="/dashboard" style={textLink} activeClassName="activeNavLinks">
      <ListItem button selected={pathname ==="/dashboard" ? true : false}>
        <ListItemIcon>
          <DashboardIcon color={pathname ==="/dashboard" ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/dashboard/article"
      style={textLink}
      activeClassName="activeNavLinks"
    >
      <ListItem button selected={pathname.includes('/article') ? true : false}>
        <ListItemIcon>
          <ShoppingCartIcon color={pathname.includes('/article') ? "primary" : "inherit"}/>
        </ListItemIcon>
        <ListItemText primary="Articles" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/dashboard/project"
      style={textLink}
      activeClassName="activeNavLinks"
    >
      <ListItem button selected={pathname.includes('/project') ? true : false}>
        <ListItemIcon>
          <PeopleIcon color={pathname.includes('/project') ? "primary" : "inherit"}/>
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/dashboard/journal"
      style={textLink}
      activeClassName="activeNavLinks"
    >
      <ListItem button selected={pathname.includes('/journal') ? true : false}>
        <ListItemIcon>
          <BarChartIcon color={pathname.includes('/journal') ? "primary" : "inherit"}/>
        </ListItemIcon>
        <ListItemText primary="Journals" />
      </ListItem>
    </NavLink>
  </div>
);
}