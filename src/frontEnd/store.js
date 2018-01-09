import {createStore,applyMiddleware} from 'redux';
import {routerMiddleware, routerReducer, syncHistoryWithStore} from'react-router-redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './reducers';

const store = createStore(rootReducers,{}, applyMiddleware(
  ReduxThunk
));

export default store;
