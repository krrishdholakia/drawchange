webpackHotUpdate(0,{

/***/ 141:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/AppContainer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 73);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 581);\n\nvar _Events = __webpack_require__(/*! ./Events.js */ 249);\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar questions = [{\n  type: \"checkbox\",\n  text: \"asdf\",\n  choices: [\"sdf\", \"sdf\", \"sdf\"]\n\n}];\n// import { makeMainRoutes } from '../components/Routes';\n// import 'bootstrap/dist/css/bootstrap.css';\n\nvar AppContainer = function AppContainer() {\n  return _react2.default.createElement(_reactRouterDom.BrowserRouter, null);\n};\n\nAppContainer.propTypes = {\n  name: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.name\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n  return {};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQXBwQ29udGFpbmVyLmpzPzZkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIGltcG9ydCB7IG1ha2VNYWluUm91dGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Sb3V0ZXMnO1xuLy8gaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vRXZlbnRzLmpzJztcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgIHRleHQ6IFwiYXNkZlwiLFxuICAgIGNob2ljZXM6IFtcInNkZlwiLCBcInNkZlwiLCBcInNkZlwiXSxcblxuICB9XG5dO1xuY29uc3QgQXBwQ29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgIHsvKiA8RXZlbnRzLz4gKi99XG5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn07XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBzdGF0ZS5uYW1lXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoLyogZGlzcGF0Y2ggKi8pID0+IHtcbiAgcmV0dXJuIHtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHBDb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL0FwcENvbnRhaW5lci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///141\n");

/***/ })

})