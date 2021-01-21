import React from 'react'
import { Switch, Route} from "react-router-dom";

import ListJournal from './ListJournal';
import ShowJournal from './ShowJournal';

const Journal = () => {
  return (
    <Switch>
      <Route exact path="/journal" component={ListJournal} />
      <Route exact path="/journal/:slug" component={ShowJournal} />
    </Switch>
  );
}

export default Journal