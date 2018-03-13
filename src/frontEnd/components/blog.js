import React, {Component} from 'react';
import Header from './containers/header.js';
import Footer from './containers/footerShape.js';
import propTypes from 'prop-types';
class Blog extends Component {

  componentDidMount(){
    const objectId = this.props.match.params.id;
    this.props.fetchBlog(objectId);

  }

  render() {
    const {blog}= this.props;
    return (
      <div className='container-fluid'>
        <Header></Header>
        <div className='row' key={blog.blog.objectId}
          style={{'margin-right':'0px','margin-left':'0px'}}>
          <div className='col-md-1'></div>
          <div className='col-md-10' >
            <div className='single-blog-container'>
              <img className ='imgs-blogs' src={blog.blog.imgUri}/></div>
            <div className='blog-container'>
              <h4 className='blogs-header'> {blog.blog.title}</h4>
              <p className='blogs-content'>{blog.blog.content}</p>
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }

}
Blog.propTypes={
  blog: propTypes.object,
  fetchBlog:propTypes.func,
  match:propTypes.object,
  params:propTypes.object
};
export default Blog;
