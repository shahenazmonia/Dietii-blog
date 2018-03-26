import {connect} from 'react-redux';
import Blog from '../blog.js';
import {fetchBlog} from '../../actions/blogAction.js';
import {fetchBlogs} from '../../actions/blogsAction.js';

const mapStateToProps =({blog,blogs})=>{
  return ({
    blog,
    blogs
  });
};

const mapDispatchToProps ={
  fetchBlog,
  fetchBlogs
};

export default connect (mapStateToProps,mapDispatchToProps)(Blog);
