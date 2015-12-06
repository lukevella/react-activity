'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Sentry.scss';

const Sentry = React.createClass({
  render() {
    return (
      <div styleName="loader-container">
        <div styleName="loader">
          <div styleName="circle" />
        </div>
        <div styleName="loader">
          <div styleName="circle delay" />
        </div>
      </div>
    );
  }
});

export default CSSModules(Sentry, styles, {allowMultiple: true});
