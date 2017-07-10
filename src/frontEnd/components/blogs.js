import React from 'react';
import { Card, Button, CardTitle, CardText, CardBlock, CardLink } from 'reactstrap';
const blogs =({props})=>{
  return(
    <div className='blogscontainer'>
    <h1 className='blog-title'> جديد المدونة</h1>
    <div className='blogs-images-container'>
  <div className='blogs-images'>
  <img className='blog-image' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
    <Card>
      <CardBlock>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </CardBlock>
      <CardBlock>
        <CardLink href="#">اقرأ المزيد</CardLink>
      </CardBlock>
    </Card>
</div>
  <div className='blogs-images'>
  <img className='blog-image' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
    <Card>
      <CardBlock>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </CardBlock>
      <CardBlock>
        <CardLink href="#">اقرأ المزيد</CardLink>
      </CardBlock>
    </Card>
</div>
  <div className='blogs-images'>
  <img className='blog-image' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
    <Card>
      <CardBlock>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </CardBlock>
      <CardBlock>
        <CardLink href="#">اقرأ المزيد</CardLink>
      </CardBlock>
    </Card>
  </div>
    </div>
   </div>
  );
};
export default blogs;
