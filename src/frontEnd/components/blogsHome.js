import React , {Component} from 'react';
import {Card, CardTitle,CardBlock} from 'reactstrap';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
class blogs extends Component {

  componentDidMount() {
    const {fetchBlogs} = this.props;
    fetchBlogs();
  }

  render() {
    const {blogs} = this.props;
    return(
      <div className='blogscontainer' id='blogs'>
        <h1 className='blog-title'> جديد المدونة</h1>
        <div className='blogs-images-container'>
          {(!blogs.blogs.isFetching && blogs.blogs.results) ?
            blogs.blogs.results.map((value)=>{
              return(
                <div className='blogs-images' key={value.objectId} >
                  <img className='blog-image' src={value.imgUri}/>
                  <Card>
                    <CardBlock className='card-title'>
                      <CardTitle>{value.title}</CardTitle>
                    </CardBlock>
                    <CardBlock>
                      <Link to={`/blog/${value.objectId}`} > اقرأ المزيد </Link>
                    </CardBlock>
                  </Card>
                </div>
              );
            }) : <div> loading </div>
          }



        </div>
      </div>
    );
  }
}
blogs.propTypes ={
  fetchBlogs:propTypes.func,
  blogs:propTypes.object
};

export default blogs;
