import { connect } from 'react-redux';
import Inventory from './inventory';

function mapStateToProps(state) {
  return {
    huts: state.huts.inventory,
    wood: state.wood.inventory,
  };
}

export default connect(mapStateToProps)(Inventory);
