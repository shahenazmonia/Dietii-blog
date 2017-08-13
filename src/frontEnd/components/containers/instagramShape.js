import Instagram from '../instagram.js';
import {connect}from 'react-redux';

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


const InstagramShape = connect(mapStateToProps)(Instagram);

export default InstagramShape;
