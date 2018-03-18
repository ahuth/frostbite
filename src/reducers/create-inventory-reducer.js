export default function createInventoryReducer(addType) {
  const initialState = 0;

  return function reducer(state = initialState, action) {
    switch (action.type) {
      case addType:
        return state + action.payload.amount;
      default:
        return state;
    }
  }
}
