import React from 'react';
import Action from '../action';

export default function Actions({ hutDisabled, onHutClick, onWoodClick, woodDisabled }) {
  return (
    <div>
      <Action cooldown={2000} disabled={woodDisabled} onClick={onWoodClick} text="Gather wood" />
      <Action cooldown={5000} disabled={hutDisabled} onClick={onHutClick} text="Build hut" />
    </div>
  );
}
