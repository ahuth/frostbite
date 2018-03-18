import { combineReducers } from 'redux';
import createDisabledReducer from './create-disabled-reducer';
import createInventoryReducer from './create-inventory-reducer';

const HUT_BUILT = 'HUT_BUILT';

export default combineReducers({
  disabled: createDisabledReducer(HUT_BUILT, 5000),
  inventory: createInventoryReducer(HUT_BUILT),
});

export function buildHut(amount) {
  return {
    type: HUT_BUILT,
    payload: { amount },
  };
}
