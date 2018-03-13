import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Meal from './containers/meal';
import Blogs from './containers/blogsPage';
import Blog from './containers/blog.js';
const publicPath = '/';

export const routeCodes = {
  MEAL: `${publicPath}meal/:id`,
  BLOGS: `${publicPath}blogs`,
  BLOG: `${publicPath}blog/:id`
};

export default () => {
  return (
    <HashRouter>
      <div className='app'>
        <Switch>
          <Route exact path={publicPath} component={Home}/>
          <Route exact path={routeCodes.MEAL} component={Meal}/>
          <Route exact path={routeCodes.BLOGS} component={Blogs}/>
          <Route exact path={routeCodes.BLOG} component={Blog}/>
          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  );
};
