(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactActivity"] = factory(require("react"));
	else
		root["ReactActivity"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dots = __webpack_require__(1);

	var _Dots2 = _interopRequireDefault(_Dots);

	var _Levels = __webpack_require__(5);

	var _Levels2 = _interopRequireDefault(_Levels);

	var _Sentry = __webpack_require__(7);

	var _Sentry2 = _interopRequireDefault(_Sentry);

	var _Spinner = __webpack_require__(9);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Squares = __webpack_require__(11);

	var _Squares2 = _interopRequireDefault(_Squares);

	var _Digital = __webpack_require__(13);

	var _Digital2 = _interopRequireDefault(_Digital);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { Dots: _Dots2.default, Levels: _Levels2.default, Sentry: _Sentry2.default, Spinner: _Spinner2.default, Squares: _Squares2.default, Digital: _Digital2.default };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dots = __webpack_require__(2);

	var _Dots2 = _interopRequireDefault(_Dots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dots2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dots = _react2.default.createClass({
	  displayName: 'Dots',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: 'rai-dots' }),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.3)
	      }),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.2)
	      }),
	      _react2.default.createElement('div', {
	        className: 'rai-circle',
	        style: this.props.getFillStyle(0.1)
	      })
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Dots, 0.8);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (ComposedComponent, defaultAnimationDuration) {
	  return _react2.default.createClass({
	    displayName: ComposedComponent.displayName,
	    propTypes: {
	      animationDuration: _react.PropTypes.number.isRequired,
	      speed: _react.PropTypes.number
	    },
	    getDefaultProps: function getDefaultProps() {
	      return {
	        animationDuration: defaultAnimationDuration,
	        speed: 1
	      };
	    },
	    getDelayStyle: function getDelayStyle(delay) {
	      var style = {};
	      if (delay) {
	        style.animationDelay = '-' + delay * (1 / this.props.speed) + 's';
	      }
	      return style;
	    },
	    getFillStyle: function getFillStyle(delay) {
	      var style = this.getDelayStyle(delay);
	      if (this.props.color) {
	        style.backgroundColor = this.props.color;
	      }
	      return style;
	    },
	    getBorderStyle: function getBorderStyle(delay) {
	      var style = this.getDelayStyle(delay);
	      if (this.props.color) {
	        style.borderColor = this.props.color;
	      }
	      return style;
	    },
	    render: function render() {
	      var style = {
	        animationDuration: this.props.animationDuration
	      };
	      if (this.props.size) {
	        style.fontSize = this.props.size;
	      }
	      style.animationDuration = style.animationDuration * (1 / this.props.speed) + 's';
	      return _react2.default.createElement(
	        'div',
	        { className: 'rai-activity-indicator ' + this.props.className },
	        _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
	          getFillStyle: this.getFillStyle,
	          getBorderStyle: this.getBorderStyle,
	          style: style
	        }))
	      );
	    }
	  });
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Levels = __webpack_require__(6);

	var _Levels2 = _interopRequireDefault(_Levels);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Levels2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Levels = _react2.default.createClass({
	  displayName: 'Levels',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: 'rai-levels' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-levels-container' },
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle() }),
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.25) }),
	        _react2.default.createElement('div', { className: 'rai-bar', style: this.props.getFillStyle(0.4) })
	      )
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Levels, 1.5);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Sentry = __webpack_require__(8);

	var _Sentry2 = _interopRequireDefault(_Sentry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Sentry2.default;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sentry = _react2.default.createClass({
	  displayName: 'Sentry',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: 'rai-sentry' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-wave-container' },
	        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0) })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'rai-wave-container' },
	        _react2.default.createElement('div', { className: 'rai-wave', style: this.props.getBorderStyle(0.4) })
	      )
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Sentry, 0.8);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Spinner = __webpack_require__(10);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spinner2.default;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spinner = _react2.default.createClass({
	  displayName: 'Spinner',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: 'rai-spinner' }),
	      _react2.default.createElement('div', { className: 'rai-spinner-outer', style: this.props.getBorderStyle() }),
	      _react2.default.createElement('div', { className: 'rai-spinner-inner', style: this.props.getBorderStyle() })
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Spinner, 0.6);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Squares = __webpack_require__(12);

	var _Squares2 = _interopRequireDefault(_Squares);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Squares2.default;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

	var _activityIndicator2 = _interopRequireDefault(_activityIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Squares = _react2.default.createClass({
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
	      squares.unshift(_react2.default.createElement('div', {
	        key: i,
	        className: 'rai-square',
	        style: this.props.getFillStyle(i / 10)
	      }));
	    }
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: 'rai-squares' }),
	      squares
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Squares, 0.8);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Digital = __webpack_require__(14);

	var _Digital2 = _interopRequireDefault(_Digital);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Digital2.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _activityIndicator = __webpack_require__(4);

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
	      _extends({}, this.props, { className: 'rai-digital' }),
	      rects
	    );
	  }
	});

	exports.default = (0, _activityIndicator2.default)(Digital, 0.8);

/***/ }
/******/ ])
});
;