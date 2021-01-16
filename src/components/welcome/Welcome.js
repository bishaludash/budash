import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background1.jpg";
import Navbar from "./Navbar";
import About from "./About";

const Welcome = () => {
  const useStyles = makeStyles((theme) => ({
    bodyBackground: {
      backgroundImage: `url(${background})`,
      minHeight: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    container: {
      margin: "0 auto",
      width: "60%",
      padding: "5%",
      [theme.breakpoints.between("xs", "sm")]: {
        width: "95%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.bodyBackground}>
      <div className={classes.container}>
        {/*welcome head*/}
        <Navbar></Navbar>
        {/*welcome body*/}
        <About></About>
      </div>
    </div>
  );
};

export default Welcome;
