import "./Demo.css";

import React from "react";
import {
  Dots,
  Bounce,
  Digital,
  Sentry,
  Levels,
  Spinner,
  Squares,
  Windmill,
  ReactActivityIndicatorProps,
} from "react-activity";
import Switch from "./Switch";

type Indicator = React.ComponentType<ReactActivityIndicatorProps>;
const Indicators: Record<string, Indicator> = {
  Dots,
  Bounce,
  Levels,
  Sentry,
  Spinner,
  Squares,
  Digital,
  Windmill,
};

const indicatorNames = Object.keys(Indicators);

class Demo extends React.Component<
  Record<string, unknown>,
  {
    size: number;
    speed: number;
    color: string;
    animating: boolean;
    selectedIndicator: number;
  }
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      size: 32,
      speed: 1,
      color: "#727981",
      animating: true,
      selectedIndicator: 0,
    };
    this.selectIndicator = this.selectIndicator.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeAnimating = this.onChangeAnimating.bind(this);
  }
  selectIndicator(index: number) {
    this.setState({
      selectedIndicator: index,
    });
  }
  onChangeSize(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      size: parseInt(e.target.value),
    });
  }
  onChangeSpeed(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      speed: parseFloat(e.target.value),
    });
  }
  onChangeColor(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      color: e.target.value,
    });
  }
  onChangeAnimating(value: boolean) {
    this.setState({
      animating: value,
    });
  }
  render() {
    const count = indicatorNames.length;
    const selectedIndicatorName = indicatorNames[this.state.selectedIndicator];
    const SelectedIndicator = Indicators[selectedIndicatorName];
    const { size, speed, color, animating } = this.state;
    return (
      <div className="demo">
        <h2>Demo</h2>
        <p>
          The library comes with <b>{count}</b> indicators to choose from:
        </p>
        <div className="indicators">
          {indicatorNames.map((indicatorName, i) => {
            const Indicator = Indicators[indicatorName];
            let selectedState = "unselected";
            if (this.state.selectedIndicator === i) {
              selectedState = "selected";
            }
            return (
              <div
                className={`indicator ${selectedState}`}
                key={i}
                onClick={this.selectIndicator.bind(this, i)}
              >
                <Indicator color="#FFF" />
                <div className="label">{indicatorNames[i]}</div>
              </div>
            );
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
              <input
                type="number"
                value={size}
                onChange={this.onChangeSize}
                min="16"
                max="100"
              />
            </div>
            <div className="demo-option">
              <label>Speed</label>
              <input
                type="number"
                value={speed}
                step="0.1"
                min="0.1"
                max="2"
                onChange={this.onChangeSpeed}
              />
            </div>
            <div className="demo-option">
              <label>Animating</label>
              <Switch onChange={this.onChangeAnimating} active={animating} />
            </div>
          </div>
          <div className="demo-output">
            <h3>Code</h3>
            <pre>{`<${selectedIndicatorName} color="${color}" size=\{${size}\} speed=\{${speed}\} animating=\{${animating}\} />`}</pre>
            <h3>Render</h3>
            <div className="canvas">
              <SelectedIndicator
                color={color}
                size={size}
                speed={speed}
                animating={animating}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
