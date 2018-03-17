import React from 'react';
import './action.css';

export default function Action({ onClick, text }) {
  return <button className="Action" onClick={onClick}>{text}</button>;
}
