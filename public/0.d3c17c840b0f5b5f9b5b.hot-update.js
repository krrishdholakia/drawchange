webpackHotUpdate(0,{

/***/ 122:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/components/App.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 39);\n\nvar _NavBar = __webpack_require__(/*! ./NavBar */ 70);\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _Login = __webpack_require__(/*! ../containers/Login */ 128);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Main = __webpack_require__(/*! ./Main */ 125);\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _Registration = __webpack_require__(/*! ../containers/Registration */ 129);\n\nvar _Registration2 = _interopRequireDefault(_Registration);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard */ 291);\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var children = _ref.children;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_NavBar2.default, null),\n    _react2.default.createElement(\n      _Main2.default,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/registration', component: _Registration2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _Dashboard2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: _Main2.default })\n      )\n    )\n  );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbnRhaW5lcnMvTG9naW4nXG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4nXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvUmVnaXN0cmF0aW9uJ1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICAnLi9EYXNoYm9hcmQnXG5cbmNvbnN0IEFwcCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdkJhci8+XG4gICAgPE1haW4+XG4gICAgXHQ8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RyYXRpb25cIiBjb21wb25lbnQ9e1JlZ2lzdHJhdGlvbn0vPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBjb21wb25lbnQ9e01haW59Lz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9NYWluPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///122\n");

/***/ }),

/***/ 291:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/Dashboard.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Dashboard = function Dashboard() {\n  return _react2.default.createElement(\n    'p',\n    null,\n    'DASHBOARD'\n  );\n};\n\nexports.default = Dashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzPzA3YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4gKFxuICA8cD5EQVNIQk9BUkQ8L3A+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///291\n");

/***/ })

})