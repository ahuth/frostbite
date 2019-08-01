import React from 'react';
import Progress from '../Progress';
import styles from './Action.module.css';

type Props = {
  cooldown: number,
  onClick: () => void,
  text: string,
};

export default function Action({ cooldown, onClick, text }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      <Progress active={false} time={cooldown} />
    </button>
  );
}
