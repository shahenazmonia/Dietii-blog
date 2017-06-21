import Slider from '../slider.js';
import {connect}from 'react-redux';
import store from '../../store.js';


const mapStateToProps = (state)=>{
 return  ({
   app : state.app
 })
};


const mapDispatchToProps = (dispatch) =>{

};


const SliderShape = connect(mapStateToProps,mapDispatchToProps)(Slider);
export default SliderShape;
