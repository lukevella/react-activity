import React from 'react';
import Indicators from '../../src';
import Switch from './Switch';
import './Demo.scss';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const indicatorNames = Object.keys(Indicators);
    this.state = {
      size: 32,
      speed: 1,
      color: '#727981',
      animating: true,
      selectedIndicator: Indicators[indicatorNames[0]],
    };
    this.selectIndicator = this.selectIndicator.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeAnimating = this.onChangeAnimating.bind(this);
  }
  selectIndicator(Indicator) {
    this.setState({
      selectedIndicator: Indicator,
    });
  }
  onChangeSize(e) {
    this.setState({
      size: parseInt(e.target.value)
    });
  }
  onChangeSpeed(e) {
    this.setState({
      speed: parseFloat(e.target.value)
    });
  }
  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  }
  onChangeAnimating(value) {
    this.setState({
      animating: value,
    });
  }
  render() {
    const indicatorNames = Object.keys(Indicators);
    const count = indicatorNames.length;
    const SelectedIndicator = this.state.selectedIndicator;
    const {size, speed, color, animating} = this.state;
    return (
      <div className="demo">
        <h2>Demo</h2>
        <p>The library comes with <b>{count}</b> indicators to choose from:</p>
        <div className="indicators">
          {indicatorNames.map((indicatorName, i) => {
            const Indicator = Indicators[indicatorName];
            let selectedState = 'unselected';
            if (Indicator.displayName === SelectedIndicator.displayName) {
              selectedState = 'selected';
            }
            return (
              <div className={`indicator ${selectedState}`} key={i} onClick={this.selectIndicator.bind(this, Indicator)}>
                <Indicator color="#FFF" />
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
            <div className="demo-option">
              <label>Animating</label>
              <Switch onChange={this.onChangeAnimating} active={animating} />
            </div>
          </div>
          <div className="demo-output">
            <h3>Code</h3>
            <pre>{`<${SelectedIndicator.displayName} color="${color}" size=\{${size}\} speed=\{${speed}\} animating=\{${animating}\} />`}</pre>
            <h3>Render</h3>
            <div className="canvas">
              <div>
                <SelectedIndicator color={color} size={size} speed={speed} animating={animating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
