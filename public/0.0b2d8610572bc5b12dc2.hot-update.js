webpackHotUpdate(0,{

/***/ 322:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/Dashboard.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 75);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 68);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n    _inherits(Dashboard, _Component);\n\n    function Dashboard(props) {\n        _classCallCheck(this, Dashboard);\n\n        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n    }\n\n    _createClass(Dashboard, [{\n        key: 'showDetail',\n        value: function showDetail() {}\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactBootstrap.Grid,\n                null,\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 }),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 3 },\n                    _react2.default.createElement(\n                        _reactBootstrap.ListGroup,\n                        null,\n                        events.map(function (e) {\n                            return _react2.default.createElement(\n                                _reactBootstrap.ListGroupItem,\n                                null,\n                                'Item 1'\n                            );\n                        })\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 7 },\n                    _react2.default.createElement(_reactBootstrap.Panel, { style: { minHeight: '400px' } })\n                ),\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 })\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react.Component);\n\nexports.default = Dashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzPzA3YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEp1bWJvdHJvbiwgR3JpZCwgQ29sLCBBY2NvcmRpb24sIFBhbmVsLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIHNob3dEZXRhaWwoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17MX0vPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5tYXAoKGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0+SXRlbSAxPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICBcdFx0PC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17N30+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbCBzdHlsZT17e21pbkhlaWdodDogJzQwMHB4J319PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIFx0XHQ8Q29sIG1kPXsxfS8+XG4gICAgICAgIFx0PC9HcmlkPlxuICAgICAgICApXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBaEJBO0FBbUJBOzs7Ozs7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///322\n");

/***/ })

})