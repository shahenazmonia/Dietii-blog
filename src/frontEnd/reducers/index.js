import {combineReducers} from 'redux';
import mealsReducer from './mealsReducer';
import mealReducer from './mealReducer';
import blogsReducer from './blogsReducer';
export default combineReducers({
  meals: mealsReducer,
  meal: mealReducer,
  blogs: blogsReducer,
});
