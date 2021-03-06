import React, {Component} from 'react';
import Header from './containers/header.js';
import Meals from './containers/meals.js';
import propTypes from 'prop-types';
import Footer from './containers/footerShape.js';
class meal extends Component {

  componentDidMount() {
    const objectId = this.props.match.params.id;
    this.props.fetchMeal(objectId);
  }

  render(){
    const {meal} = this.props;
    return(
      <div>
        <Header></Header>
        <div className='container'>

          {
            (() => {
              if (meal.meal.image){
                return (<div className='col-md-5'>
                <SEO
                  schema="Meals"
                  title={meal.meal.name}
                  description={meal.meal.resipe}
                  path="dietii-blog.herokuapp.com/#meal"
                  contentType="product"
                />
                  <img className='meal-image img-responsive' src={meal.meal.image.url}
                    key={meal.meal.image}/>
                </div>);
              }else {
                return null;
              }})()

          }

          <div className='col-md-7 meal-content'>
            <h2>{meal.meal.name}</h2>
            <p className='meal-description'>{meal.meal.resipe}</p>
            <a className='meal-app-link' href ='https://play.google.com/store/apps/details?id=com.dietiiApp.dietiiApp&hl=ar '> الوجبة داخل التطبيق</a>
          </div>

        </div>
        <div>
          <Meals></Meals>

        </div>
          <div className='meal-footer'> <Footer></Footer></div>
      </div>);



  }
}

meal.propTypes={
  fetchMeal : propTypes.func,
  meal: propTypes.object
};
export default meal;
