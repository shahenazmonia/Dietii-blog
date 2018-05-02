import React, {Component} from 'react';
import Header from './containers/header.js';
import Footer from './containers/footerShape.js';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Blog extends Component {

  componentDidMount(){
    const objectId = this.props.match.params.id;
    this.props.fetchBlog(objectId);
    const {fetchBlogs}= this.props;
    fetchBlogs();
  }

  render() {
    const {blog,blogs,fetchBlog}= this.props;
    return (
      <div className='container-fluid'>
        <Header></Header>
        <div className='row' key={blog.blog.objectId}
          style={{'margin-right':'0px','margin-left':'0px'}}>

          <div className='col-md-4 '>
            <h2 className='other-article-header' > مقالات آخرى </h2>
            {(!blogs.blogs.isFetching && blogs.blogs.results)?
              blogs.blogs.results.map((value)=>{
                return(
                  <div className='other-article-container' key={value.objectId} >
                    <Link onClick={() => fetchBlog(value.objectId)} to={`/blog/${value.objectId}`} style={{'text-decoration': 'none'}}>
                      <h4 className='blog-other-name'> {value.title} </h4>
                    </Link>
                    <img className='blog-other-img img-responsive' src={value.imgUri}/>
                  </div>

                );
              }):<div>error fetching</div>}
          </div>


          <div className='col-md-8 blog-right-side' >
            <div className='single-blog-container'>
              <img className ='imgs-blogs' src={blog.blog.imgUri}/>
            </div>
            <div className='blog-container'>
              <h4 className='blogs-header'> {blog.blog.title}</h4>
              <p className='blog-content'>{blog.blog.content}</p>
            </div>
          </div>

        </div>
        <Footer></Footer>
      </div>
    );
  }

}
Blog.propTypes={
  blog: propTypes.object,
  fetchBlog:propTypes.func,
  fetchBlogs:propTypes.func,
  blogs:propTypes.object,
  match:propTypes.object,
  params:propTypes.object
};
export default Blog;
