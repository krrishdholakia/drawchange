webpackHotUpdate(0,{

/***/ 178:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/AppContainer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 104);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 105);\n\nvar _App = __webpack_require__(/*! ../components/App */ 321);\n\nvar _App2 = _interopRequireDefault(_App);\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 810);\n\nvar _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ 212);\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar handleClick = function handleClick() {\n    console.log(localStorage);\n};\n\nvar AppContainer = function AppContainer(props) {\n    window.onclick = function () {\n        console.log(localStorage.loggedIn);\n        if (!localStorage.loggedIn) {\n            history.replace('/login');\n        }\n    };\n    var history = (0, _createBrowserHistory2.default)();\n    return _react2.default.createElement(\n        _reactRouterDom.Router,\n        { history: history },\n        _react2.default.createElement(_App2.default, { history: history })\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        // currentUser: state.currentUser\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n    return {};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQXBwQ29udGFpbmVyLmpzPzZkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5jb25zdCBBcHBDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgICB3aW5kb3cub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmxvZ2dlZEluKTtcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSgnL2xvZ2luJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgPEFwcCBoaXN0b3J5PXtoaXN0b3J5fS8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvLyBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICgvKiBkaXNwYXRjaCAqLykgPT4ge1xuICByZXR1cm4ge1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEFwcENvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29udGFpbmVycy9BcHBDb250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///178\n");

/***/ })

})