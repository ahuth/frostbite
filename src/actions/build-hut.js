export default function buildHut(amount) {
  return {
    type: 'HUT_BUILT',
    payload: { amount },
  };
}