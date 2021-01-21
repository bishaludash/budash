import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Budash from "../../assets/budash.jpg";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { Typography } from "@material-ui/core";

const Navbar = ({ changeTheme, darkMode }) => {
  const classes = useStyles();
  const history = useHistory();

  const redirectHome = () =>{
    console.log("go home");
    history.push('/');
  }

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
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
            >
              <span className={classes.author} onClick = {redirectHome}>Bishal Udash</span>
              <span style={{ cursor: "pointer", marginLeft: "20px" }}>
                {darkMode ? (
                  <Brightness7Icon onClick={changeTheme} />
                ) : (
                  <Brightness4Icon onClick={changeTheme} />
                )}
              </span>
            </Typography>
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
    color: "#676767",
    "&:hover": {
      color: "#e57373",
    },
  },
  active: {
    color: "#e57373",
  },
  author: {
    fontSize: "xx-large",
    fontWeight: "600",
    "&:hover":{
      color :'#e57373',
      cursor :'pointer'
    }
  },
});
