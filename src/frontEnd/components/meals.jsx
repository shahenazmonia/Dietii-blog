import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import url from '../helper/getImagesURL';
import PropTypes from 'prop-types';
import {RingLoader} from 'react-spinners';
import {mealsMenu} from '../constants/componentStaticVariables';
const randomIntFromInterval = (min,max) =>{

  return Math.floor(Math.random()*(max-min+1)+min);
};
class meals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const {fetchMeals} = this.props;
    fetchMeals();
  }
  componentWillReceiveProps(){
    const {meals} = this.props;
    if(meals.results)url(meals.results);
  }

  render() {
    const {meals, fetchMeal} = this.props;
    return(
      <div className='mealscontainer'>
        <h1 className='mealsTitle'> {mealsMenu} </h1>
        <div className='imagescontainer' id='meals' >
          { (!meals.isFetching && meals.meals.results) ?
            meals.meals.results.map((value,index)=>{
              if(value.image){
                // index=randomIntFromInterval(0,100);
                // console.log(index.indexOf(3));
                { if(index<=5)
                  // value[index ++];
                  return( <Link onClick={() => fetchMeal(value.objectId)}
                    to={`/meal/${value.objectId}`}
                    key={value.objectId} className='meals-images'>
                    <img className="mealimage" src={value.image.url }
                      key={value.image.url} />
                    <div className='meals-img-name'>
                      <p> {value.name} </p>
                    </div>
                  </Link>);}}else {
                <div> <h1> loading</h1></div>;
              }
            }
            ) :
            <div className='sweet-loading'>
              <RingLoader
                color={'#ff8094'}
                loading={this.state.loading}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

meals.propTypes = {
  fetchMeals: PropTypes.func,
  meals: PropTypes.object,
  fetchMeal: PropTypes.func
};

export default meals;
