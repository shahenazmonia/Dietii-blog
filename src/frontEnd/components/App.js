import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Home';
import Meal from './containers/meal';
import Blogs from './containers/blogsPage';
const publicPath = '/';

export const routeCodes = {
  MEAL: `${publicPath}meal/:id`,
  BLOGS: `${publicPath}blogs`
};

export default () => {
  return (
    <HashRouter>
      <div className='app'>
        <Route exact path={publicPath} component={Home}/>
        <Route exact path={routeCodes.MEAL} component={Meal}/>
        <Route exact path={routeCodes.BLOGS} component={Blogs}/>
      </div>
    </HashRouter>
  );
};
