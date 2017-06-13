import React from 'react';
import reactDOM from 'react-dom';
// import store from './store.js';
// import {Provider} from 'react-redux';
//import App from './components/containers/App.js';

const Main = () => {
  return (
      <div>
      <h1>hi from react side</h1>
      </div>

  );
};

reactDOM.render(
  <Main/>, document.getElementById('myApp'));
