import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Home from './components/Home';
import ShoppingListComponent from './components/ShoppingListComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={ShoppingListComponent} />
      </Switch>
    </Router>
  );
};

export default App;
