import React from "react";
import { Switch, Route} from "react-router-dom";

import ListArticle from './ListArticle';
import ShowArticle from './ShowArticle';

const Article = () => {
  return (
    <Switch>
      <Route exact path="/articles" component={ListArticle} />
      <Route exact path="/articles/:slug" component={ShowArticle} />
    </Switch>
  );
};

export default Article;