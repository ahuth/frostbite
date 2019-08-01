import React, { useMemo } from 'react';
import styles from './Progress.module.css';

type Props = {
  active: boolean,
  time: number,
};

export default function Progress({ active, time }: Props) {
  const barStyles = useMemo(() => {
    return {
      transition: active ? `width ${time}ms linear` : 'none',
      width: active ? 0 : '100%',
    };
  }, [active, time]);

  return (
    <div>
      <span className={styles.bar} style={barStyles} />
    </div>
  );
}
