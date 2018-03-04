import Slider from '../slider.jsx';
import {connect}from 'react-redux';


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
