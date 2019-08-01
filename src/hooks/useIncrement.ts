import { useCallback, useState } from 'react';

export default function useIncrement(initial = 0, interval = 1): [number, () => void] {
  const [state, setState] = useState(initial);
  const add = useCallback(() => setState(val => val + interval), [interval]);
  return [state, add];
}
