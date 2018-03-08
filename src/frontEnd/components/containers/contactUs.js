import {connect} from 'react-redux';
import contactUs from '../contactUs.jsx';

const mapStateToProps=(state)=>{
  return({
    app: state.app
  });
};
// const mapDispatchToProps=()=>{
//
// }

export default connect(mapStateToProps)(contactUs);
