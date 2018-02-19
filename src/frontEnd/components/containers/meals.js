import Meals from '../meals.jsx';
import {connect}from 'react-redux';
import {fetchMeals} from '../../actions/mealsActions';
import {fetchMeal} from '../../actions/mealAction';

// get state (reducers)
const mapStateToProps = ({meals})=>{
  return  ({
    meals
  });
};

// pass action to component
const mapDispatchToProps ={
  fetchMeals,
  fetchMeal
};

export default connect(mapStateToProps,mapDispatchToProps)(Meals);
