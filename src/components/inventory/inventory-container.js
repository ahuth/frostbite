import { connect } from 'react-redux';
import Inventory from './inventory';

function mapStateToProps(state) {
  return {
    huts: state.inventory.huts,
    wood: state.inventory.wood,
  };
}

export default connect(mapStateToProps)(Inventory);
