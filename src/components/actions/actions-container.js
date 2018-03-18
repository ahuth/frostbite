import { connect } from 'react-redux';
import Actions from './actions';
import { buildHut } from '../../reducers/huts';
import { gatherWood } from '../../reducers/wood';

function mapStateToProps(state) {
  return {
    hutDisabled: !!state.huts.disabled,
    woodDisabled: !!state.wood.disabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHutClick: () => dispatch(buildHut(1)),
    onWoodClick: () => dispatch(gatherWood(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
