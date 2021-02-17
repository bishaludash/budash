import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
