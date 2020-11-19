import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPageContainer from './components/MainPage/MainPageContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </Router>
  );
};

export default Routes;
