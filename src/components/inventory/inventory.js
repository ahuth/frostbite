import React from 'react';

export default function Inventory({ huts, wood }) {
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
