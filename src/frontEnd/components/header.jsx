import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar, NavItem} from 'react-bootstrap';

const header =  ()=>{
  return(
    <div className='header-slider-container'>
      <Navbar className='navigation '>
        <img className='logo-apple' src='https://raw.githubusercontent.com/shahenazmonia/blog/4a3fb9bd1147f3ae8fb9fdb723bcbb71164e2c32/shape-3.png'/>
        <Link to={'/'}> <img className= 'logo-img' src='https://raw.githubusercontent.com/shahenazmonia/blog/4a3fb9bd1147f3ae8fb9fdb723bcbb71164e2c32/------.png' />
        </Link>
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

      <img className='slider-header' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/Screenshot%20from%202018-01-24%2011-33-16.png" />
    </div>

  );
};


export default header;
