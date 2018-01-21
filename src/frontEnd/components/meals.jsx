import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import url from '../helper/getImagesURL';
class meals extends Component {

  componentDidMount() {
    const {fetchMeals} = this.props;
    fetchMeals();
  }
  componentWillReceiveProps(){
    const {meals} = this.props;
    // console.log('log',meals);
    if(meals.results)url(meals.results);
  }

  render() {
    const {meals} = this.props;
    // console.log('xxx',meals.meals.results);

    return(
      <div className='mealscontainer'>
        <h1 className='mealsTitle'> قائمة الوجبات </h1>
        <div className='imagescontainer' id='meals' >
          { (!meals.isFetching && meals.meals.results) ?
            meals.meals.results.map((value,index)=>{
              if(value.image){
                { if(index <= 3)
                  return(<Link to={`/meal/${value.objectId}`} key={value.objectId} className='meals-images' > 
                    <img  className="mealimage"  src={value.image.url } key={value.image.url}  />

                  </Link>);}}else {
                <div> <h1> loading</h1></div>;
              }
            }
            ) :
            <div>
              <h1>Loading</h1>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default meals;
