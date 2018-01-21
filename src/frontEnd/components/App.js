import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Meal from './containers/meal';

const publicPath = '/';

export const routeCodes = {
  MEAL: `${publicPath}meal/:id`
};

export default () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path={publicPath} component={Home}/>
        <Route exact path={routeCodes.MEAL} component={Meal}/>
      </div>
    </BrowserRouter>
  );
};
