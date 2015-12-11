import React from 'react'
import {render} from 'react-dom';
import {Dots, Levels, Sentry, Spinner} from '../src';
import './styles.scss';

const App = React.createClass({
  render() {
    const indicators = [Dots, Levels, Sentry, Spinner];
    const count = indicators.length;
    return (
      <div className="app-container">
        <h1>React Activity Indicators</h1>
        <h2>Meet the Indicators</h2>
        <p>The library comes with <b>{count}</b> indicators to choose from. More coming soon!</p>
        <div className="indicators">
          {indicators.map((Indicator, i) => {
            return (
              <div className="indicator" key={i}>
                <Indicator />
                <div className="label">{Indicator.displayName}</div>
              </div>
            )
          })}
        </div>
        <h2>Instructions</h2>
        <p>1. Install the package in your react project</p>
        <pre>npm install —save react-activity-indicators</pre>
        <p>2. Create your own custom activity indicator</p>
        <pre>
        {'import React from \'react\'\;\n'}
        {'import \{Levels} from \'react-activity-indicator\';\n\n'}

          {'class MyActivityIndicator extends React.Component \{\n'}
            {'\trender() \{\n'}
              {'\t\treturn <Dots />;\n'}
            {'\t}\n'}
          {'\}'}
        </pre>
        <p>3. Add the css for the indicator you would like to use</p>
        <pre>@import “path/to/node_modules/react-activity-indicator/lib/Levels/Levels.css”</pre>

        <h2>Customze</h2>
        <p>You customize the size, color and animation speed of any of the indicators.</p>
        <pre>{'<Dots size=\{30\} color="#8151AB" speed=\{2\} />'}</pre>
        <Dots size={100} speed={2} />

      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
