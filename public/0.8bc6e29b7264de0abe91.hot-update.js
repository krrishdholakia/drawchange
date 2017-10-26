webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 105);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nvar _Login = __webpack_require__(/*! ./Login */ 323);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this._renderDashboard = _this._renderDashboard.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'loggedIn',\n        value: function loggedIn() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            return currentTime < expireTime;\n        }\n    }, {\n        key: '_renderRoot',\n        value: function _renderRoot() {\n            return this.loggedIn() ? _react2.default.createElement(_Dashboard2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n        }\n    }, {\n        key: '_renderDashboard',\n        value: function _renderDashboard() {\n            return this.loggedIn() ? _react2.default.createElement(_Dashboard2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n        }\n    }, {\n        key: '_renderRegistration',\n        value: function _renderRegistration() {\n            return _react2.default.createElement(_Registration2.default, { history: this.props.history });\n        }\n    }, {\n        key: '_renderLogin',\n        value: function _renderLogin() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_Login2.default, { history: this.props.history });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {\n                        return _this2.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    } }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: this._renderDashboard }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: this._renderRegistration }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: this._renderLogin })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXNoYm9hcmQgPSB0aGlzLl9yZW5kZXJEYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBleHBpcmVUaW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlQXQnKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGltZSA8IGV4cGlyZVRpbWU7XG4gICAgfVxuXG4gICAgX3JlbmRlclJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKClcbiAgICAgICAgPyA8RGFzaGJvYXJkLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPiAgICAgICAgXG4gICAgfVxuICAgIF9yZW5kZXJEYXNoYm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKClcbiAgICAgICAgPyA8RGFzaGJvYXJkLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgIH1cblxuICAgIF9yZW5kZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiA8UmVnaXN0cmF0aW9uIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0vPlxuICAgIH1cblxuICAgIF9yZW5kZXJMb2dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VkSW4oKVxuICAgICAgICA/IDxSZWRpcmVjdCB0bz0nL2Rhc2hib2FyZCcvPlxuICAgICAgICA6IDxMb2dpbiBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9Lz5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5EcmF3Y2hhbmdlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbigpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX0vPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9kYXNoYm9hcmQnIHJlbmRlcj17dGhpcy5fcmVuZGVyRGFzaGJvYXJkfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RyYXRpb24nIHJlbmRlcj17dGhpcy5fcmVuZGVyUmVnaXN0cmF0aW9ufS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgcmVuZGVyPXt0aGlzLl9yZW5kZXJMb2dpbn0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFuQkE7QUF3QkE7Ozs7OztBQTNEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})