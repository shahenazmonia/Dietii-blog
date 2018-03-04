import blogsPage from '../blogsPage';
import {connect}from 'react-redux';
import {fetchBlogs} from '../../actions/blogsAction';

const mapStateToProps = ({blogs})=>{
  return ({
    blogs
  });
};

const mapDispatchToProps ={
  fetchBlogs
};

export default connect (mapStateToProps,mapDispatchToProps)(blogsPage);
