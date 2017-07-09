import React from 'react';


const meals =({app})=>{
return(
  <div>
  <h1 className='mealsTitle'> قائمة الوجبات </h1>

<div className='mealscontainer'>
<div className='meals-images'>  <img className='mealimage' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-133972145.jpg"></img></div>
<div className='meals-images'><img className='mealimage' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-78329919.jpg"></img></div>
<div className='meals-images'>  <img className='mealimage' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-114413503.jpg"></img></div>
<div className='meals-images'>  <img className='mealimage' src="https://raw.githubusercontent.com/shahenazmonia/blog/master/stock-photo-201760443.jpg"></img></div>
</div>
</div>
);
};

export default meals;
