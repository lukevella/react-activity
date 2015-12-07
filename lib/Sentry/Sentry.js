'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SentryScss = require('./Sentry.scss');

var _SentryScss2 = _interopRequireDefault(_SentryScss);

var Sentry = _react2['default'].createClass({
  displayName: 'Sentry',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { styleName: 'loader-container' },
      _react2['default'].createElement(
        'div',
        { styleName: 'loader' },
        _react2['default'].createElement('div', { styleName: 'circle' })
      ),
      _react2['default'].createElement(
        'div',
        { styleName: 'loader' },
        _react2['default'].createElement('div', { styleName: 'circle delay' })
      )
    );
  }
});

exports['default'] = (0, _reactCssModules2['default'])(Sentry, _SentryScss2['default'], { allowMultiple: true });
module.exports = exports['default'];