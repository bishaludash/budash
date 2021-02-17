import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { CheckLoggedinUser } from "../../utils/CheckLoggedinUser";
import { Switch, Route, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    CheckLoggedinUser(setUser);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    return (
      <Switch>
        <Route path="/" render={() => <Redirect to="/login"></Redirect>} />
      </Switch>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Content />
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
