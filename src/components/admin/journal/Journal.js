import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "./List";
import Create from "./Create";
import Edit from "./Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const Journal = () => {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Switch>
          <Route exact path={match.url} component={List} />
          <Route exact path={`${match.url}/create`} component={Create} />
          <Route exact path={`${match.url}/edit/:slug`} component={Edit} />
        </Switch>
      </Paper>
    </Grid>
  );
};

export default Journal;
