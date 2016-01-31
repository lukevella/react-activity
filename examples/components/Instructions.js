'use strict';
import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="instructions">
        <h2>Instructions</h2>
        <p>1. Install the package in your react project</p>
        <pre>npm install —save react-activity</pre>
        <p>2. Create your own custom activity indicator</p>
        <pre>
        {'import React from \'react\'\;\n'}
        {'import \{Dots} from \'react-activity\';\n\n'}

          {'class MyActivityIndicator extends React.Component \{\n'}
            {'\trender() \{\n'}
              {'\t\treturn <Dots />;\n'}
            {'\t}\n'}
          {'\}'}
        </pre>
        <p>3. Add the css for the indicator you would like to use</p>
        <pre>@import “path/to/node_modules/react-activity/lib/Levels/Levels.css”</pre>
      </div>
    );
  }
})
