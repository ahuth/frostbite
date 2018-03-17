import { connect } from 'react-redux';
import Actions from './actions';
import { gatherWood } from '../../actions';

function mapStateToProps(state) {
  return {
    woodDisabled: !!state.disabled.gatherWood,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onWoodClick: () => dispatch(gatherWood(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
