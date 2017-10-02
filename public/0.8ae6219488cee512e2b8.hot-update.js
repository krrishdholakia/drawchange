webpackHotUpdate(0,{

/***/ 561:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./frontend/components/ModalButton.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ModalButton = _react2.default.createClass({\n  displayName: \"ModalButton\",\n  getInitialState: function getInitialState() {\n    return { showModal: false };\n  },\n  close: function close() {\n    this.setState({ showModal: false });\n  },\n  open: function open() {\n    this.setState({ showModal: true });\n  },\n  render: function render() {\n    var popover = _react2.default.createElement(\n      Popover,\n      { id: \"modal-popover\", title: \"popover\" },\n      \"very popover. such engagement\"\n    );\n    var tooltip = _react2.default.createElement(\n      Tooltip,\n      { id: \"modal-tooltip\" },\n      \"wow.\"\n    );\n\n    return _react2.default.createElement(\n      \"div\",\n      null,\n      _react2.default.createElement(\n        \"p\",\n        null,\n        \"Click to get the full Modal experience!\"\n      ),\n      _react2.default.createElement(\n        Button,\n        {\n          bsStyle: \"primary\",\n          bsSize: \"large\",\n          onClick: this.open\n        },\n        \"Launch demo modal\"\n      ),\n      _react2.default.createElement(\n        Modal,\n        { show: this.state.showModal, onHide: this.close },\n        _react2.default.createElement(\n          Modal.Header,\n          { closeButton: true },\n          _react2.default.createElement(\n            Modal.Title,\n            null,\n            \"Modal heading\"\n          )\n        ),\n        _react2.default.createElement(\n          Modal.Body,\n          null,\n          _react2.default.createElement(\n            \"h4\",\n            null,\n            \"Text in a modal\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\"\n          ),\n          _react2.default.createElement(\n            \"h4\",\n            null,\n            \"Popover in a modal\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"there is a \",\n            _react2.default.createElement(\n              OverlayTrigger,\n              { overlay: popover },\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"popover\"\n              )\n            ),\n            \" here\"\n          ),\n          _react2.default.createElement(\n            \"h4\",\n            null,\n            \"Tooltips in a modal\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"there is a \",\n            _react2.default.createElement(\n              OverlayTrigger,\n              { overlay: tooltip },\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"tooltip\"\n              )\n            ),\n            \" here\"\n          ),\n          _react2.default.createElement(\"hr\", null),\n          _react2.default.createElement(\n            \"h4\",\n            null,\n            \"Overflowing text to show scroll behavior\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\"\n          )\n        ),\n        _react2.default.createElement(\n          Modal.Footer,\n          null,\n          _react2.default.createElement(\n            Button,\n            { onClick: this.close },\n            \"Close\"\n          )\n        )\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTW9kYWxCdXR0b24uanM/OTY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBNb2RhbEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7IHNob3dNb2RhbDogZmFsc2UgfTtcbiAgfSxcblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcbiAgfSxcblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBvcG92ZXIgPSAoXG4gICAgICA8UG9wb3ZlciBpZD1cIm1vZGFsLXBvcG92ZXJcIiB0aXRsZT1cInBvcG92ZXJcIj5cbiAgICAgICAgdmVyeSBwb3BvdmVyLiBzdWNoIGVuZ2FnZW1lbnRcbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApO1xuICAgIGNvbnN0IHRvb2x0aXAgPSAoXG4gICAgICA8VG9vbHRpcCBpZD1cIm1vZGFsLXRvb2x0aXBcIj5cbiAgICAgICAgd293LlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+Q2xpY2sgdG8gZ2V0IHRoZSBmdWxsIE1vZGFsIGV4cGVyaWVuY2UhPC9wPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3Blbn1cbiAgICAgICAgPlxuICAgICAgICAgIExhdW5jaCBkZW1vIG1vZGFsXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlfT5cbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPk1vZGFsIGhlYWRpbmc8L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPGg0PlRleHQgaW4gYSBtb2RhbDwvaDQ+XG4gICAgICAgICAgICA8cD5EdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cywgbmlzaSBlcmF0IHBvcnR0aXRvciBsaWd1bGEuPC9wPlxuXG4gICAgICAgICAgICA8aDQ+UG9wb3ZlciBpbiBhIG1vZGFsPC9oND5cbiAgICAgICAgICAgIDxwPnRoZXJlIGlzIGEgPE92ZXJsYXlUcmlnZ2VyIG92ZXJsYXk9e3BvcG92ZXJ9PjxhIGhyZWY9XCIjXCI+cG9wb3ZlcjwvYT48L092ZXJsYXlUcmlnZ2VyPiBoZXJlPC9wPlxuXG4gICAgICAgICAgICA8aDQ+VG9vbHRpcHMgaW4gYSBtb2RhbDwvaDQ+XG4gICAgICAgICAgICA8cD50aGVyZSBpcyBhIDxPdmVybGF5VHJpZ2dlciBvdmVybGF5PXt0b29sdGlwfT48YSBocmVmPVwiI1wiPnRvb2x0aXA8L2E+PC9PdmVybGF5VHJpZ2dlcj4gaGVyZTwvcD5cblxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIDxoND5PdmVyZmxvd2luZyB0ZXh0IHRvIHNob3cgc2Nyb2xsIGJlaGF2aW9yPC9oND5cbiAgICAgICAgICAgIDxwPkNyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy48L3A+XG4gICAgICAgICAgICA8cD5QcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci48L3A+XG4gICAgICAgICAgICA8cD5BZW5lYW4gbGFjaW5pYSBiaWJlbmR1bSBudWxsYSBzZWQgY29uc2VjdGV0dXIuIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gRG9uZWMgc2VkIG9kaW8gZHVpLiBEb25lYyB1bGxhbWNvcnBlciBudWxsYSBub24gbWV0dXMgYXVjdG9yIGZyaW5naWxsYS48L3A+XG4gICAgICAgICAgICA8cD5DcmFzIG1hdHRpcyBjb25zZWN0ZXR1ciBwdXJ1cyBzaXQgYW1ldCBmZXJtZW50dW0uIENyYXMganVzdG8gb2RpbywgZGFwaWJ1cyBhYyBmYWNpbGlzaXMgaW4sIGVnZXN0YXMgZWdldCBxdWFtLiBNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuPC9wPlxuICAgICAgICAgICAgPHA+UHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuPC9wPlxuICAgICAgICAgICAgPHA+QWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzIGF1Y3RvciBmcmluZ2lsbGEuPC9wPlxuICAgICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cbiAgICAgICAgICAgIDxwPlByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gVml2YW11cyBzYWdpdHRpcyBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLjwvcD5cbiAgICAgICAgICAgIDxwPkFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTW9kYWxCdXR0b24uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBM0JBO0FBWEE7QUE0Q0E7QUF0RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///561\n");

/***/ })

})