webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 105);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nvar _Login = __webpack_require__(/*! ./Login */ 323);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this._renderDashboard = _this._renderDashboard.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'loggedIn',\n        value: function loggedIn() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            return currentTime < expireTime;\n        }\n    }, {\n        key: '_renderRoot',\n        value: function _renderRoot() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n        }\n    }, {\n        key: '_renderDashboard',\n        value: function _renderDashboard() {\n            return this.loggedIn() ? _react2.default.createElement(_Dashboard2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n        }\n    }, {\n        key: '_renderRegistration',\n        value: function _renderRegistration() {\n            return _react2.default.createElement(_Registration2.default, { history: this.props.history });\n        }\n    }, {\n        key: '_renderLogin',\n        value: function _renderLogin() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_Login2.default, { history: this.props.history });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: this._renderRoot }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: this._renderDashboard }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: this._renderRegistration }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: this._renderLogin })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXNoYm9hcmQgPSB0aGlzLl9yZW5kZXJEYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBleHBpcmVUaW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlQXQnKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGltZSA8IGV4cGlyZVRpbWU7XG4gICAgfVxuXG4gICAgX3JlbmRlclJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKClcbiAgICAgICAgPyA8UmVkaXJlY3QgdG89Jy9kYXNoYm9hcmQnLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgIH1cbiAgICBfcmVuZGVyRGFzaGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbigpXG4gICAgICAgID8gPERhc2hib2FyZC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPScvbG9naW4nLz5cbiAgICB9XG5cbiAgICBfcmVuZGVyUmVnaXN0cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gPFJlZ2lzdHJhdGlvbiBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9Lz5cbiAgICB9XG5cbiAgICBfcmVuZGVyTG9naW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKClcbiAgICAgICAgPyA8UmVkaXJlY3QgdG89Jy9kYXNoYm9hcmQnLz5cbiAgICAgICAgOiA8TG9naW4gaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fS8+XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+RHJhd2NoYW5nZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXI+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXt0aGlzLl9yZW5kZXJSb290fS8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2Rhc2hib2FyZCcgcmVuZGVyPXt0aGlzLl9yZW5kZXJEYXNoYm9hcmR9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdHJhdGlvbicgcmVuZGVyPXt0aGlzLl9yZW5kZXJSZWdpc3RyYXRpb259Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyByZW5kZXI9e3RoaXMuX3JlbmRlckxvZ2lufS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFiQTtBQWtCQTs7Ozs7O0FBckRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})