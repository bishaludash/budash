import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Budash from "../../assets/budash.jpg";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navStyles}>
      <div>
        <Link to='/'>
        <Avatar className={classes.large} alt="Remy Sharp" src={Budash} />
        </Link>
      </div>

      <div className={classes.navContainer}>
      <Link to='/' className={classes.active}><h2>Bishal Udash</h2></Link>
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
      </div>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles({
  navStyles: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "5%",
  },
  large: {
    width: "120px",
    height: "120px",
  },
  navContainer: {
    marginLeft: "5%",
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
    textDecoration: "none",
  },
});

