# React Activity Indicators

[![Build Status](https://travis-ci.org/lukevella/react-activity.svg)](https://travis-ci.org/lukevella/react-activity)
[![NPM Downloads](https://img.shields.io/npm/dm/react-activity.svg)](https://www.npmjs.com/package/react-activity)

A library of activity indicators in the form of React components.

- 🔥 8 different animations to choose from
- 🎨 Customizable color, size and animation speed
- 🕺 Small footprint. Only ~7kB if you [add a single component](#optimizing-your-build) to your bundle.
- 🆕 TypeScript support

![preview](https://user-images.githubusercontent.com/676849/37826344-579320d0-2e93-11e8-8f01-faa09385bf64.gif)

## Demo

Live demo: https://react-activity.lukevella.com

## Install

React, ReactDOM are peer dependencies, if you haven't already installed them use:

```
npm install react-activity react react-dom
```

## Getting Started

Import the activity indicators you would like to use along with its corresponding css file.

```jsx
import React from "react";
import { render } from "react-dom";

import { Dots } from "react-activity";
import "react-activity/dist/library.css";

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
import "react-activity/dist/Dots.css";

const App = () => {
  return <Dots />;
};

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

## Props

All indicators support the following props:

- `size: number` All dimensions of the activity indicators are
  specified in ems so play around with a value until you find something that
  suits your needs.
- `color: string` The active color of the indicator.
- `speed: number (default: 1)` The relative animation speed of the indicator.
- `animating: boolean (default: true)` Whether to show the indicator (true) or hide it (false).
- `style: React.CSSProperties (default: undefined)` Custom styling to be applied to the container.
- `className: string (default: undefined)` Custom className to be applied to the container.

## License

See [LICENSE](https://github.com/lukevella/react-activity/blob/gh-pages/LICENSE) file.
