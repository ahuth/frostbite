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
        <Timer interval={500} callback={this.props.onTimer} />
        <A11yIntention>
          <Actions />
          <Inventory />
        </A11yIntention>
      </div>
    );
  }
}
