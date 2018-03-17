import React from 'react';
import Action from '../action';
import A11A11yIntention from '../a11y-intention';
import Timer from '../timer';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer interval={1500} callback={time => console.log(time)} />
        <A11A11yIntention>
          <Action text="Gather wood" />
        </A11A11yIntention>
      </div>
    );
  }
}
