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

var Squares = _react2['default'].createClass({
  displayName: 'Squares',

  propTypes: {
    squareCount: _react.PropTypes.number.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      squareCount: 3
    };
  },
  render: function render() {
    var squares = [];
    for (var i = 1; i <= this.props.squareCount; i++) {
      squares.unshift(_react2['default'].createElement('div', {
        key: i,
        className: 'rai-square',
        style: this.props.getFillStyle(i / 10)
      }));
    }
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: 'rai-squares' }),
      squares
    );
  }
});

exports['default'] = (0, _activityIndicator2['default'])(Squares, 0.8);
module.exports = exports['default'];