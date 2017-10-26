webpackHotUpdate(0,{

/***/ 322:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/Dashboard.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 75);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 68);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n    _inherits(Dashboard, _Component);\n\n    function Dashboard(props) {\n        _classCallCheck(this, Dashboard);\n\n        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n\n        _this.events = {\n            1: {},\n            2: {},\n            3: {},\n            4: {}\n        };\n        _this.state = {\n            selected: 0\n        };\n        return _this;\n    }\n\n    _createClass(Dashboard, [{\n        key: 'showDetail',\n        value: function showDetail(i) {\n            this.setState({\n                selected: i\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactBootstrap.Grid,\n                null,\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 }),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 3 },\n                    _react2.default.createElement(\n                        _reactBootstrap.ListGroup,\n                        null,\n                        this.events.map(function (e, i) {\n                            return _react2.default.createElement(\n                                _reactBootstrap.ListGroupItem,\n                                { key: i, onClick: function onClick() {\n                                        showDetail(i);\n                                    } },\n                                'Item 1'\n                            );\n                        })\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 7 },\n                    _react2.default.createElement(\n                        _reactBootstrap.Panel,\n                        { style: { minHeight: '400px' } },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            this.state.selected\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 })\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react.Component);\n\nexports.default = Dashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzPzA3YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEp1bWJvdHJvbiwgR3JpZCwgQ29sLCBBY2NvcmRpb24sIFBhbmVsLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgICAxOiB7fSxcbiAgICAgICAgICAgIDI6IHt9LFxuICAgICAgICAgICAgMzoge30sXG4gICAgICAgICAgICA0OiB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0RldGFpbChpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17MX0vPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZXZlbnRzLm1hcCgoZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGtleT17aX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGV0YWlsKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgIFx0XHQ8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsIHN0eWxlPXt7bWluSGVpZ2h0OiAnNDAwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgXHRcdDxDb2wgbWQ9ezF9Lz5cbiAgICAgICAgXHQ8L0dyaWQ+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFSQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFLQTtBQWxCQTtBQXFCQTs7Ozs7O0FBN0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///322\n");

/***/ })

})