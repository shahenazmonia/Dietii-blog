import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import SliderShape from './components/containers/slideShape.js';
import ServicesShape from './components/containers/servicesShape.js';
import MealsShape from './components/containers/meals.js';
import BlogShape from './components/containers/blogsShape.js';
import DietiiStore from './components/containers/dietiiStoreShape.js';
import DietiiTeamShape from './components/containers/dietiiTeamShape.js';
import InstagramShape from './components/containers/instagramShape.js';
import FooterShape from './components/containers/footerShape.js';



const Main = ()=>{
  return (
    <Provider store={store}>
      <div>
        <SliderShape></SliderShape>
        <ServicesShape></ServicesShape>
        <MealsShape></MealsShape>
        <BlogShape></BlogShape>
        <DietiiStore></DietiiStore>
        <DietiiTeamShape></DietiiTeamShape>
        <InstagramShape></InstagramShape>
        <FooterShape></FooterShape>
      </div>

    </Provider>
  );
};



reactDOM.render(
  <Main/>, document.getElementById('myApp'));
