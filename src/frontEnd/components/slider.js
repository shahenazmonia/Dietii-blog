import React from 'react';
import {Nav,Navbar, NavItem,MenuItem,NavDropdown , alert} from 'react-bootstrap';

function handleSelect(selectedKey) {
alert('selected ' + selectedKey);
}


 const slider =  ({app})=>{
  return(
<div className='slider-container'>
  <Navbar className='navigation'>
     <Navbar.Header>
       <Navbar.Brand>
          <a href="#">خدماتنا</a>
       </Navbar.Brand>
     </Navbar.Header>
     <Nav>
       <NavItem eventKey={1} href="#">واجبات</NavItem>
       <NavItem eventKey={2} href="#">التطبيق</NavItem>
     </Nav>
   </Navbar>
   <img className='slider-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/6.png" ></img>
   <img className='googlestore-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/4.png" ></img>
    <img className='slider' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/header.jpg" ></img>
</div>

  );
};


export default slider;
