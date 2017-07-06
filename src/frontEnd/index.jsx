import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import SliderShape from './components/containers/slideShape.js';
import ServicesShape from './components/containers/servicesShape.js';
import MealsShape from './components/containers/mealsShape.js';

const Main = ()=>{
  return (
    <Provider store={store}>
      <div>
        <SliderShape></SliderShape>
        <ServicesShape></ServicesShape>
        <MealsShape></MealsShape>
      </div>

    </Provider>
  );
};



reactDOM.render(
  <Main/>, document.getElementById('myApp'));
