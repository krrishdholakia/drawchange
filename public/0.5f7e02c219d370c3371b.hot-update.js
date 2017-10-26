webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 105);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nvar _Login = __webpack_require__(/*! ./Login */ 323);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.loggedIn;\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            this.loggedIn = currentTime < expireTime;\n            console.log(this.props.history.replace);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {\n                        return _this2.loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    } }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _Dashboard2.default }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: function render() {\n                        return _react2.default.createElement(_Login2.default, { history: _this2.props.history });\n                    } }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: function render() {\n                        return _react2.default.createElement(_Registration2.default, { history: _this2.props.history });\n                    } })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBleHBpcmVUaW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlQXQnKSk7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBjdXJyZW50VGltZSA8IGV4cGlyZVRpbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdmJhciBmbHVpZD5cbiAgICAgICAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkRyYXdjaGFuZ2U8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZGFzaGJvYXJkJyBjb21wb25lbnQ9e0Rhc2hib2FyZH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0vPlxuICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0cmF0aW9uJyByZW5kZXI9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RyYXRpb24gaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fS8+XG4gICAgICAgICAgICAgICAgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQXBCQTtBQTBCQTs7Ozs7O0FBekNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})