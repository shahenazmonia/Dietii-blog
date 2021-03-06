import React from 'react';
import Slider from './containers/slider.js';
import ServicesShape from './containers/servicesShape.js';
import Meals from './containers/meals.js';
import Blogs from './containers/blogs.js';
import DietiiStore from './containers/dietiiStoreShape.js';
import ContactUs from './containers/contactUs.js';
import InstagramShape from './containers/instagramShape.js';
import FooterShape from './containers/footerShape.js';


const Home = ()=>{
  return (
    <div>
      <Slider></Slider>
      <ServicesShape></ServicesShape>
      <Meals></Meals>
      <Blogs></Blogs>
      <DietiiStore></DietiiStore>
      <ContactUs></ContactUs>

    </div>
  );
};

export default Home;
