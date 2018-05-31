import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar, NavItem} from 'react-bootstrap';
const dietiiStore = 'https://play.google.com/store/apps/details?id=com.dietiiApp.dietiiApp';
import SEO from './SEO';
const slider =  ()=>{
  return(

    <div className='slider-container'>
    <SEO
    schema="Slider"
    title="من هو دايتي"
    description="تطبيق دايتي يحتوي على وجبات محلية، يقوم بحساب السعرات الحرارية اليومية للأشخاص وكيفية التخلص من السعرات الغير لازمة بتمارين مناسب للحصول عبى جسم رشيق ووزن مناسب"
    path="/"
    contentType="product"
    />
      <Navbar className='navigation '>
        <img className='logo-apple' src='https://raw.githubusercontent.com/shahenazmonia/blog/4a3fb9bd1147f3ae8fb9fdb723bcbb71164e2c32/shape-3.png'></img>
        <img className= 'logo-img' src='https://raw.githubusercontent.com/shahenazmonia/blog/4a3fb9bd1147f3ae8fb9fdb723bcbb71164e2c32/------.png'></img>

        <Nav>
          <NavItem eventKey={1}
            href='#services' className='native'>خدماتنا</NavItem>
          <NavItem eventKey={2} href='#meals'>وجبات</NavItem>
          <NavItem eventKey={3} href="#dietiigooglestore">التطبيق</NavItem>
          <NavItem eventKey={4} >
            <Link to= {'/blogs/'} >المدونة </Link>
          </NavItem>
          <NavItem eventKey={5} href="#contactus">تواصل معنا</NavItem>
        </Nav>
      </Navbar>
      <img className='slider-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/9c602d9c9df0f01fb896e1c30cfc3567e7b42b20/vector-smart-object.png" ></img>
      <a target='_blank' className ='googlestore-a' href={dietiiStore}>  <img className='googlestore-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/4.png" ></img> </a>
      <h1 className='googlestore-text'>حمّل التطبيق الآن عبر متجر جوجل</h1>
      <img className='slider' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/header.jpg" ></img>
    </div>

  );
};


export default slider;
