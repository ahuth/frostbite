export default function createDisabledReducer(disableType, enableInterval) {
  const initialState = false;

  return function reducer(state = initialState, action) {
    switch(action.type) {
      case disableType:
        return performance.now();
      case 'TIMER_TICKED':
        if (state && action.payload.time - state >= enableInterval) {
          return false;
        }
        return state;
      default:
        return state;
    }
  }
}
