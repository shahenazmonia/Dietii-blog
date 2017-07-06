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
   <img className='slider-img' src="https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/19679775_10209485783481089_1261212657_n.png?oh=fcacf6045f5233b43642f9cba664047b&oe=595E17D7" ></img>
   <img className='googlestore-img' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/4.png" ></img>
    <img className='slider' src="https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/19692394_10209466230432275_974313275_n.jpg?oh=1d0d793db09843d72b230c677b140cd0&oe=595AEF23" ></img>
</div>

  );
}


export default slider;
