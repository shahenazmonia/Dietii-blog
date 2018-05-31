import React , {Component} from 'react';
import {Card, CardTitle,CardBlock} from 'reactstrap';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import {RingLoader} from 'react-spinners';
import SEO from './SEO';

class blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
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
                  <SEO
                    schema="BLOGS"
                    title={value.title}
                    description={value.content}
                    path="dietii-blog.herokuapp.com/#blog"
                    contentType="product"
                  />
                  <img className='blog-image img-responsive' src={value.imgUri}/>
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
            }) :   <div className='sweet-loading'>
              <RingLoader
                color={'#ff8094'}
                loading={this.state.loading}
              />
            </div>
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
