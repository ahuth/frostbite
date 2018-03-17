import React from 'react';
import Action from '../action';
import A11A11yIntention from '../a11y-intention';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <A11A11yIntention>
          <Action text="Gather wood" />
        </A11A11yIntention>
      </div>
    );
  }
}
