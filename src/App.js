import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Welcome from './components/welcome/Welcome'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/blog' render={()=><p>This is blog</p>} />
        <Redirect to='/'/>        
      </Switch>
    </Router>
    
  )
}

export default App