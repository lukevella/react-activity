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

var Sentry = _react2['default'].createClass({
  displayName: 'Sentry',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: 'rai-sentry' }),
      _react2['default'].createElement(
        'div',
        { className: 'rai-wave-container' },
        _react2['default'].createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0) })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'rai-wave-container' },
        _react2['default'].createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0.4) })
      )
    );
  }
});

exports['default'] = (0, _activityIndicator2['default'])(Sentry, 0.8);
module.exports = exports['default'];