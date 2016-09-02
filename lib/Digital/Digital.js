'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Digital = _react2.default.createClass({
  displayName: 'Digital',

  propTypes: {
    count: _react.PropTypes.number.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      count: 3
    };
  },
  render: function render() {
    var rects = [];
    for (var i = 1; i <= this.props.count; i++) {
      rects.unshift(_react2.default.createElement('div', {
        key: i,
        style: this.props.getFillStyle(i / 10)
      }));
    }

    return _react2.default.createElement(
      'div',
      { style: this.props.style, className: 'rai-digital' },
      rects
    );
  }
});

exports.default = (0, _activityIndicator2.default)(Digital, 0.8);