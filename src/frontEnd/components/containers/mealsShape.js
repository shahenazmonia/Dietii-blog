import connect from 'react-redux';
import Meals from '../meals.js';

const mapStateToProps= (state)=>{
  return({
    app: app.state
  })
};

const mapDispatchToProps=(dispatch)=>{

};

const mealsShape= connect(mapStateToProps,mapDispatchToProps)(Meals);

export default mealsShape;
