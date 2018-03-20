import { connect } from 'react-redux';
import Inventory from './inventory';
import { getHutsInventory } from '../../reducers/huts';
import { getWoodInventory } from '../../reducers/wood';

function mapStateToProps(state) {
  return {
    huts: getHutsInventory(state),
    wood: getWoodInventory(state),
  };
}

export default connect(mapStateToProps)(Inventory);
