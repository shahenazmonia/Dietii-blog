import React from 'react';
const contactUs =()=>{
  return(
    <div className ='container-fluied team-container'>
      <div className='row'>
        <div className=' col-md-6'>
          <div className=' team-images-container'>
            <a target='_blank' href='https://www.facebook.com/ditihealth/' className=' team-img-container'>
              <i className='fab fa-facebook-square'></i>
            </a>
            <a href='' className='team-img-container'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className= 'team-img-container'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
        <div className='col-md-6'>
          <p className='dietii-sig'>جميع الحقوق محفوظة : دايتي</p>
        </div>


      </div>
    </div>
  );
};
export default contactUs;
