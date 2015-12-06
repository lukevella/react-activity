'use strict';

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Levels.scss';

const Levels = React.createClass({
  render() {
    return (
      <div styleName="loader">
        <div styleName="bar" />
        <div styleName="bar two" />
        <div styleName="bar three" />
      </div>
    );
  }
});

export default CSSModules(Levels, styles, {
  allowMultiple: true
});
