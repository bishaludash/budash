import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/auth/Login";

const Dashboard = lazy(() => import("./components/admin/Dashboard"));
const renderLoader = () => <p>Loading...</p>;

const App = () => {
  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_URL}`}>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route
          path="/dashboard"
          render={() => (
            <Suspense fallback={renderLoader()}>
              <Dashboard />
            </Suspense>
          )}
        ></Route>

        <Route path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
