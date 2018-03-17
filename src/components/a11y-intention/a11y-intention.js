import React from 'react';
import './a11y-intention.css';

export default class A11yIntention extends React.Component {
  state = { keyboard: false };

  handleKeyDown = () => {
    this.setState({ keyboard: true });
  }

  handleMouseDown = () => {
    this.setState({ keyboard: false });
  }

  render() {
    return (
      <div
        className={this.state.keyboard ? 'A11y-keyboard' : 'A11y-mouse'}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
      >
        {this.props.children}
      </div>
    );
  }
}
