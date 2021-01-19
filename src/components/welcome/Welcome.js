import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import About from "./About";
import Stack from "./Stack";
import Article from "../article/Article";
import Project from "../project/Project";
import Journal from "../journal/Journal";

const Welcome = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "0 auto",
      width: "60%",
      padding: "5%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
    contentBody:{
      marginTop :'2.5rem'
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/*welcome head*/}
      <Navbar />
      {/*welcome body*/}

      <div className={classes.contentBody}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/articles" component={Article} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/stack" component={Stack} />
          <Route exact path="/journal" component={Journal} />
        </Switch>
      </div>
    </div>
  );
};

export default Welcome;
