import { combineReducers } from 'redux';
import createReducer from './create-reducer';

export default combineReducers({
  gatherWood: createReducer('gatherWood', 'WOOD_GATHERED', 2000),
});
