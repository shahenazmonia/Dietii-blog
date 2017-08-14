import Meals from '../meals.jsx';
import {connect}from 'react-redux';
import store from '../../store.js';


const mapStateToProps = (state)=>{
  return  ({
    app : state.app
  });
};


// const mapDispatchToProps = (dispatch) =>{
// return({
//   app: disp
// })
// };


const MealsShape = connect(mapStateToProps)(Meals);

export default MealsShape;
