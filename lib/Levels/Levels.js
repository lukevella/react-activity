'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _LevelsScss = require('./Levels.scss');

var _LevelsScss2 = _interopRequireDefault(_LevelsScss);

var Levels = _react2['default'].createClass({
  displayName: 'Levels',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { styleName: 'loader' },
      _react2['default'].createElement('div', { styleName: 'bar' }),
      _react2['default'].createElement('div', { styleName: 'bar two' }),
      _react2['default'].createElement('div', { styleName: 'bar three' })
    );
  }
});

exports['default'] = (0, _reactCssModules2['default'])(Levels, _LevelsScss2['default'], {
  allowMultiple: true
});
module.exports = exports['default'];