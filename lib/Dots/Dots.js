'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

var Dots = _react2['default'].createClass({
  displayName: 'Dots',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: 'rai-dots' }),
      _react2['default'].createElement('div', {
        className: 'rai-circle',
        style: this.props.getFillStyle(0.3)
      }),
      _react2['default'].createElement('div', {
        className: 'rai-circle',
        style: this.props.getFillStyle(0.2)
      }),
      _react2['default'].createElement('div', {
        className: 'rai-circle',
        style: this.props.getFillStyle(0.1)
      })
    );
  }
});

exports['default'] = (0, _activityIndicator2['default'])(Dots, 0.8, 40);
module.exports = exports['default'];