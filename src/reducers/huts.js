import { combineReducers } from 'redux';
import createDisabledReducer from './create-disabled-reducer';
import createInventoryReducer from './create-inventory-reducer';

export default combineReducers({
  disabled: createDisabledReducer('HUT_BUILT', 5000),
  inventory: createInventoryReducer('HUT_BUILT'),
});
