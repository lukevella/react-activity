'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sentry = _react2.default.createClass({
  displayName: 'Sentry',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: this.props.style, className: 'rai-sentry' },
      _react2.default.createElement(
        'div',
        { className: 'rai-wave-container' },
        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0) })
      ),
      _react2.default.createElement(
        'div',
        { className: 'rai-wave-container' },
        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0.4) })
      )
    );
  }
});

exports.default = (0, _activityIndicator2.default)(Sentry, 0.8);