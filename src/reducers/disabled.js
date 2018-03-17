const initialState = {
  gatherWood: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WOOD_GATHERED':
      return Object.assign({}, state, { gatherWood: performance.now() });
    case 'TIMER_TICKED':
      if (state.gatherWood && action.payload.time - state.gatherWood >= 2000) {
        return Object.assign({}, state, { gatherWood: false });
      }
      return state;
    default:
      return state;
  }
}
