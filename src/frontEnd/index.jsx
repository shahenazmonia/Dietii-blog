import React from 'react';
import reactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';

import App from './components/App';

const Main = ()=>{
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};



reactDOM.render(
  <Main/>, document.getElementById('myApp'));
