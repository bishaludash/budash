import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Budash from "../../assets/budash.jpg";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {/*Avatar grid*/}
        <Grid item sm={6} md={3} lg={2}>
          <Link to="/">
            <Avatar className={classes.large} alt="Remy Sharp" src={Budash} />
          </Link>
        </Grid>

        {/*Navlink container*/}
        <Grid item sm={12} md={9} lg={10}>
          <Grid item xs={10} sm={10}>
            <Link to="/" className={classes.author}>
              Bishal Udash
            </Link>
            <Brightness4Icon />
          </Grid>

          <Grid item xs={10} sm={10} className={classes.navLinkContainer}>
            <NavLink
              className={classes.navlinks}
              to="/articles"
              activeClassName={classes.active}
            >
              Articles
            </NavLink>
            <NavLink
              className={classes.navlinks}
              to="/projects"
              activeClassName={classes.active}
            >
              Projects
            </NavLink>
            <NavLink
              className={classes.navlinks}
              to="/stack"
              activeClassName={classes.active}
            >
              Stack
            </NavLink>
            <NavLink
              className={classes.navlinks}
              to="/journal"
              activeClassName={classes.active}
            >
              Journal
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles({
  large: {
    width: "120px",
    height: "120px",
  },
  navLinkContainer: {
    margin: "1rem 0",
  },
  navlinks: {
    marginRight: "20px",
    textDecoration: "none",
    fontWeight: "500",
    color: "#654b4b",
    "&:hover": {
      textDecoration: "underline",
      color: "#000",
    },
  },
  active: {
    color: "#000",
    textDecoration: "underline",
  },
  author: {
    color: "#000",
    fontSize: "xx-large",
    fontWeight: "600",
    textDecoration: "none",
    marginRight: "20px",
  },
});
