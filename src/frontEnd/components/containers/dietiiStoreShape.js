import dietiiStore from '../dietiiStore.jsx';
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


const dietiiStoreShape = connect(mapStateToProps)(dietiiStore);

export default dietiiStoreShape;
