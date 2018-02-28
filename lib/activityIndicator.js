'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent, defaultAnimationDuration) {
  var ActivityIndicator = function (_React$Component) {
    _inherits(ActivityIndicator, _React$Component);

    function ActivityIndicator(props) {
      _classCallCheck(this, ActivityIndicator);

      var _this = _possibleConstructorReturn(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).call(this, props));

      _this.getDelayStyle = _this.getDelayStyle.bind(_this);
      _this.getFillStyle = _this.getFillStyle.bind(_this);
      _this.getBorderStyle = _this.getBorderStyle.bind(_this);
      return _this;
    }

    _createClass(ActivityIndicator, [{
      key: 'getDelayStyle',
      value: function getDelayStyle(delay) {
        var style = {};
        if (delay) {
          style.animationDelay = '-' + delay * (1 / this.props.speed) + 's';
        }
        return style;
      }
    }, {
      key: 'getFillStyle',
      value: function getFillStyle(delay) {
        var style = this.getDelayStyle(delay);
        if (this.props.color) {
          style.backgroundColor = this.props.color;
        }
        return style;
      }
    }, {
      key: 'getBorderStyle',
      value: function getBorderStyle(delay) {
        var style = this.getDelayStyle(delay);
        if (this.props.color) {
          style.borderColor = this.props.color;
        }
        return style;
      }
    }, {
      key: 'render',
      value: function render() {
        if (!this.props.animating) {
          return null;
        }
        var containerStyle = {
          display: 'inline-block',
          fontSize: '16px',
          lineHeight: '0'
        };
        var indicatorStyle = {
          animationDuration: this.props.animationDuration * (1 / this.props.speed) + 's'
        };
        if (this.props.size) {
          indicatorStyle.fontSize = this.props.size;
        }
        return _react2.default.createElement(
          'div',
          {
            style: containerStyle,
            className: 'rai-activity-indicator ' + this.props.className
          },
          _react2.default.createElement(ComposedComponent, {
            getFillStyle: this.getFillStyle,
            getBorderStyle: this.getBorderStyle,
            style: indicatorStyle
          })
        );
      }
    }]);

    return ActivityIndicator;
  }(_react2.default.Component);

  ActivityIndicator.propTypes = {
    animationDuration: _propTypes2.default.number.isRequired,
    speed: _propTypes2.default.number,
    animating: _propTypes2.default.bool.isRequired
  };

  ActivityIndicator.defaultProps = {
    animationDuration: defaultAnimationDuration,
    speed: 1,
    animating: true
  };

  ActivityIndicator.displayName = ComposedComponent.name;

  return ActivityIndicator;
};