import React from 'react';
import activityIndicator from '../activityIndicator';
import cssModules from 'react-css-modules';
import styles from './Dots.scss';

const Dots = React.createClass({
  render() {
    let style = {};
    if (this.props.color) {
      style.backgroundColor = this.props.color
    };
    return (
      <div styleName="loader">
        <div styleName="circle one" style={style} />
        <div styleName="circle two" style={style} />
        <div styleName="circle three" style={style} />
      </div>
    );
  }
});

export default activityIndicator(cssModules(Dots, styles, {
  allowMultiple: true
}), {
  size: 40
});
