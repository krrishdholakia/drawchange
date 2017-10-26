webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 105);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nvar _Login = __webpack_require__(/*! ./Login */ 323);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Registration = __webpack_require__(/*! ./Registration */ 325);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 322);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    }\n\n    _createClass(App, [{\n        key: 'loggedIn',\n        value: function loggedIn() {\n            var currentTime = new Date().getTime();\n            var expireTime = JSON.parse(localStorage.getItem('expireAt'));\n            return currentTime < expireTime;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.Navbar,\n                    { fluid: true },\n                    _react2.default.createElement(\n                        _reactBootstrap.Navbar.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Navbar.Brand,\n                            null,\n                            _react2.default.createElement(\n                                _reactRouterDom.Link,\n                                { to: '/' },\n                                'Drawchange'\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {\n                        return _this2.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    } }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', render: function render() {\n                        return _this2.loggedIn() ? _react2.default.createElement(_Dashboard2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    } }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: function render() {\n                        // console.log(\"ha\")\n                        return _this2.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_Login2.default, { history: _this2.props.history });\n                    }\n                    // this.loggedIn() ? (\n                    //     <Redirect to='/dashboard'/>\n                    // ) : (\n                    //     <Login history={this.props.history}/>\n                    // )\n                }),\n                _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', render: function render() {\n                        return _react2.default.createElement(_Registration2.default, { history: _this2.props.history });\n                    } })\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGxvZ2dlZEluKCkge1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGV4cGlyZVRpbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVBdCcpKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lIDwgZXhwaXJlVGltZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5EcmF3Y2hhbmdlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbigpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX0vPlxuXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9kYXNoYm9hcmQnIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluKCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfS8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyByZW5kZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoYVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbigpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPScvZGFzaGJvYXJkJy8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW4gaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fS8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VkSW4oKSA/IChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxSZWRpcmVjdCB0bz0nL2Rhc2hib2FyZCcvPlxuICAgICAgICAgICAgICAgICAgICAvLyApIDogKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPExvZ2luIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0vPlxuICAgICAgICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAgICAgfS8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdHJhdGlvbicgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RyYXRpb24gaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fS8+XG4gICAgICAgICAgICAgICAgKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFBQTtBQUFBO0FBeENBO0FBOENBOzs7Ozs7QUEzREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})