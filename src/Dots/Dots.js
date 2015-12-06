import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Dots.scss';

const ActivityIndicatorDots = React.createClass({
  render() {
    return (
      <div styleName="loader">
        <div styleName="circle one" />
        <div styleName="circle two" />
        <div styleName="circle three" />
      </div>
    );
  }
});

export default CSSModules(ActivityIndicatorDots, styles, {allowMultiple: true});
