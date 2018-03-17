import React from 'react';
import Cooldown from '../cooldown';
import './action.css';

export default function Action({ cooldown, disabled, onClick, text }) {
  return (
    <button className="Action" disabled={disabled} onClick={onClick}>
      {text}
      <Cooldown active={disabled} time={cooldown} />
    </button>
  );
}
