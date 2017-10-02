webpackHotUpdate(0,{

/***/ 561:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./frontend/components/ModalButton.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _bootstrap = __webpack_require__(/*! bootstrap */ 547);\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 533);\n\nvar _MyModal = __webpack_require__(/*! ./MyModal */ 408);\n\nvar _MyModal2 = _interopRequireDefault(_MyModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ModalButton = function (_Component) {\n\t_inherits(ModalButton, _Component);\n\n\tfunction ModalButton() {\n\t\t_classCallCheck(this, ModalButton);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ModalButton.__proto__ || Object.getPrototypeOf(ModalButton)).call(this));\n\n\t\t_this.state = { showModal: false };\n\t\treturn _this;\n\t}\n\n\t_createClass(ModalButton, [{\n\t\tkey: 'close',\n\t\tvalue: function close() {\n\t\t\tthis.setState({ showModal: false });\n\t\t}\n\t}, {\n\t\tkey: 'open',\n\t\tvalue: function open() {\n\t\t\tthis.setState({ showModal: true });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar popover = _react2.default.createElement(\n\t\t\t\t_reactBootstrap.Popover,\n\t\t\t\t{ id: 'modal-popover', title: 'popover' },\n\t\t\t\t'very popover. such engagement'\n\t\t\t);\n\t\t\tvar tooltip = _react2.default.createElement(\n\t\t\t\t_reactBootstrap.Tooltip,\n\t\t\t\t{ id: 'modal-tooltip' },\n\t\t\t\t'wow.'\n\t\t\t);\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Click to get the full Modal experience!'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t{\n\t\t\t\t\t\tbsStyle: 'primary',\n\t\t\t\t\t\tbsSize: 'large',\n\t\t\t\t\t\tonClick: this.open\n\t\t\t\t\t},\n\t\t\t\t\t'Launch demo modal'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_MyModal2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn ModalButton;\n}(_react.Component);\n\nexports.default = ModalButton;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTW9kYWxCdXR0b24uanM/OTY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJvb3RzdHJhcCBmcm9tICdib290c3RyYXAnO1xuaW1wb3J0IHsgUG9wb3ZlciwgVG9vbHRpcCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IE15TW9kYWwgZnJvbSAnLi9NeU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID0geyBzaG93TW9kYWw6IGZhbHNlIH07XG5cdH1cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgcG9wb3ZlciA9IChcblx0XHRcdDxQb3BvdmVyIGlkPVwibW9kYWwtcG9wb3ZlclwiIHRpdGxlPVwicG9wb3ZlclwiPlxuXHRcdFx0dmVyeSBwb3BvdmVyLiBzdWNoIGVuZ2FnZW1lbnRcblx0XHRcdDwvUG9wb3Zlcj5cblx0XHQpO1xuXHRcdGNvbnN0IHRvb2x0aXAgPSAoXG5cdFx0XHQ8VG9vbHRpcCBpZD1cIm1vZGFsLXRvb2x0aXBcIj5cblx0XHRcdHdvdy5cblx0XHRcdDwvVG9vbHRpcD5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPkNsaWNrIHRvIGdldCB0aGUgZnVsbCBNb2RhbCBleHBlcmllbmNlITwvcD5cblxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdGJzU2l6ZT1cImxhcmdlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW59XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdExhdW5jaCBkZW1vIG1vZGFsXG5cdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdDxNeU1vZGFsLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTW9kYWxCdXR0b24uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFRQTtBQVhBO0FBY0E7Ozs7OztBQXhDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///561\n");

/***/ })

})