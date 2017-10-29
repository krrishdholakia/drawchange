webpackHotUpdate(0,{

/***/ 253:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/containers/SurveyRead.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 38);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SurveyRead(_ref) {\n  var questions = _ref.questions;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    questions.map(function (question) {\n      switch (question.type) {\n        case \"checkbox\":\n\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        default:\n          return _react2.default.createElement(\n            'p',\n            null,\n            'checking'\n          );\n      }\n    })\n  );\n}\n\nexports.default = SurveyRead;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvU3VydmV5UmVhZC5qcz82OWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gU3VydmV5UmVhZCh7IHF1ZXN0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gocXVlc3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwPntxdWVzdGlvbi5hbnN3ZXJ9PC9wPjtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cD5jaGVja2luZzwvcD47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdXJ2ZXlSZWFkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbnRhaW5lcnMvU3VydmV5UmVhZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBVkE7QUFjQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})