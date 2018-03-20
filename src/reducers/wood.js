import { combineReducers } from 'redux';
import createDisabledReducer from './create-disabled-reducer';
import createInventoryReducer from './create-inventory-reducer';
import { WOOD_GATHERED } from '../actions/gather-wood';

export default combineReducers({
  disabled: createDisabledReducer(WOOD_GATHERED, 2000),
  inventory: createInventoryReducer(WOOD_GATHERED),
});

export function getWoodDisabled(state) {
  return state.wood.disabled;
}

export function getWoodInventory(state) {
  return state.wood.inventory;
}
