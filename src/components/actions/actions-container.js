import { connect } from 'react-redux';
import Actions from './actions';
import { buildHut, gatherWood } from '../../actions';
import { getHutsDisabled } from '../../reducers/huts';
import { getWoodDisabled } from '../../reducers/wood';

function mapStateToProps(state) {
  return {
    hutDisabled: !!getHutsDisabled(state),
    woodDisabled: !!getWoodDisabled(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHutClick: () => dispatch(buildHut(1)),
    onWoodClick: () => dispatch(gatherWood(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
