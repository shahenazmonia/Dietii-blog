import React , {Component} from 'react';
import {Card, CardTitle, CardText, CardBlock, CardLink} from 'reactstrap';

class blogs extends Component {

  componentDidMount() {
    const {fetchBlogs} = this.props;
    fetchBlogs();
  }
  componentWillReceiveProps(){
    const {blogs} = this.props;
  }

  render() {
    const {blogs,fetchBlogs} = this.props;

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
                      <CardLink href={value.objectId}>اقرأ المزيد</CardLink>
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
export default blogs;
