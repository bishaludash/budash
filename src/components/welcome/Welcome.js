import React from "react";
import {Switch, Route} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.jpg";
import Navbar from "./Navbar";
import About from "./About";
import Stack from './Stack'

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
      paddingTop: "5%",
      paddingLeft: "5%",
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
          <Route exact path='/articles' render={()=><p>This is blog</p>} />
          <Route exact path='/projects' render={()=><p>This is blog</p>} />
          <Route exact path='/stack' component={Stack} />
          <Route exact path='/journal' render={()=><p>This is blog</p>} />
        </Switch>
      </div>
    </div>
  );
};

export default Welcome;
