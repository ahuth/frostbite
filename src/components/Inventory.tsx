import React from 'react';

type Props = {
  huts: number,
  wood: number;
};

export default function Inventory({ huts, wood }: Props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Wood</td>
          <td>{wood}</td>
        </tr>
        <tr>
          <td>Huts</td>
          <td>{huts}</td>
        </tr>
      </tbody>
    </table>
  );
}
