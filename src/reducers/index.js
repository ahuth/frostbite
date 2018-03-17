import { combineReducers } from 'redux';
import disabled from './disabled';
import inventory from './inventory';

export default combineReducers({
  disabled,
  inventory,
});
