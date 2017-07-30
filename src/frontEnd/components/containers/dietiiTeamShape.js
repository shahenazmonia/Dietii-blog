import {connect} from 'react-redux';
import DietiiTeam from '../dietiiTeam.js';

const mapStateToProps=(state)=>{
  return({
    app: state.app
  });
};
// const mapDispatchToProps=()=>{
//
// }

const dietiiTeamShape= connect(mapStateToProps)(DietiiTeam);

export default dietiiTeamShape;
