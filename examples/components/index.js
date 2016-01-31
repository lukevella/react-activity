import React from 'react'
import {render} from 'react-dom';
import Demo from './Demo';
import Instructions from './Instructions';
import '../scss/styles.scss';

const App = React.createClass({
  render() {
    return (
      <div className="app-container">
        <h1>React Activity Indicators</h1>
        <Demo />
        <Instructions />
      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
