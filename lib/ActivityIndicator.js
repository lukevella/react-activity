'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (ComposedComponent, defaultAnimationDuration) {
  return _react2['default'].createClass({
    displayName: ComposedComponent.displayName,
    propTypes: {
      animationDuration: _react.PropTypes.number.isRequired,
      speed: _react.PropTypes.number
    },
    getDefaultProps: function getDefaultProps() {
      return {
        animationDuration: defaultAnimationDuration,
        speed: 1
      };
    },
    getDelayStyle: function getDelayStyle(delay) {
      var style = {};
      if (delay) {
        style.animationDelay = '-' + delay * (1 / this.props.speed) + 's';
      }
      return style;
    },
    getFillStyle: function getFillStyle(delay) {
      var style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.backgroundColor = this.props.color;
      }
      return style;
    },
    getBorderStyle: function getBorderStyle(delay) {
      var style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.borderColor = this.props.color;
      }
      return style;
    },
    render: function render() {
      var style = {
        animationDuration: this.props.animationDuration
      };
      if (this.props.size) {
        style.fontSize = this.props.size;
      }
      style.animationDuration = style.animationDuration * (1 / this.props.speed) + 's';
      return _react2['default'].createElement(
        'div',
        { className: 'rai-activity-indicator ' + this.props.className },
        _react2['default'].createElement(ComposedComponent, _extends({}, this.props, {
          getFillStyle: this.getFillStyle,
          getBorderStyle: this.getBorderStyle,
          style: style
        }))
      );
    }
  });
};

module.exports = exports['default'];