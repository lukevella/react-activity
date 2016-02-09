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

var animationDuration = 0.8;

var Windmill = _react2['default'].createClass({
  displayName: 'Windmill',

  propTypes: {
    count: _react.PropTypes.number.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      count: 1
    };
  },
  render: function render() {
    var windill = [];
    for (var i = 1; i <= this.props.count; i++) {
      var style = this.props.getFillStyle(i / (this.props.count * 2 / animationDuration));
      windill.unshift(_react2['default'].createElement('div', {
        key: i,
        style: style
      }));
    }
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: 'rai-windill' }),
      windill
    );
  }
});

exports['default'] = (0, _activityIndicator2['default'])(Windmill, animationDuration);
module.exports = exports['default'];