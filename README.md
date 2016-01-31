# React Activity Indicators

A library of activity indicators in the form of React components.

## Demo & Examples

Live demo: https://lukevella.github.io/react-activity

To run the examples locally, run:

```bash
npm install
npm start
```

Then open `localhost:8000` in your browser.

## Install

```
npm install react-activity
```

React, ReactDOM are peer dependencies, if you haven't already installed them use:

```
npm install react react-dom
```

## Getting Started

Add the stylesheet to your app.

```html
<link href="path/to/react-activity.css" />
```

If you are using a css preprocesser, you can import the stylesheet from the
`node_modules` folder and it will be bundled with the rest of your css.

```css
@import 'path/to/node_modules/react-activity/dist/react-activity.css';
```

Import the activity indicator you would like to use and insert it into one of
your components as a child.

```js
import React from 'react';
import {render} from 'react-dom';
import {Dots} from 'react-activity';

const App = React.createClass({
  render() {
    return <Dots size={20} />;
  }
});

render(<App />, document.getElementById('app-container'))
```

## Optimizing Your Build

To avoid bundling unnecessary code and css to your project, you can import the
activity indicators individually.

```css
@import 'path/to/node_modules/react-activity/lib/Dots/Dots.css';
```

And

```js
import React from 'react';
import {render} from 'react-dom';
import Dots from 'react-activity/lib/Dots';

const App = React.createClass({
  render() {
    return <Dots />;
  }
});

render(<App />, document.getElementById('app-container'))
```

## Activity Indicators

* `Dots`
* `Levels`
* `Sentry`
* `Spinner`

## Properties

* `size: number (Default: 32)` All dimensions of the activity indicators are
specified in ems so play around with a value until you find something that
suits your needs.
* `color: string (Default: '#727981')` The active color of the indicator.
* `speed: number (Default: 1)` The relative animation speed of the indicator.


## License

See [LICENSE](https://github.com/lukevella/react-activity/blob/master/LICENSE) file.
