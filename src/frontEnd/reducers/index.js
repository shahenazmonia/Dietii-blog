import {combineReducers} from 'redux';
import mealsReducer from './mealsReducer';
import mealReducer from './mealReducer';

export default combineReducers({
  meals: mealsReducer,
  meal: mealReducer
});
