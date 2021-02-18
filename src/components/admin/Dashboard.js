import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserContext } from "../../context/UserContext";
import { CheckLoggedinUser } from "../../utils/CheckLoggedinUser";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "./layouts/Navbar";
import Board from "./layouts/Board";
import Article from "./article/Article";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const Dashboard = () => {
  const classes = useStyles();

  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckLoggedinUser(setUser);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const Theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main:"#1976d2"
      },
    },
    typography: {
      fontFamily: "ubuntu",
    },
  });

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
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <CssBaseline />

        {/*Navbar*/}
        <Navbar />

        {/*Content Wrapper*/}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/dashboard" component={Board} />
              <Route exact path="/dashboard/article" component={Article} />
              <Redirect to="/dashboard" />
            </Switch>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    minHeight: "50vh",
  },
  fixedHeight: {
    height: 240,
  },
}));
