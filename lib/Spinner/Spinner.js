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

var Spinner = _react2['default'].createClass({
  displayName: 'Spinner',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({ className: 'rai-spinner' }, this.props),
      _react2['default'].createElement('div', { className: 'rai-spinner-outer', style: this.props.getBorderStyle() }),
      _react2['default'].createElement('div', { className: 'rai-spinner-inner', style: this.props.getBorderStyle() })
    );
  }
});

exports['default'] = (0, _activityIndicator2['default'])(Spinner, 0.6);
module.exports = exports['default'];