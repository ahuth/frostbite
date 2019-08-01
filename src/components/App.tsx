import React, { useEffect, useMemo } from 'react';
import Action from './Action';
import Inventory from './Inventory';
import useIncrement from '../hooks/useIncrement';
import useLadder from '../hooks/useLadder';

const backgroundColors = ['black', 'darkGray', 'white'];

export default function App() {
  const [fire, raiseFire, lowerFire] = useLadder([0, 1, 2]);
  const [huts, addHut] = useIncrement(0, 1);
  const [wood, addWood] = useIncrement(0, 1);

  const backgroundStyles = useMemo(() => {
    return {
      backgroundColor: backgroundColors[fire],
    };
  }, [fire]);

  useEffect(() => {
    const id = window.setTimeout(lowerFire, 25000);
    return () => window.clearTimeout(id);
  }, [fire, lowerFire]);

  return (
    <div style={backgroundStyles}>
      <Action cooldown={10000} inverted={fire === 0} onClick={raiseFire} text="Stoke fire" />
      <Action cooldown={2000} onClick={addWood} text="Gather wood" />
      <Action cooldown={5000} onClick={addHut} text="Build hut" />
      <Inventory huts={huts} wood={wood} />
    </div>
  );
}
