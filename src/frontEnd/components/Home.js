import React from 'react';
import SliderShape from './containers/slideShape.js';
import ServicesShape from './containers/servicesShape.js';
import MealsShape from './containers/meals.js';
import BlogShape from './containers/blogsShape.js';
import DietiiStore from './containers/dietiiStoreShape.js';
import DietiiTeamShape from './containers/dietiiTeamShape.js';
import InstagramShape from './containers/instagramShape.js';
import FooterShape from './containers/footerShape.js';



const Home = ()=>{
  return (
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
  );
};

export default Home;
