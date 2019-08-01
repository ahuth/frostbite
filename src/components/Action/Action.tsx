import React, { useEffect, useState } from 'react';
import Progress from '../Progress';
import styles from './Action.module.css';

type Props = {
  cooldown: number,
  inverted?: boolean,
  onClick: () => void,
  text: string,
};

export default function Action({ cooldown, inverted = false, onClick, text }: Props) {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    onClick();
    setDisabled(true);
  }

  useEffect(() => {
    if (disabled) {
      const id = window.setTimeout(() => setDisabled(false), cooldown);
      return () => window.clearTimeout(id);
    }
  }, [cooldown, disabled]);

  return (
    <button className={inverted ? styles.inverted : styles.button} disabled={disabled} onClick={handleClick}>
      {text}
      <Progress active={disabled} time={cooldown} />
    </button>
  );
}
