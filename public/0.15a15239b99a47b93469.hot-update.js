webpackHotUpdate(0,{

/***/ 126:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./frontend/components/Modal.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Modal = function (_React$Component) {\n  _inherits(Modal, _React$Component);\n\n  function Modal() {\n    _classCallCheck(this, Modal);\n\n    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));\n\n    _this.email = \"\";\n    _this.password = \"\";\n    _this._login = _this._login.bind(_this);\n    return _this;\n  }\n\n  _createClass(Modal, [{\n    key: \"_login\",\n    value: function _login() {\n      console.log(this.email.value);\n      console.log(this.password.value);\n\n      fetch(\"/api?email=\" + this.email.value + \"&password=\" + this.password.value).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.success === \"true\") {\n          window.location.href = \"/registration\";\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"modal fade\", id: \"exampleModal\", role: \"dialog\", \"aria-labelledby\": \"exampleModalLabel\", \"aria-hidden\": \"true\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"modal-dialog\", role: \"document\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"modal-content\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-header\" },\n              _react2.default.createElement(\n                \"h5\",\n                { className: \"modal-title\", id: \"exampleModalLabel\" },\n                this.props.title\n              ),\n              _react2.default.createElement(\n                \"button\",\n                { type: \"button\", className: \"close\", \"data-dismiss\": \"modal\", \"aria-label\": \"Close\" },\n                _react2.default.createElement(\n                  \"span\",\n                  { \"aria-hidden\": \"true\" },\n                  \"\\xD7\"\n                )\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-body\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"form-group\" },\n                _react2.default.createElement(\n                  \"label\",\n                  null,\n                  \"Username\"\n                ),\n                _react2.default.createElement(\"input\", { type: \"username\", className: \"form-control\", id: \"username\", placeholder: \"username\", ref: function ref(_ref) {\n                    _this2.email = _ref;\n                  } })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"form-group\" },\n                _react2.default.createElement(\n                  \"label\",\n                  null,\n                  \"Password\"\n                ),\n                _react2.default.createElement(\"input\", { type: \"password\", className: \"form-control\", id: \"password\", placeholder: \"password\", ref: function ref(_ref2) {\n                    _this2.password = _ref2;\n                  } })\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-footer\" },\n              _react2.default.createElement(\n                \"button\",\n                { type: \"button\", className: \"btn btn-secondary\", \"data-dismiss\": \"modal\" },\n                \"Close\"\n              ),\n              _react2.default.createElement(\n                \"button\",\n                { type: \"button\", className: \"btn btn-primary\", onClick: this._login },\n                \"Login\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Modal;\n}(_react2.default.Component);\n\nexports.default = Modal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTW9kYWwuanM/ZTViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVtYWlsID0gXCJcIjtcbiAgICB0aGlzLnBhc3N3b3JkID0gXCJcIjtcbiAgICB0aGlzLl9sb2dpbiA9IHRoaXMuX2xvZ2luLmJpbmQodGhpcylcbiAgfVxuXG4gIF9sb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtYWlsLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc3dvcmQudmFsdWUpXG5cbiAgICBmZXRjaChgL2FwaT9lbWFpbD0ke3RoaXMuZW1haWwudmFsdWV9JnBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2VzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XCIvcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgcmVmPXsocmVmKSA9PiB7dGhpcy5lbWFpbCA9IHJlZn19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgcmVmPXsocmVmKSA9PiB7dGhpcy5wYXNzd29yZCA9IHJlZn19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLl9sb2dpbn0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUF4QkE7QUFEQTtBQURBO0FBa0NBOzs7O0FBMURBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///126\n");

/***/ })

})