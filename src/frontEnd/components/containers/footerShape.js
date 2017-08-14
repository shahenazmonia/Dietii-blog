import {connect} from 'react-redux';
import Footer from '../footer.jsx';

const mapStateToProps=(state)=>{
  return({
    app: state.app
  });
};
// const mapDispatchToProps=()=>{
//
// }

const footerShape= connect(mapStateToProps)(Footer);

export default footerShape;
