const initialState = {
  gatherWood: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WOOD_GATHERED':
      return Object.assign({}, state, { gatherWood: performance.now() });
    default:
      return state;
  }
}
