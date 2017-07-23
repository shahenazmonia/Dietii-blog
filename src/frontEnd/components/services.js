import React from 'react';
//import { } from 'react-bootstrap';

const services =()=>{
  return(
    <div >
      <h1 className ='serviceTitle'>خدماتنا</h1>
      <div className='services-container'>
        <div className='service-item'>
          <img src="https://raw.githubusercontent.com/shahenazmonia/blog/master/3.png"></img>
          <h2 style={{'padding-top': '24px'}}>لياقة</h2>
          <p className='service-p'>يقوم التطبيق باعطائك الخطوات والتمارين اللازمة</p>
        </div>
        <div className='service-item'>
          <img src="https://raw.githubusercontent.com/shahenazmonia/blog/master/2.png"></img>
          <h2 style={{}}>نظام غذائي</h2>
          <p className='service-p'>يوفر التطبيق نظام غذائي متكامل ومعتمد</p>
        </div>
        <div className='service-item'>
          <img src="https://raw.githubusercontent.com/shahenazmonia/blog/master/1.png"></img>
          <h2 style={{'padding-top': '20px'}}> دافع</h2>
          <p className='service-p'>تدعمك دائماً للوصول إلى هدفك</p>
        </div>

      </div>

    </div>
  );
};

export default services;
