import React from 'react';
import Action from '../action';

export default function Actions({ onWoodClick }) {
  return (
    <div>
      <Action onClick={onWoodClick} text="Gather wood" />
    </div>
  );
}
