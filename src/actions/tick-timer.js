export default function tickTimer(time) {
  return {
    type: 'TIMER_TICKED',
    payload: { time },
  };
}
