import { combineReducers } from 'redux';
import createDisabledReducer from './create-disabled-reducer';
import createInventoryReducer from './create-inventory-reducer';

const WOOD_GATHERED = 'WOOD_GATHERED';

export default combineReducers({
  disabled: createDisabledReducer(WOOD_GATHERED, 2000),
  inventory: createInventoryReducer(WOOD_GATHERED),
});

export function gatherWood(amount) {
  return {
    type: WOOD_GATHERED,
    payload: { amount },
  };
}
