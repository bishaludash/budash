import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { CheckLoggedinUser } from "../../utils/CheckLoggedinUser";
import { Switch, Route, Redirect } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

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
    <Switch>
      <Route exact path="/dashboard" render={(e) => "hello"}></Route>
    </Switch>
  );
};

export default Dashboard;
