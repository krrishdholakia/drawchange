webpackHotUpdate(0,{

/***/ 324:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/LoginModal.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginModal = function (_Component) {\n\t_inherits(LoginModal, _Component);\n\n\tfunction LoginModal(props) {\n\t\t_classCallCheck(this, LoginModal);\n\n\t\t// UI states\n\t\tvar _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));\n\n\t\t_this.state = { show: false };\n\t\t_this.close = _this.close.bind(_this);\n\t\t_this.open = _this.open.bind(_this);\n\t\t// Input references\n\t\t_this.email;\n\t\t_this.password;\n\t\t_this.login = _this.login.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(LoginModal, [{\n\t\tkey: 'close',\n\t\tvalue: function close() {\n\t\t\tthis.setState({ show: false });\n\t\t}\n\t}, {\n\t\tkey: 'open',\n\t\tvalue: function open() {\n\t\t\tthis.setState({ show: true });\n\t\t}\n\t}, {\n\t\tkey: 'login',\n\n\n\t\t// Ajax calls\n\t\tvalue: function login() {\n\t\t\tvar _this2 = this;\n\n\t\t\tfetch('/api/login/volunteer?email=' + this.email.value + '&password=' + this.password.value).then(function (res) {\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (json) {\n\t\t\t\tif (json.success === \"true\") {\n\t\t\t\t\t_this2.props.history.push('/dashboard');\n\t\t\t\t\tlocalStorage.setItem('loggedIn', true);\n\t\t\t\t}\n\t\t\t}).catch(function (err) {\n\t\t\t\treturn console.log(err);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t{ bsStyle: 'primary', bsSize: 'large', onClick: this.open },\n\t\t\t\t\t'Login'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Modal,\n\t\t\t\t\t{ show: this.state.show, onHide: this.close },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Header,\n\t\t\t\t\t\t{ closeButton: true },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Modal.Title,\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Volunteer Login'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Body,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Form,\n\t\t\t\t\t\t\t{ className: 'container-fluid' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'email'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'email',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter email',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.email = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'password'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'password',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter password',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.password = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Footer,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ bsStyle: 'primary', onClick: this.login },\n\t\t\t\t\t\t\t'Login'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ onClick: this.close },\n\t\t\t\t\t\t\t'Close'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LoginModal;\n}(_react.Component);\n\n;\n\nexports.default = LoginModal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcz8yZWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBGb3JtLCBGb3JtR3JvdXAsIENvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHQvLyBVSSBzdGF0ZXNcblx0XHR0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXHRcdHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG5cdFx0Ly8gSW5wdXQgcmVmZXJlbmNlc1xuXHRcdHRoaXMuZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZDtcblx0XHR0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuXHR9O1xuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XG5cdH07XG5cblx0Ly8gQWpheCBjYWxsc1xuXHRsb2dpbigpIHtcblx0XHRmZXRjaChgL2FwaS9sb2dpbi92b2x1bnRlZXI/ZW1haWw9JHt0aGlzLmVtYWlsLnZhbHVlfSZwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YClcbiAgICAgICAgLnRoZW4oIChyZXMpID0+IHJlcy5qc29uKCkgKVxuICAgICAgICAudGhlbihcblx0XHRcdChqc29uKSA9PiB7XG5cdFx0XHRcdGlmIChqc29uLnN1Y2Nlc3MgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCB0cnVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBic1NpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3RoaXMub3Blbn0+XG5cdFx0XHRcdCAgTG9naW5cblx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0PE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd30gb25IaWRlPXt0aGlzLmNsb3NlfT5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPlZvbHVudGVlciBMb2dpbjwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8Rm9ybSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPmVtYWlsPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVmID0+IHsgdGhpcy5lbWFpbCA9IHJlZjsgfX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPnBhc3N3b3JkPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVmID0+IHsgdGhpcy5wYXNzd29yZCA9IHJlZjsgfX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdCAgPC9Gb3JtPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMubG9naW59PlxuXHRcdFx0XHRcdFx0XHRMb2dpblxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PkNsb3NlPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFUQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUF4QkE7QUFMQTtBQXNDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///324\n");

/***/ })

})