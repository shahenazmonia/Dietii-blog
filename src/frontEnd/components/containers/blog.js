import {connect} from 'react-redux';
import Blog from '../blog.js';
import {fetchBlog} from '../../actions/blogAction.js';

const mapStateToProps =({blog})=>{
  return ({
    blog
  });
};

const mapDispatchToProps ={
  fetchBlog
};

export default connect (mapStateToProps,mapDispatchToProps)(Blog);
