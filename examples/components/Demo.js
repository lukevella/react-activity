'use strict';
import React from 'react';
import {Dots, Levels, Sentry, Spinner} from '../../src';
import './Demo.scss';

export default React.createClass({
  getDefaultProps() {
    return {
      defaultSize: 32,
      defaultSpeed: 1,
      defaultColor: '#727981'
    };
  },
  getInitialState() {
    return {
      selectedIndicator: Dots
    };
  },
  selectIndicator(Indicator) {
    this.setState({
      selectedIndicator: Indicator,
    });
  },
  onChangeSize(e) {
    this.setState({
      size: parseInt(e.target.value)
    });
  },
  onChangeSpeed(e) {
    this.setState({
      speed: parseFloat(e.target.value)
    });
  },
  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  },
  render() {
    const indicators = [Dots, Levels, Sentry, Spinner];
    const count = indicators.length;
    const SelectedIndicator = this.state.selectedIndicator || Dots;
    const size = this.state.size || this.props.defaultSize;
    const speed = this.state.speed || this.props.defaultSpeed;
    const color = this.state.color || this.props.defaultColor;
    return (
      <div className="demo">
        <h2>Demo</h2>
        <p>The library comes with <b>{count}</b> indicators to choose from </p>
        <div className="indicators">
          {indicators.map((Indicator, i) => {
            return (
              <div className="indicator" key={i} onClick={this.selectIndicator.bind(this, Indicator)}>
                <Indicator />
                <div className="label">{Indicator.displayName}</div>
              </div>
            )
          })}
        </div>
        <div className="demo-container">
          <div className="demo-options">
            <h3>Options</h3>
            <div className="demo-option">
              <label>Color</label>
              <input type="text" value={color} onChange={this.onChangeColor} />
            </div>
            <div className="demo-option">
              <label>Size</label>
              <input type="number" value={size} onChange={this.onChangeSize} min="16" max="100"/>
            </div>
            <div className="demo-option">
              <label>Speed</label>
              <input type="number" value={speed} step="0.1" min="0.1" max="2" onChange={this.onChangeSpeed}/>
            </div>
          </div>
          <div className="demo-output">
            <h3>Code</h3>
            <pre>{`<${SelectedIndicator.displayName} color="${color}" size=\{${size}\} speed=\{${speed}\} />`}</pre>
            <h3>Render</h3>
            <SelectedIndicator color={color} size={size} speed={speed} />
          </div>
        </div>
      </div>
    );
  }
})
