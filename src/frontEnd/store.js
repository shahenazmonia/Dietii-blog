import {createStore,combineReducers} from 'redux';
import {app}from './reducers.js'


export const store = createStore(combineReducers(
  {
    app: app
  }
));
