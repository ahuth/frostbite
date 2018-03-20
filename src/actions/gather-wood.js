export const WOOD_GATHERED = 'WOOD_GATHERED';

export default function gatherWood(amount) {
  return {
    type: WOOD_GATHERED,
    payload: { amount },
  };
}
