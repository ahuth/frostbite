const initialState = {
  wood: 0,
};

const WOOD_GATHERED = 'WOOD_GATHERED';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WOOD_GATHERED:
      return Object.assign({}, state, { wood: state.wood + action.payload.amount });
    default:
      return state;
  }
}

export function gatherWood(amount) {
  return {
    type: WOOD_GATHERED,
    payload: { amount },
  };
}
