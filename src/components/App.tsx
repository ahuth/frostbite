import React, { useState } from 'react';
import Action from './Action';
import Inventory from './Inventory';

export default function App() {
  const [huts, setHuts] = useState(0);
  const [wood, setWood] = useState(0);

  return (
    <div>
      <Action cooldown={2000} onClick={() => setWood(w => w + 1)} text="Gather wood" />
      <Action cooldown={5000} onClick={() => setHuts(h => h + 1)} text="Build hut" />
      <Inventory huts={huts} wood={wood} />
    </div>
  );
}
