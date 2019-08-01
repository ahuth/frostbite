import React, { useCallback, useState } from 'react';
import Progress from '../Progress';
import useTimeout from '../../hooks/useTimeout';
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

  useTimeout(
    useCallback(() => setDisabled(false), []),
    cooldown,
    disabled,
  );

  return (
    <button className={inverted ? styles.inverted : styles.button} disabled={disabled} onClick={handleClick}>
      {text}
      <Progress active={disabled} time={cooldown} />
    </button>
  );
}
