import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Budash from "../../assets/budash.jpg";

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
  navContainer:{
    marginLeft : '5%'
  },
  navlinks:{
    marginRight: '20px',
    textDecoration :"none",
    fontWeight :'500',
    color:"#654b4b",
    '&:hover':{
    textDecoration: 'underline',
    color:'#000'
    }
  },
  active:{
    color:'#000'
  }

});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navStyles}>
      <div>
        <Avatar className={classes.large} alt="Remy Sharp" src={Budash} />
      </div>

      <div className={classes.navContainer}>
        <h2>Bishal Udash</h2>
        <NavLink className={classes.navlinks} to="/" activeClassName={classes.active}>Articles</NavLink>
        <NavLink className={classes.navlinks} to="/projects">Projects</NavLink>
        <NavLink className={classes.navlinks} to="/stack">Stack</NavLink>
        <NavLink className={classes.navlinks} to="/journal">Journal</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
