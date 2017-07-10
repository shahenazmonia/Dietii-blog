import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import SliderShape from './components/containers/slideShape.js';
import ServicesShape from './components/containers/servicesShape.js';
import MealsShape from './components/containers/mealsShape.js';
import BlogShape from './components/containers/blogsShape.js';

const Main = ()=>{
  return (
    <Provider store={store}>
      <div>
        <SliderShape></SliderShape>
        <ServicesShape></ServicesShape>
        <MealsShape></MealsShape>
        <BlogShape></BlogShape>
      </div>

    </Provider>
  );
};



reactDOM.render(
  <Main/>, document.getElementById('myApp'));
