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

var animationDuration = 0.8;

var Windmill = function Windmill(props) {
  var windill = [];
  for (var i = 1; i <= props.count; i++) {
    var style = props.getFillStyle(i / (props.count * 2 / animationDuration));
    windill.unshift(_react2.default.createElement('div', {
      key: i,
      style: style
    }));
  }
  return _react2.default.createElement(
    'div',
    { style: props.style, className: 'rai-windill' },
    windill
  );
};

Windmill.propTypes = {
  count: _propTypes2.default.number.isRequired
};

Windmill.defaultProps = {
  count: 1
};

exports.default = (0, _activityIndicator2.default)(Windmill, animationDuration);