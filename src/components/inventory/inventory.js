import React from 'react';

export default function Inventory({ wood }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Wood</td>
          <td>{wood}</td>
        </tr>
      </tbody>
    </table>
  );
}
