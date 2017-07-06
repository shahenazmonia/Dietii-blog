import {connect}from 'react-redux';
import store from '../../store.js';
import Services from '../services.js';


const mapStateToProps =(state)=>{
 return({
    app:state.app
})
};

const mapDispatchToProps=(dispatch)=>{

};

const servicesShape= connect(mapStateToProps,mapDispatchToProps)(Services);

export default servicesShape;
