import { connect } from 'react-redux';
import Actions from './actions';
import { buildHut, gatherWood } from '../../actions';

function mapStateToProps(state) {
  return {
    hutDisabled: !!state.disabled.buildHut,
    woodDisabled: !!state.disabled.gatherWood,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHutClick: () => dispatch(buildHut(1)),
    onWoodClick: () => dispatch(gatherWood(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
