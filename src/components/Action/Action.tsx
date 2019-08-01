import React from 'react';
import styles from './Action.module.css';

type Props = {
  cooldown: number,
  onClick: () => void,
  text: string,
};

export default function Action({ cooldown, onClick, text }: Props) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>{text}</button>
    </div>
  );
}
