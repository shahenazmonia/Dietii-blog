import Meal from '../meal.jsx';
import {connect}from 'react-redux';
import {fetchMeal} from '../../actions/mealAction';

// get state (reducers)
const mapStateToProps = ({meal})=>{
  return  ({
    meal
  });
};

// pass action to component
const mapDispatchToProps ={
  fetchMeal
};

export default connect(mapStateToProps,mapDispatchToProps)(Meal);
