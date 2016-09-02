'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Levels = _react2.default.createClass({
  displayName: 'Levels',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: this.props.style, className: 'rai-levels' },
      _react2.default.createElement(
        'div',
        { className: 'rai-levels-container' },
        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle() }),
        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.25) }),
        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.4) })
      )
    );
  }
});

exports.default = (0, _activityIndicator2.default)(Levels, 1.5);