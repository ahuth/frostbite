import React, { useEffect, useState } from 'react';
import Progress from '../Progress';
import styles from './Action.module.css';

type Props = {
  cooldown: number,
  onClick: () => void,
  text: string,
};

export default function Action({ cooldown, onClick, text }: Props) {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    onClick();
    setDisabled(true);
  }

  useEffect(() => {
    if (disabled) {
      window.setTimeout(() => {
        setDisabled(false);
      }, cooldown);
    }
  }, [cooldown, disabled]);

  return (
    <button className={styles.button} disabled={disabled} onClick={handleClick}>
      {text}
      <Progress active={disabled} time={cooldown} />
    </button>
  );
}
