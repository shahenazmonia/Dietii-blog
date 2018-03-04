import React, {Component} from 'react';
import Header from './containers/header';
import Footer from './containers/footerShape';
import propTypes from 'prop-types';
class blogsPage extends Component {

  componentDidMount () {
    const {fetchBlogs} = this.props;
    fetchBlogs();
  }

  render(){
    const {blogs} = this.props;
    console.log('ggggg',blogs);
    return(

      <div className='container-fluid' >
        <Header></Header>

        {(!blogs.blogs.isFetching && blogs.blogs.results)?
          blogs.blogs.results.map((value)=>{
            return(
              <div className='row' key={value.objectId} style={{'margin-right':'0px','margin-left':'0px'}}>
                <div className='col-md-1'></div>
                <div className='col-md-10' >
                  <div className='img-blogs-container'>
                    <img className ='imgs-blogs' src={value.imgUri}/></div>
                  <div className='blogs-container'>
                    <h4 className='blogs-header'> {value.title}</h4>
                    <p className='blogs-content'>{value.content}</p>
                  </div>
                </div>
                <div className='col-md-1'></div>
              </div>
            );
          }) : <div> loading </div>

        }
        <Footer></Footer>
      </div>
    );
  }
}
blogsPage.propTypes={
  fetchBlogs: propTypes.func,
  blogs: propTypes.object,
};
export default blogsPage;
