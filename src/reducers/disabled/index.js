import { combineReducers } from 'redux';
import createReducer from './create-reducer';

export default combineReducers({
  buildHut: createReducer('buildHut', 'HUT_BUILT', 5000),
  gatherWood: createReducer('gatherWood', 'WOOD_GATHERED', 2000),
});
