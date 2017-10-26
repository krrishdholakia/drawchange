webpackHotUpdate(0,{

/***/ 324:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/LoginModal.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 96);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginModal = function (_Component) {\n\t_inherits(LoginModal, _Component);\n\n\tfunction LoginModal(props) {\n\t\t_classCallCheck(this, LoginModal);\n\n\t\t// UI states\n\t\tvar _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));\n\n\t\t_this.state = { show: false };\n\t\t_this.close = _this.close.bind(_this);\n\t\t_this.open = _this.open.bind(_this);\n\t\t// Input references\n\t\t_this.email;\n\t\t_this.password;\n\t\t_this.login = _this.login.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(LoginModal, [{\n\t\tkey: 'close',\n\t\tvalue: function close() {\n\t\t\tthis.setState({ show: false });\n\t\t}\n\t}, {\n\t\tkey: 'open',\n\t\tvalue: function open() {\n\t\t\tthis.setState({ show: true });\n\t\t}\n\t}, {\n\t\tkey: 'handleLoginResult',\n\t\tvalue: function handleLoginResult(json) {\n\t\t\tif (json.success === \"true\") {\n\t\t\t\t// Redirect\n\t\t\t\tthis.history.replace('/dashboard');\n\t\t\t\t// Manage session\n\t\t\t\tvar expireAt = new Date().getTime() + 20 * 1000;\n\t\t\t\tlocalStorage.setItem('expireAt', JSON.stringify(expireAt));\n\t\t\t}\n\t\t}\n\t\t// Ajax calls\n\n\t}, {\n\t\tkey: 'login',\n\t\tvalue: function login() {\n\t\t\tvar _this2 = this;\n\n\t\t\tfetch('/api/login/volunteer?email=' + this.email.value + '&password=' + this.password.value).then(function (res) {\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (json) {\n\t\t\t\treturn _this2.handleLoginResult(json);\n\t\t\t}).catch(function (err) {\n\t\t\t\treturn console.log(err);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t{ bsStyle: 'primary', bsSize: 'large', onClick: this.open },\n\t\t\t\t\t'Login'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactBootstrap.Modal,\n\t\t\t\t\t{ show: this.state.show, onHide: this.close },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Header,\n\t\t\t\t\t\t{ closeButton: true },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Modal.Title,\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Volunteer Login'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Body,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Form,\n\t\t\t\t\t\t\t{ className: 'container-fluid' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'email'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'email',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter email',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.email = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactBootstrap.FormGroup,\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_reactBootstrap.ControlLabel,\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'password'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(_reactBootstrap.FormControl, {\n\t\t\t\t\t\t\t\t\ttype: 'password',\n\t\t\t\t\t\t\t\t\tplaceholder: 'Enter password',\n\t\t\t\t\t\t\t\t\tinputRef: function inputRef(ref) {\n\t\t\t\t\t\t\t\t\t\t_this3.password = ref;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactBootstrap.Modal.Footer,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ bsStyle: 'primary', onClick: this.login },\n\t\t\t\t\t\t\t'Login'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t_reactBootstrap.Button,\n\t\t\t\t\t\t\t{ onClick: this.close },\n\t\t\t\t\t\t\t'Close'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LoginModal;\n}(_react.Component);\n\n;\n\nexports.default = LoginModal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcz8yZWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBGb3JtLCBGb3JtR3JvdXAsIENvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHQvLyBVSSBzdGF0ZXNcblx0XHR0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXHRcdHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG5cdFx0Ly8gSW5wdXQgcmVmZXJlbmNlc1xuXHRcdHRoaXMuZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZDtcblx0XHR0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuXHR9O1xuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XG5cdH07XG5cblx0aGFuZGxlTG9naW5SZXN1bHQoanNvbikge1xuXHRcdGlmIChqc29uLnN1Y2Nlc3MgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHQvLyBSZWRpcmVjdFxuXHRcdFx0dGhpcy5oaXN0b3J5LnJlcGxhY2UoJy9kYXNoYm9hcmQnKTtcblx0XHRcdC8vIE1hbmFnZSBzZXNzaW9uXG5cdFx0XHRsZXQgZXhwaXJlQXQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDIwICogMTAwMDtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVBdCcsIEpTT04uc3RyaW5naWZ5KGV4cGlyZUF0KSk7XG5cdFx0fVxuXHR9XG5cdC8vIEFqYXggY2FsbHNcblx0bG9naW4oKSB7XG5cdFx0ZmV0Y2goYC9hcGkvbG9naW4vdm9sdW50ZWVyP2VtYWlsPSR7dGhpcy5lbWFpbC52YWx1ZX0mcGFzc3dvcmQ9JHt0aGlzLnBhc3N3b3JkLnZhbHVlfWApXG4gICAgICAgIC50aGVuKCAocmVzKSA9PiByZXMuanNvbigpIClcbiAgICAgICAgLnRoZW4oIChqc29uKSA9PiB0aGlzLmhhbmRsZUxvZ2luUmVzdWx0KGpzb24pIClcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgYnNTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXt0aGlzLm9wZW59PlxuXHRcdFx0XHQgIExvZ2luXG5cdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3d9IG9uSGlkZT17dGhpcy5jbG9zZX0+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT5Wb2x1bnRlZXIgTG9naW48L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0PEZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5lbWFpbDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZiA9PiB7IHRoaXMuZW1haWwgPSByZWY7IH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5wYXNzd29yZDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZiA9PiB7IHRoaXMucGFzc3dvcmQgPSByZWY7IH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQgIDwvRm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmxvZ2lufT5cblx0XHRcdFx0XHRcdFx0TG9naW5cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlfT5DbG9zZTwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0PC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0xvZ2luTW9kYWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFUQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUF4QkE7QUFMQTtBQXNDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///324\n");

/***/ })

})