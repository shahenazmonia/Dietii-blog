import React from 'react';
const contactUs =()=>{
  return(
    <div className ='container-fluied team-container'>

      <div><h1 className='teamTitile'>تواصل معنا</h1></div>
      <div className='row team-images-container'>
        <div  className='col-md-4 team-img-container'>
          <i className='fab fa-facebook-square'></i>
        </div>
        <div   className='col-md-4 team-img-container'>
          <i className='fab fa-twitter'></i>
        </div>
        <div  className='col-md-4 team-img-container'>
          <img className='instagram-icon' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/if_Instagram_1298747.png'/>
        </div>
      </div>
    </div>
  );
};
export default contactUs;
