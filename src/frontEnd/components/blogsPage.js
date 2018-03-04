import React, {Component} from 'react';
import Header from './containers/header';
class blogsPage extends Component {

  componentDidMount () {
    const {fetchBlogs} = this.props;
    fetchBlogs();
  }
  componentWillReceiveProps(){
    const {blogs} = this.props;
    console.log('fffff',blogs);
  }

  render(){
    const {blogs} = this.props;
    // console.log(blogs.blogs);
    return(

      <div className='container-fluid' >
        <Header></Header>
        <div className ='container'>
          <div className='col-md-1'>
          </div>
          {(!blogs.blogs.isFetching && blogs.blogs.results)?
            blogs.blogs.results.map((value)=>{
              return(
                <div className='col-md-10 ' key={value}>
                  <img className ='imgs-blogs' src={value.imgUri}/>
                  <div className='blogs-container'>
                    <h4 className='blogs-header'> {value.title}</h4>
                    <p className='blogs-content'>{value.content}</p>
                  </div>
                </div>

              );
            }) : <div> loading </div>

          }
          <div className='col-md-1'>
          </div>
        </div>
      </div>
    );
  }
}

export default blogsPage;
