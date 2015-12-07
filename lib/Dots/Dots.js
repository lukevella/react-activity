'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActivityIndicator = require('../ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DotsScss = require('./Dots.scss');

var _DotsScss2 = _interopRequireDefault(_DotsScss);

var ActivityIndicatorDots = _react2['default'].createClass({
  displayName: 'ActivityIndicatorDots',

  propTypes: {
    size: _react.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      size: 40
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      _ActivityIndicator2['default'],
      this.props,
      _react2['default'].createElement(
        'div',
        { styleName: 'loader' },
        _react2['default'].createElement('div', { styleName: 'circle one' }),
        _react2['default'].createElement('div', { styleName: 'circle two' }),
        _react2['default'].createElement('div', { styleName: 'circle three' })
      )
    );
  }
});

exports['default'] = (0, _reactCssModules2['default'])(ActivityIndicatorDots, _DotsScss2['default'], { allowMultiple: true });
module.exports = exports['default'];