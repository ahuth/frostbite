import { useCallback, useState } from 'react';

export default function useLadder<T>(values: Array<T>): [T, () => void, () => void] {
  const [index, setIndex] = useState(0);

  const raise = useCallback(() => {
    setIndex((current) => {
      const next = current + 1;
      return Math.min(next, values.length - 1);
    });
  }, [values.length]);

  const lower = useCallback(() => {
    setIndex((current) => {
      const next = current - 1;
      return Math.max(next, 0);
    });
  }, []);

  return [values[index], raise, lower];
}
