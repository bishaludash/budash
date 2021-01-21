import React from "react";
import { Switch, Route} from "react-router-dom";

import ListProject from './ListProject';
import ShowProject from './ShowProject';

const Article = () => {
  return (
    <Switch>
      <Route exact path="/projects" component={ListProject} />
      <Route exact path="/projects/:slug" component={ShowProject} />
    </Switch>
  );
};

export default Article;