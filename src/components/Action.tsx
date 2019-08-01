import React from 'react';

type Props = {
  cooldown: number,
  onClick: () => void,
  text: string,
};

export default function Action({ cooldown, onClick, text }: Props) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
