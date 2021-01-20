import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
