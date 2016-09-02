'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = _react2.default.createClass({
  displayName: 'Spinner',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: this.props.style, className: 'rai-spinner' },
      _react2.default.createElement('div', { className: 'rai-spinner-outer', style: this.props.getBorderStyle() }),
      _react2.default.createElement('div', { className: 'rai-spinner-inner', style: this.props.getBorderStyle() })
    );
  }
});

exports.default = (0, _activityIndicator2.default)(Spinner, 0.6);