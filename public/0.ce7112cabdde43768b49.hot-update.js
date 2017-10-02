webpackHotUpdate(0,{

/***/ 408:
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./frontend/components/MyModal.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ 560);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _bootstrap = __webpack_require__(/*! bootstrap */ 547);\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 533);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MyModal = function (_React$Component) {\n    _inherits(MyModal, _React$Component);\n\n    function MyModal() {\n        _classCallCheck(this, MyModal);\n\n        var _this = _possibleConstructorReturn(this, (MyModal.__proto__ || Object.getPrototypeOf(MyModal)).call(this));\n\n        _this.email;\n        _this.password;\n        _this._login = _this._login.bind(_this);\n        return _this;\n    }\n\n    _createClass(MyModal, [{\n        key: '_login',\n        value: function _login() {\n            fetch('/api/login/volunteer?email=' + this.email.value + '&password=' + this.password.value).then(function (res) {\n                return res.json();\n            }).then(function (json) {\n                if (json.success === \"true\") {\n                    window.location.href = \"/dashboard\";\n                }\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'static-modal' },\n                _react2.default.createElement(\n                    _reactBootstrap.Modal,\n                    this.props,\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Header,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Modal.Title,\n                            null,\n                            'Modal title'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Body,\n                        null,\n                        'One fine body...'\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Footer,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Button,\n                            null,\n                            'Close'\n                        ),\n                        _react2.default.createElement(\n                            _reactBootstrap.Button,\n                            { bsStyle: 'primary' },\n                            'Save changes'\n                        )\n                    )\n                )\n            );\n        }\n\n        // <div className=\"modal fade\" id=\"exampleModal\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        //   <div className=\"modal-dialog\" role=\"document\">\n        //     <div className=\"modal-content\">\n        //\n        //       <div className=\"modal-header\">\n        //         <h5 className=\"modal-title\" id=\"exampleModalLabel\">{this.props.title}</h5>\n        //         <button type=\"button\" className=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        //           <span aria-hidden=\"true\">&times;</span>\n        //         </button>\n        //       </div>\n        //\n        //\n        //       <div className=\"modal-body\">\n        //\n        //         <div className=\"form-group\">\n        //           <label>Username</label>\n        //           <input type=\"username\" className=\"form-control\" id=\"username\" placeholder=\"username\" ref={(ref) => {this.email = ref}}/>\n        //         </div>\n        //         <div className=\"form-group\">\n        //           <label>Password</label>\n        //           <input type=\"password\" className=\"form-control\" id=\"password\" placeholder=\"password\" ref={(ref) => {this.password = ref}}/>\n        //         </div>\n        //\n        //       </div>\n        //\n        //\n        //       <div className=\"modal-footer\">\n        //         <button type=\"button\" className=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        //         <button type=\"button\" className=\"btn btn-primary\" onClick={this._login}>Login</button>\n        //       </div>\n        //     </div>\n        //   </div>\n        // </div>\n\n    }]);\n\n    return MyModal;\n}(_react2.default.Component);\n\nexports.default = MyModal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTXlNb2RhbC5qcz9jYjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQganF1ZXJ5IGZyb20gJ2pxdWVyeSdcbmltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJ1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW1haWw7XG4gICAgICAgIHRoaXMucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuX2xvZ2luID0gdGhpcy5fbG9naW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9naW4oKSB7XG4gICAgICAgIGZldGNoKGAvYXBpL2xvZ2luL3ZvbHVudGVlcj9lbWFpbD0ke3RoaXMuZW1haWwudmFsdWV9JnBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX1gKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uc3VjY2VzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWMtbW9kYWxcIj5cbiAgICAgICAgICAgIDxNb2RhbCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPk1vZGFsIHRpdGxlPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgT25lIGZpbmUgYm9keS4uLlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPlNhdmUgY2hhbmdlczwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cblxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8gPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gIC8vXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gIC8vICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XG4gIC8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAvLyAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vXG4gIC8vXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAvL1xuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAvLyAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cbiAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIHJlZj17KHJlZikgPT4ge3RoaXMuZW1haWwgPSByZWZ9fS8+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gIC8vICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgcmVmPXsocmVmKSA9PiB7dGhpcy5wYXNzd29yZCA9IHJlZn19Lz5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy9cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vXG4gIC8vXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gIC8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gIC8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5fbG9naW59PkxvZ2luPC9idXR0b24+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvZGl2PlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTXlNb2RhbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVRBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBMUVBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///408\n");

/***/ })

})