import {createStore,combineReducers} from 'redux';
import {app}from './reducers.js'

const store = createStore(combineReducers(
  {
    app: app
  }
));

export default store;
