const initialState = {
  huts: 0,
  wood: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HUT_BUILT':
      return Object.assign({}, state, { huts: state.huts + action.payload.amount });
    case 'WOOD_GATHERED':
      return Object.assign({}, state, { wood: state.wood + action.payload.amount });
    default:
      return state;
  }
}
