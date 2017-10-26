webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 75);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 68);\n\nvar _Login = __webpack_require__(/*! ./Login */ 323);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this._renderRoot = _this._renderRoot.bind(_this);\n        _this._renderLogin = _this._renderLogin.bind(_this);\n        _this._renderRegistration = _this._renderRegistration.bind(_this);\n        _this._renderDashboard = _this._renderDashboard.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'loggedIn',\n        value: function loggedIn() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            return currentTime < expireTime;\n        }\n    }, {\n        key: '_renderRoot',\n        value: function _renderRoot() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n        }\n    }, {\n        key: '_renderDashboard',\n        value: function _renderDashboard() {\n            // return this.loggedIn()\n            // ? <Dashboard/>\n            // : <Redirect to='/login'/>\n            return _react2.default.createElement(_Dashboard2.default, { events: {\n                    1: {},\n                    2: {},\n                    3: {},\n                    4: {}\n                } });\n        }\n    }, {\n        key: '_renderRegistration',\n        value: function _renderRegistration() {\n            return _react2.default.createElement(_Registration2.default, { history: this.props.history });\n        }\n    }, {\n        key: '_renderLogin',\n        value: function _renderLogin() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_Login2.default, { history: this.props.history });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: this._renderRoot }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: this._renderDashboard }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: this._renderRegistration }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: this._renderLogin })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSb290ID0gdGhpcy5fcmVuZGVyUm9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJMb2dpbiA9IHRoaXMuX3JlbmRlckxvZ2luLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlZ2lzdHJhdGlvbiA9IHRoaXMuX3JlbmRlclJlZ2lzdHJhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXNoYm9hcmQgPSB0aGlzLl9yZW5kZXJEYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBleHBpcmVUaW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlQXQnKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGltZSA8IGV4cGlyZVRpbWU7XG4gICAgfVxuXG4gICAgX3JlbmRlclJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKClcbiAgICAgICAgPyA8UmVkaXJlY3QgdG89Jy9kYXNoYm9hcmQnLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgIH1cbiAgICBfcmVuZGVyRGFzaGJvYXJkKCkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5sb2dnZWRJbigpXG4gICAgICAgIC8vID8gPERhc2hib2FyZC8+XG4gICAgICAgIC8vIDogPFJlZGlyZWN0IHRvPScvbG9naW4nLz5cbiAgICAgICAgcmV0dXJuIDxEYXNoYm9hcmQgZXZlbnRzPXt7XG4gICAgICAgICAgICAxOiB7fSxcbiAgICAgICAgICAgIDI6IHt9LFxuICAgICAgICAgICAgMzoge30sXG4gICAgICAgICAgICA0OiB7fVxuICAgICAgICB9fS8+XG4gICAgfVxuXG4gICAgX3JlbmRlclJlZ2lzdHJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDxSZWdpc3RyYXRpb24gaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fS8+XG4gICAgfVxuXG4gICAgX3JlbmRlckxvZ2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbigpXG4gICAgICAgID8gPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgIDogPExvZ2luIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0vPlxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdmJhciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkRyYXdjaGFuZ2U8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17dGhpcy5fcmVuZGVyUm9vdH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZGFzaGJvYXJkJyByZW5kZXI9e3RoaXMuX3JlbmRlckRhc2hib2FyZH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0cmF0aW9uJyByZW5kZXI9e3RoaXMuX3JlbmRlclJlZ2lzdHJhdGlvbn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIHJlbmRlcj17dGhpcy5fcmVuZGVyTG9naW59Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWlCQTs7Ozs7O0FBN0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})