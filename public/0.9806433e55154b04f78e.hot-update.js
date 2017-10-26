webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 74);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 97);\n\nvar _Home = __webpack_require__(/*! ./Home */ 820);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this._renderRoot = _this._renderRoot.bind(_this);\n        _this._renderLogin = _this._renderLogin.bind(_this);\n        _this._renderRegistration = _this._renderRegistration.bind(_this);\n        _this._renderDashboard = _this._renderDashboard.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'loggedIn',\n        value: function loggedIn() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            return currentTime < expireTime;\n        }\n    }, {\n        key: '_renderRoot',\n        value: function _renderRoot() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });\n        }\n    }, {\n        key: '_renderDashboard',\n        value: function _renderDashboard() {\n            return this.loggedIn() ? _react2.default.createElement(_Dashboard2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });\n        }\n    }, {\n        key: '_renderRegistration',\n        value: function _renderRegistration() {\n            return _react2.default.createElement(_Registration2.default, { history: this.props.history });\n        }\n    }, {\n        key: '_renderLogin',\n        value: function _renderLogin() {\n            return this.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(Login, { history: this.props.history });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: this._renderRoot }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: this._renderDashboard }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: this._renderRegistration }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/home', render: this._renderLogin })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL1JlZ2lzdHJhdGlvbic7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vRGFzaGJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUm9vdCA9IHRoaXMuX3JlbmRlclJvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyTG9naW4gPSB0aGlzLl9yZW5kZXJMb2dpbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWdpc3RyYXRpb24gPSB0aGlzLl9yZW5kZXJSZWdpc3RyYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyRGFzaGJvYXJkID0gdGhpcy5fcmVuZGVyRGFzaGJvYXJkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgbG9nZ2VkSW4oKSB7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZXhwaXJlVGltZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZUF0JykpO1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWUgPCBleHBpcmVUaW1lO1xuICAgIH1cblxuICAgIF9yZW5kZXJSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbigpXG4gICAgICAgID8gPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPScvaG9tZScvPlxuICAgIH1cbiAgICBfcmVuZGVyRGFzaGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbigpXG4gICAgICAgID8gPERhc2hib2FyZC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPScvaG9tZScvPlxuICAgIH1cblxuICAgIF9yZW5kZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiA8UmVnaXN0cmF0aW9uIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0vPlxuICAgIH1cblxuICAgIF9yZW5kZXJMb2dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VkSW4oKVxuICAgICAgICA/IDxSZWRpcmVjdCB0bz0nL2Rhc2hib2FyZCcvPlxuICAgICAgICA6IDxMb2dpbiBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9Lz5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5EcmF3Y2hhbmdlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9e3RoaXMuX3JlbmRlclJvb3R9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2Rhc2hib2FyZCcgcmVuZGVyPXt0aGlzLl9yZW5kZXJEYXNoYm9hcmR9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdHJhdGlvbicgcmVuZGVyPXt0aGlzLl9yZW5kZXJSZWdpc3RyYXRpb259Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hvbWUnIHJlbmRlcj17dGhpcy5fcmVuZGVyTG9naW59Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBaUJBOzs7Ozs7QUF2REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///321\n");

/***/ }),

/***/ 323:
false,

/***/ 820:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/Home.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 74);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 97);\n\nvar _LoginModal = __webpack_require__(/*! ./LoginModal */ 324);\n\nvar _LoginModal2 = _interopRequireDefault(_LoginModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login(_ref) {\n    var history = _ref.history;\n    return _react2.default.createElement(\n        _reactBootstrap.Grid,\n        null,\n        _react2.default.createElement(_reactBootstrap.Col, { md: 2 }),\n        _react2.default.createElement(\n            _reactBootstrap.Col,\n            { md: 8 },\n            _react2.default.createElement(\n                _reactBootstrap.Jumbotron,\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Volunteer'\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Don\\'t have an account?\\u2002',\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/registration' },\n                        'Sign Up'\n                    )\n                ),\n                _react2.default.createElement(_LoginModal2.default, { history: history })\n            )\n        ),\n        _react2.default.createElement(_reactBootstrap.Col, { md: 2 })\n    );\n};\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvSG9tZS5qcz9jN2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgR3JpZCwgQ29sLCBKdW1ib3Ryb24sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICcuL0xvZ2luTW9kYWwnO1xuXG5jb25zdCBMb2dpbiA9ICh7aGlzdG9yeX0pID0+IChcbiAgICA8R3JpZD5cbiAgICAgICAgPENvbCBtZD17Mn0vPlxuICAgICAgICA8Q29sIG1kPXs4fT5cbiAgICAgICAgICAgIDxKdW1ib3Ryb24+XG4gICAgICAgICAgICAgICAgPGgxPlZvbHVudGVlcjwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8mZW5zcDtcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9yZWdpc3RyYXRpb24nPlNpZ24gVXA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TG9naW5Nb2RhbCBoaXN0b3J5PXtoaXN0b3J5fS8+XG4gICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXsyfS8+XG4gICAgPC9HcmlkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFOQTtBQURBO0FBVUE7QUFaQTtBQURBO0FBQ0E7QUFnQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///820\n");

/***/ })

})