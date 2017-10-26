webpackHotUpdate(0,{

/***/ 322:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/Dashboard.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 75);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 68);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n    _inherits(Dashboard, _Component);\n\n    function Dashboard(props) {\n        _classCallCheck(this, Dashboard);\n\n        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n\n        _this.state = {\n            selected: 0\n        };\n        _this.showDetail = _this.showDetail.bind(_this);\n        return _this;\n    }\n\n    _createClass(Dashboard, [{\n        key: 'showDetail',\n        value: function showDetail(i) {\n            this.setState({\n                selected: i\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactBootstrap.Grid,\n                null,\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 }),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 3 },\n                    _react2.default.createElement(\n                        _reactBootstrap.ListGroup,\n                        null,\n                        console.log(this.props)\n                        // this.props.events.map((e, i) => (\n                        //     <ListGroupItem key={i} onClick={() => {\n                        //         this.showDetail(i);\n                        //     }}>\n                        //         Item 1\n                        //     </ListGroupItem>\n                        // ))\n\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Col,\n                    { md: 7 },\n                    _react2.default.createElement(\n                        _reactBootstrap.Panel,\n                        { style: { minHeight: '400px' } },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            this.state.selected\n                        )\n                    )\n                ),\n                _react2.default.createElement(_reactBootstrap.Col, { md: 1 })\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react.Component);\n\nexports.default = Dashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzPzA3YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEp1bWJvdHJvbiwgR3JpZCwgQ29sLCBBY2NvcmRpb24sIFBhbmVsLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93RGV0YWlsID0gdGhpcy5zaG93RGV0YWlsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0RldGFpbChpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxfS8+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17M30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmV2ZW50cy5tYXAoKGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPExpc3RHcm91cEl0ZW0ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNob3dEZXRhaWwoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgSXRlbSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgXHRcdDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezd9PlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWwgc3R5bGU9e3ttaW5IZWlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5zZWxlY3RlZH08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICBcdFx0PENvbCBtZD17MX0vPlxuICAgICAgICBcdDwvR3JpZD5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBS0E7QUFyQkE7QUF3QkE7Ozs7OztBQXpDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///322\n");

/***/ })

})