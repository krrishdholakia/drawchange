webpackHotUpdate(0,{

/***/ 253:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/containers/SurveyRead.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 38);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SurveyRead(_ref) {\n  var questions = _ref.questions;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    questions.map(function (question) {\n      switch (question.type) {\n        case \"checkbox-type\":\n\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"text-type\":\n\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n\n        case \"paragraph-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"multiple-choice-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"list-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"scale-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"grid-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n        case \"date-type\":\n          return _react2.default.createElement(\n            'p',\n            null,\n            question.answer\n          );\n\n        default:\n          return _react2.default.createElement(\n            'p',\n            null,\n            'checking'\n          );\n      }\n    })\n  );\n}\n\nexports.default = SurveyRead;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvU3VydmV5UmVhZC5qcz82OWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gU3VydmV5UmVhZCh7IHF1ZXN0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gocXVlc3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94LXR5cGVcIjpcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3F1ZXN0aW9uLmFuc3dlcn08L3A+O1xuICAgICAgICAgICAgICAgICAgY2FzZSBcInRleHQtdHlwZVwiOlxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cD57cXVlc3Rpb24uYW5zd2VyfTwvcD47XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJhZ3JhcGgtdHlwZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3F1ZXN0aW9uLmFuc3dlcn08L3A+O1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlLWNob2ljZS10eXBlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cD57cXVlc3Rpb24uYW5zd2VyfTwvcD47XG4gICAgICAgICAgICAgICAgICBjYXNlIFwibGlzdC10eXBlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cD57cXVlc3Rpb24uYW5zd2VyfTwvcD47XG4gICAgICAgICAgICAgICAgICBjYXNlIFwic2NhbGUtdHlwZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3F1ZXN0aW9uLmFuc3dlcn08L3A+O1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImdyaWQtdHlwZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3F1ZXN0aW9uLmFuc3dlcn08L3A+O1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGUtdHlwZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3F1ZXN0aW9uLmFuc3dlcn08L3A+O1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+Y2hlY2tpbmc8L3A+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VydmV5UmVhZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL1N1cnZleVJlYWQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBd0JBO0FBM0JBO0FBK0JBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})