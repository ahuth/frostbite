import React, { useState } from 'react';
import Action from './Action';
import Inventory from './Inventory';

export default function App() {
  const [wood, setWood] = useState(0);

  return (
    <div>
      <Action cooldown={2000} onClick={() => setWood(w => w + 1)} text="Gather wood" />
      <Inventory huts={0} wood={wood} />
    </div>
  );
}
