import React from 'react';
const DietiiTeam =()=>{
  return(
    <div className ='container-fluied team-container'>
      <div><h1>فريق العمل</h1></div>
      <div className='row team-images-container'>
        <div  className='col-md-4 team-img-container'>
          <a className='team-name' href="javascript:;">
            <img className='team-img' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
            <h1 className='t-name'>شهيناز منية</h1>
          </a>
        </div>
        <div   className='col-md-4 team-img-container'>
          <a  className='team-name' href="javascript:;">
            <img className='team-img' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
            <h1 className='t-name'>سلام دلول</h1>
          </a>
        </div>
        <div  className='col-md-4 team-img-container'>
          <a className='team-name' href="javascript:;">
            <img  className='team-img' src='https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-158341493.jpg'></img>
            <h1 className='t-name'>عبير الشاعر</h1>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DietiiTeam;
