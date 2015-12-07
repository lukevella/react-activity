'use strict';
import React from 'react';
import cssModules from 'react-css-modules';
import activityIndicator from '../activityIndicator';
import styles from './Sentry.scss';

const Sentry = React.createClass({
  render() {
    let style = {};
    if (this.props.color) {
      style.borderColor = this.props.color
    };
    return (
      <div styleName="loader-container">
        <div styleName="loader">
          <div styleName="circle" style={style} />
        </div>
        <div styleName="loader">
          <div styleName="circle two" style={style} />
        </div>
      </div>
    );
  }
});

export default activityIndicator(cssModules(Sentry, styles, {
  allowMultiple: true
}), {
  size: 24
});
