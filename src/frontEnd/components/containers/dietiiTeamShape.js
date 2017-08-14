import {connect} from 'react-redux';
import DietiiTeam from '../dietiiTeam.jsx';

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
