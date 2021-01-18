import React from "react";
import {Switch, Route} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.jpg";
import Navbar from "./Navbar";
import About from "./About";
import Stack from './Stack'
import Article from '../article/Article'
import Project from '../project/Project'
import Journal from '../journal/Journal'

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
      paddingTop: "3%",
      paddingLeft: "5%",
      paddingBottom: "3%",
      [theme.breakpoints.between("xs", "sm")]: {
        width: "95%",
      },
    }
  }));

  const classes = useStyles();  
  return (
    <div className={classes.bodyBackground}>
      <div className={classes.container}>
        {/*welcome head*/}
        <Navbar></Navbar>
        {/*welcome body*/}
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/articles' component={Article} />
          <Route exact path='/projects' component={Project}/>
          <Route exact path='/stack' component={Stack} />
          <Route exact path='/journal' component={Journal}/>
        </Switch>
      </div>
    </div>
  );
};

export default Welcome;
