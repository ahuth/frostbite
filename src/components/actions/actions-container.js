import { connect } from 'react-redux';
import Actions from './actions';
import { gatherWood } from '../../reducers/inventory';

function mapDispatchToProps(dispatch) {
  return {
    onWoodClick: () => dispatch(gatherWood(1)),
  };
}

export default connect(null, mapDispatchToProps)(Actions);
