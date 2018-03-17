import React from 'react';
import Action from '../action';

export default function Actions({ onWoodClick, woodDisabled }) {
  return (
    <div>
      <Action cooldown={2000} disabled={woodDisabled} onClick={onWoodClick} text="Gather wood" />
    </div>
  );
}
