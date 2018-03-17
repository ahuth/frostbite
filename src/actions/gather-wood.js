export default function gatherWood(amount) {
  return {
    type: 'WOOD_GATHERED',
    payload: { amount },
  };
}
