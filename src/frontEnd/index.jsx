import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
 import Slider from './components/containers/slideShape.js'

const Main = () => {
 return (
  <Provider store={store}>


      <Slider></Slider>
    
      </Provider>
 );
};

reactDOM.render(
<Main/>, document.getElementById('myApp'));
