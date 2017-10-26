webpackHotUpdate(0,{

/***/ 324:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/LoginModal.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginModal = function (_Component) {\n\t_inherits(LoginModal, _Component);\n\n\tfunction LoginModal(props) {\n\t\t_classCallCheck(this, LoginModal);\n\n\t\t// UI states\n\t\tvar _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));\n\n\t\t_this.state = { show: false };\n\t\t_this.close = _this.close.bind(_this);\n\t\t_this.open = _this.open.bind(_this);\n\t\t// Input references\n\t\t_this.email;\n\t\t_this.password;\n\t\t_this.handleLoginResult = _this.handleLoginResult.bind(_this);\n\t\t_this.login = _this.login.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(LoginModal, [{\n\t\tkey: 'close',\n\t\tvalue: function close() {\n\t\t\tthis.setState({ show: false });\n\t\t}\n\t}, {\n\t\tkey: 'open',\n\t\tvalue: function open() {\n\t\t\tthis.setState({ show: true });\n\t\t}\n\t}, {\n\t\tkey: 'handleLoginResult',\n\t\tvalue: function handleLoginResult(json) {\n\t\t\tif (json.success === \"true\") {\n\t\t\t\t// Redirect\n\t\t\t\tthis.props.history.replace('/dashboard');\n\t\t\t\t// Manage session\n\t\t\t\tvar expireAt = new Date().getTime() + 5 * 1000;\n\t\t\t\tlocalStorage.setItem('expireAt', JSON.stringify(expireAt));\n\t\t\t}\n\t\t}\n\t\t// Ajax calls\n\n\t}, {\n\t\tkey: 'login',\n\t\tvalue: function login() {\n\t\t\tvar _this2 = this;\n\n\t\t\tfetch('/api/login/volunteer?email=' + this.email.value + '&password=' + this.password.value).then(function (res) {\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (json) {\n\t\t\t\treturn _this2.handleLoginResult(json);\n\t\t\t}).catch(function (err) {\n\t\t\t\treturn console.log(err);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t{ bsStyle: 'primary', bsSize: 'large', onClick: this.open },\n\t\t\t\t\t'Login'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Modal,\n\t\t\t\t\t{ show: this.state.show, onHide: this.close },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Header,\n\t\t\t\t\t\t{ closeButton: true },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Modal.Title,\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Volunteer Login'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Body,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Form,\n\t\t\t\t\t\t\t{ className: 'container-fluid' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'email'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'email',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter email',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.email = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'password'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'password',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter password',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.password = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Footer,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ bsStyle: 'primary', onClick: this.login },\n\t\t\t\t\t\t\t'Login'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ onClick: this.close },\n\t\t\t\t\t\t\t'Close'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LoginModal;\n}(_react.Component);\n\n;\n\nexports.default = LoginModal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcz8yZWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBGb3JtLCBGb3JtR3JvdXAsIENvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHQvLyBVSSBzdGF0ZXNcblx0XHR0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXHRcdHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG5cdFx0Ly8gSW5wdXQgcmVmZXJlbmNlc1xuXHRcdHRoaXMuZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZDtcblx0XHR0aGlzLmhhbmRsZUxvZ2luUmVzdWx0ID0gdGhpcy5oYW5kbGVMb2dpblJlc3VsdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG5cdH07XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcblx0fTtcblxuXHRoYW5kbGVMb2dpblJlc3VsdChqc29uKSB7XG5cdFx0aWYgKGpzb24uc3VjY2VzcyA9PT0gXCJ0cnVlXCIpIHtcblx0XHRcdC8vIFJlZGlyZWN0XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSgnL2Rhc2hib2FyZCcpO1xuXHRcdFx0Ly8gTWFuYWdlIHNlc3Npb25cblx0XHRcdGxldCBleHBpcmVBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNSAqIDEwMDA7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlQXQnLCBKU09OLnN0cmluZ2lmeShleHBpcmVBdCkpO1xuXHRcdH1cblx0fVxuXHQvLyBBamF4IGNhbGxzXG5cdGxvZ2luKCkge1xuXHRcdGZldGNoKGAvYXBpL2xvZ2luL3ZvbHVudGVlcj9lbWFpbD0ke3RoaXMuZW1haWwudmFsdWV9JnBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX1gKVxuICAgICAgICAudGhlbiggKHJlcykgPT4gcmVzLmpzb24oKSApXG4gICAgICAgIC50aGVuKCAoanNvbikgPT4gdGhpcy5oYW5kbGVMb2dpblJlc3VsdChqc29uKSApXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGJzU2l6ZT1cImxhcmdlXCIgb25DbGljaz17dGhpcy5vcGVufT5cblx0XHRcdFx0ICBMb2dpblxuXHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHQ8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93fSBvbkhpZGU9e3RoaXMuY2xvc2V9PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+Vm9sdW50ZWVyIExvZ2luPC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxGb3JtIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+ZW1haWw8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWYgPT4geyB0aGlzLmVtYWlsID0gcmVmOyB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+cGFzc3dvcmQ8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWYgPT4geyB0aGlzLnBhc3N3b3JkID0gcmVmOyB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0ICA8L0Zvcm0+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5sb2dpbn0+XG5cdFx0XHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZX0+Q2xvc2U8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9Mb2dpbk1vZGFsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFUQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUF4QkE7QUFMQTtBQXNDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///324\n");

/***/ })

})