import React from 'react'
import {render} from 'react-dom';
import Demo from './Demo';
import '../scss/styles.scss';

const App = () => (
  <div className="app-container">
    <div className="header">
      <div className="header-title">
      <h1>React Activity Indicators</h1>
      </div>
      <div className="header-links">
        <a href="https://github.com/lukevella/react-activity">View on Github</a>
      </div>
    </div>
    <Demo />
    <div className="credit">
      <img className="avatar" src="http://2.gravatar.com/avatar/dc95fb89b33917324415fa4d31f7c19a" />
      <div className="credit-text">
        Designed & Developed <br />by <a href="http://lukevella.com">Luke Vella</a>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
