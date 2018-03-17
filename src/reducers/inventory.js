const initialState = {
  wood: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WOOD_GATHERED':
      return Object.assign({}, state, { wood: state.wood + action.payload.amount });
    default:
      return state;
  }
}
