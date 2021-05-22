import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/auth/Login";

const Dashboard = lazy(() => import("./components/admin/Dashboard"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>

        <Route path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
