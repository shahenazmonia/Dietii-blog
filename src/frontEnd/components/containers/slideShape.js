import Slider from '../slider.jsx';
import {connect}from 'react-redux';
import store from '../../store.js';


const mapStateToProps = (state)=>{
  return  ({
    app : state.app
  });
};


// const mapDispatchToProps = (dispatch) =>{
//
// };


const SliderShape = connect(mapStateToProps)(Slider);

export default SliderShape;
