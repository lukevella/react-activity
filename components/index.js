import React from 'react'
import {render} from 'react-dom';

import {Dots, Levels, Sentry} from '../src';

const App = React.createClass({
  render() {
    return (
      <div>
        Hello World!
        <Dots />
        <Levels />
        <Sentry />
      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
