import { useEffect, useRef } from 'react';

export default function useTImeout(callback: () => void, timeout: number, active = false) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (active) {
      window.setTimeout(() => {
        callbackRef.current();
      }, timeout);
    }
  }, [active, timeout]);
}
