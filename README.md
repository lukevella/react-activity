# React Activity Indicators

[![Build Status](https://travis-ci.org/lukevella/react-activity.svg)](https://travis-ci.org/lukevella/react-activity)
[![NPM Downloads](https://img.shields.io/npm/dm/react-activity.svg)](https://www.npmjs.com/package/react-activity)

A library of activity indicators in the form of React components.

![preview](https://user-images.githubusercontent.com/676849/37826344-579320d0-2e93-11e8-8f01-faa09385bf64.gif)

## Demo & Examples

Live demo: https://react-activity.lukevella.com

To run the examples locally, run:

```bash
yarn && yarn start
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Install

React, ReactDOM are peer dependencies, if you haven't already installed them use:

```
npm install react-activity react react-dom
```

## Getting Started

Import the activity indicators you would like to use along with the css file. Use the activity indicator component like you would any other component.

```jsx
import React from "react";
import { render } from "react-dom";
import { Dots } from "react-activity";

const App = () => {
  return <Dots />;
};

render(<App />, document.getElementById("app-container"));
```

## Optimizing Your Build

To avoid bundling unnecessary code and css to your project, you can import the
activity indicators individually.

```js
import React, { Component } from "react";
import { render } from "react-dom";
import Dots from "react-activity/dist/Dots";

const App = () => {
  return <Dots />
}

render(<App />, document.getElementById("app-container"));
```

## Activity Indicators

- `Dots`
- `Levels`
- `Sentry`
- `Spinner`
- `Squares`
- `Digital`
- `Bounce`
- `Windmill`

## Properties

- `size: number` All dimensions of the activity indicators are
  specified in ems so play around with a value until you find something that
  suits your needs.
- `color: string` The active color of the indicator.
- `speed: number (Default: 1)` The relative animation speed of the indicator.
- `animating: boolean (Default: true)` Whether to show the indicator (true) or hide it (false).

## License

See [LICENSE](https://github.com/lukevella/react-activity/blob/gh-pages/LICENSE) file.
