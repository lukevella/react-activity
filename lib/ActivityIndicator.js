'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ActivityIndicator = _react2['default'].createClass({
  displayName: 'ActivityIndicator',

  render: function render() {
    // We adjust the size of the component by changing the font-size of the
    // outer container. Since all the measurements are in ems the component
    // scales accordingly.
    var style = {
      display: 'inline-block',
      fontSize: (this.props.size || 16) + 'px'
    };
    return _react2['default'].createElement(
      'div',
      { style: style },
      this.props.children
    );
  }
});

exports['default'] = ActivityIndicator;
module.exports = exports['default'];