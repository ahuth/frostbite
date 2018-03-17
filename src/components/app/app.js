import React from 'react';
import Action from '../action';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Action text="Gather wood" />
      </div>
    );
  }
}
