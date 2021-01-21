import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import About from "./About";
import Stack from "./Stack";
import Article from "../article/Article";
import Project from "../project/Project";
import Journal from "../journal/Journal";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Welcome = () => {
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary:{
        main: darkMode ? "#fff" : "#000",
      },
      secondary:{
        main: "#e57373",
      }
    },
    typography: {
      fontFamily: "ubuntu",
      fontSize: 18,
    },
  });
  const classes = useStyles();
  /*function to change the theme*/
  const changeTheme = () => {
    console.log(darkMode)
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.container}>
        {/*welcome head*/}
        <Navbar changeTheme={changeTheme} darkMode={darkMode}/>
        {/*welcome body*/}

        <div className={classes.contentBody}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/articles" component={Article} />
            <Route path="/projects" component={Project} />
            <Route exact path="/stack" component={Stack} />
            <Route path="/journal" component={Journal} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Welcome;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    width: "70%",
    padding: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  contentBody: {
    marginTop: "2.5rem",
  },
}));
