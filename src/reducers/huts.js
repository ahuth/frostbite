import { combineReducers } from 'redux';
import createDisabledReducer from './create-disabled-reducer';
import createInventoryReducer from './create-inventory-reducer';
import { HUT_BUILT } from '../actions/build-hut';

export default combineReducers({
  disabled: createDisabledReducer(HUT_BUILT, 5000),
  inventory: createInventoryReducer(HUT_BUILT),
});

export function getHutsDisabled(state) {
  return state.huts.disabled;
}

export function getHutsInventory(state) {
  return state.huts.inventory;
}
