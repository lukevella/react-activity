'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _activityIndicator = require('../activityIndicator');

var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bounce = function Bounce(props) {
  var squares = [];
  for (var i = 1; i <= props.count; i++) {
    squares.unshift(_react2.default.createElement('div', {
      key: i,
      style: props.getFillStyle(i / 10)
    }));
  }
  return _react2.default.createElement(
    'div',
    { style: props.style, className: 'rai-bounce' },
    squares
  );
};

Bounce.propTypes = {
  count: _propTypes2.default.number.isRequired
};

Bounce.defaultProps = {
  count: 3
};

exports.default = (0, _activityIndicator2.default)(Bounce, 0.8);