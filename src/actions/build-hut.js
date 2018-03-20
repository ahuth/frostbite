export const HUT_BUILT = 'HUT_BUILT';

export default function buildHut(amount) {
  return {
    type: HUT_BUILT,
    payload: { amount },
  };
}
