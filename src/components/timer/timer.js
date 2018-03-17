import React from 'react';

export default class Timer extends React.Component {
  componentDidMount() {
    this.intervalId = window.setInterval(this.handleInterval, this.props.interval);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  handleInterval = () => {
    this.props.callback(performance.now());
  }

  render () {
    return null;
  }
}
