import Meals from '../meals.jsx';
import {connect}from 'react-redux';
import {fetchMeals} from '../../actions/mealsActions';

// get state (reducers)
const mapStateToProps = ({meals})=>{
  return  ({
    meals
  });
};

// pass action to component
const mapDispatchToProps ={
  fetchMeals
};

export default connect(mapStateToProps,mapDispatchToProps)(Meals);
