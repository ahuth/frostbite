import React from 'react';
import Action from './Action';
import Inventory from './Inventory';
import useIncrement from '../hooks/useIncrement';

export default function App() {
  const [huts, addHut] = useIncrement(0, 1);
  const [wood, addWood] = useIncrement(0, 1);

  return (
    <div>
      <Action cooldown={2000} onClick={addWood} text="Gather wood" />
      <Action cooldown={5000} onClick={addHut} text="Build hut" />
      <Inventory huts={huts} wood={wood} />
    </div>
  );
}
