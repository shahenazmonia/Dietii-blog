import {connect} from 'react-redux';
import Blogs from '../blogs.jsx';

const mapStateToProps =(state)=>{
  return ({
    app: state.app
  });
};

// const mapDispatchToProps =(dispatch)=>{
//
// };

const blogShape = connect (mapStateToProps)(Blogs);

export default blogShape;
