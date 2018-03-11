import React, {Component} from 'react';
import Header from './containers/header';
import Footer from './containers/footerShape';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import {RingLoader} from 'react-spinners';
class blogsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount () {
    const {fetchBlogs} = this.props;
    fetchBlogs();
  }


  render(){
    const {blogs} = this.props;
    return(

      <div className='container-fluid' >
        <Header></Header>

        {(!blogs.blogs.isFetching && blogs.blogs.results)?
          blogs.blogs.results.map((value)=>{
            return(
              <div className='row' key={value.objectId}
                style={{'margin-right':'0px','margin-left':'0px'}}>
                <div className='col-md-1'></div>
                <div className='col-md-10' >
                  <div className='img-blogs-container'>
                    <img className ='imgs-blogs' src={value.imgUri}/></div>
                  <div className='blogs-container'>
                    <h4 className='blogs-header'> {value.title}</h4>
                    <p className='blogs-content'>{value.content}</p>

                  </div>
                  <div className='blog-buttons'>
                    <button className = 'blog-button'>
                      <Link to={`/blog/${value.objectId}`}
                        className='blog-button-text'> اقرأ المزيد </Link>
                    </button>
                  </div>
                </div>
                <div className='col-md-1'></div>
              </div>
            );
          }) :   <div className='sweet-loading'>
            <RingLoader
              color={'#ff8094'}
              loading={this.state.loading}
            />
          </div>

        }

        <div className='meal-footer'>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
blogsPage.propTypes={
  fetchBlogs: propTypes.func,
  blogs: propTypes.object,
};
export default blogsPage;
