import React from 'react'
import {render} from 'react-dom';
import Demo from './Demo';
import '../scss/styles.scss';

const App = React.createClass({
  render() {
    return (
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
      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
