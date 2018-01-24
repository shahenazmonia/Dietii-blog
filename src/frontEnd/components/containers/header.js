import Header from '../header.jsx';
import {connect}from 'react-redux';


const mapStateToProps = (state)=>{
  return  ({
    app : state.app
  });
};


// const mapDispatchToProps = (dispatch) =>{
//
// };


export default connect(mapStateToProps)(Header);
