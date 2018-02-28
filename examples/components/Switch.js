import React from 'react';
import './Switch.scss';

class Switch extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.onChange(!this.props.active)}
        className={`switch ${this.props.active ? 'switch--on' : ''}`}
      >
        <div className="switch-trigger">
        </div>
      </div>
    )
  }
}

export default Switch;
