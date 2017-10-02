webpackHotUpdate(0,{

/***/ 325:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/store/configureStore.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nif (process.env.NODE_ENV === 'production') {\n    module.exports = __webpack_require__(/*! ./configureStore.prod */ 817);\n} else {\n    module.exports = __webpack_require__(/*! ./configureStore.dev */ 816);\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/process/browser.js */ 1)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2I2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29uZmlndXJlU3RvcmUucHJvZCcpO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29uZmlndXJlU3RvcmUuZGV2Jyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///325\n");

/***/ }),

/***/ 816:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./frontend/store/configureStore.dev.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ 309);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ 324);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 786);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _DevTools = __webpack_require__(/*! ../containers/DevTools */ 320);\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n  return (0, _redux.createStore)(_reducers2.default, {\n    userType: \"Volunteer\"\n  }, (0, _redux.compose)(_DevTools2.default.instrument()), (0, _redux.applyMiddleware)(_reduxThunk2.default));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODE2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcz8xNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBEZXZUb29scyBmcm9tICcuLi9jb250YWluZXJzL0RldlRvb2xzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICByb290UmVkdWNlciwge1xuICAgICAgICB1c2VyVHlwZTogXCJWb2x1bnRlZXJcIlxuICAgICAgfSxcbiAgICAgIGNvbXBvc2UoXG4gICAgICAgICAgICBEZXZUb29scy5pbnN0cnVtZW50KClcbiAgICAgICksXG4gICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgIHRodW5rTWlkZGxld2FyZVxuICAgICAgKVxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQTtBQUNBO0FBUEE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBREE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///816\n");

/***/ }),

/***/ 817:
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./frontend/store/configureStore.prod.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ 309);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ 324);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 786);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n  return (0, _redux.createStore)(_reducers2.default, {\n    userType: \"Volunteer\"\n  }, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnByb2QuanM/OWQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLCB7XG4gICAgICAgIHVzZXJUeXBlOiBcIlZvbHVudGVlclwiXG4gICAgICB9LFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICB0aHVua01pZGRsZXdhcmVcbiAgICAgIClcbiAgICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnByb2QuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQTtBQU5BO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///817\n");

/***/ })

})