import React from 'react'
import {render} from 'react-dom';
import {Dots, Levels, Sentry} from '../src';
import './styles.scss';

const App = React.createClass({
  render() {
    return (
      <div className="app-container">
        <h1>React Activity Indicators</h1>
        <h2>The Indicators</h2>
        <ul className="indicators">
          <li className="indicator">
            <Dots size={50} />
            <div className="label">
              Dots
            </div>
          </li>
          <li className="indicator">
            <Levels size={30} />
            <div className="label">
              Levels
            </div>
          </li>
          <li className="indicator">
            <Sentry size={40} />
            <div className="label">
              Sentry
            </div>
          </li>
        </ul>
        <h2>Change Size</h2>
        <ul className="indicators">
          <li className="indicator">
            <Dots size={30} />
            <div className="label">
              Size: 30
            </div>
          </li>
          <li className="indicator">
            <Dots size={50} />
            <div className="label">
              Size: 50
            </div>
          </li>
          <li className="indicator">
            <Dots size={120} />
            <div className="label">
              Size: 120
            </div>
          </li>
        </ul>
        <h2>Change Color</h2>
        <ul className="indicators">
          <li className="indicator">
            <Dots size={50} color="#A28ACD" />
            <div className="label">
              Color: #A28ACD
            </div>
          </li>
          <li className="indicator">
            <Levels size={30} color="#1CB4E4" />
            <div className="label">
              Color: #1CB4E4
            </div>
          </li>
          <li className="indicator">
            <Sentry size={40} color="#26BBBE" />
            <div className="label">
              Color: #26BBBE
            </div>
          </li>
        </ul>
      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
