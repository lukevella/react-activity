'use strict';

import React from 'react';
import cssModules from 'react-css-modules';
import activityIndicator from '../activityIndicator';
import styles from './Levels.scss';

const Levels = React.createClass({
  render() {
    let style = {};
    if (this.props.color) {
      style.backgroundColor = this.props.color
    };
    return (
      <div styleName="loader">
        <div styleName="bar" style={style} />
        <div styleName="bar two" style={style} />
        <div styleName="bar three" style={style} />
      </div>
    );
  }
});

export default activityIndicator(cssModules(Levels, styles, {
  allowMultiple: true
}));
