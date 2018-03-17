import React from 'react';
import Actions from '../actions';
import A11yIntention from '../a11y-intention';
import Inventory from '../inventory';
import Timer from '../timer';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer interval={1500} callback={time => console.log(time)} />
        <A11yIntention>
          <Actions />
          <Inventory />
        </A11yIntention>
      </div>
    );
  }
}
