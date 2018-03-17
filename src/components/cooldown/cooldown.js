import React from 'react';
import './cooldown.css';

export default class Cooldown extends React.Component {
  render() {
    const barStyles = {
      transition: this.props.active ? `width ${this.props.time}ms linear` : 'none',
      width: this.props.active ? 0 : '100%',
    };

    return (
      <div className="Cooldown">
        <span className="Cooldown-bar" style={barStyles} />
      </div>
    );
  }
}
