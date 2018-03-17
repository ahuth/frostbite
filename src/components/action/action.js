import React from 'react';
import './action.css';

export default function Action({ disabled, onClick, text }) {
  return (
    <button
      className="Action"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
