webpackHotUpdate(0,{

/***/ 321:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./frontend/components/NewQuestion.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 98);\n\nvar _Input = __webpack_require__(/*! ./Input */ 320);\n\nvar _Input2 = _interopRequireDefault(_Input);\n\nvar _DropDown = __webpack_require__(/*! ./DropDown */ 318);\n\nvar _DropDown2 = _interopRequireDefault(_DropDown);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// New Question  Component\n\n\n// Local Imports\nvar NewQuestion = function NewQuestion(_ref) {\n  var type = _ref.type,\n      name = _ref.name,\n      choices = _ref.choices,\n      updateName = _ref.updateName,\n      updateChoices = _ref.updateChoices,\n      updateType = _ref.updateType,\n      addQuestion = _ref.addQuestion;\n  return _react2.default.createElement(\n    _reactBootstrap.Panel,\n    { header: _react2.default.createElement(\n        'h4',\n        null,\n        'New Question'\n      ), bsStyle: 'success' },\n    _react2.default.createElement(\n      _reactBootstrap.FormGroup,\n      null,\n      _react2.default.createElement(_Input2.default, {\n        value: name,\n        question: \"Question to add?\",\n        handleChange: updateName })\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.FormGroup,\n      null,\n      _react2.default.createElement(_DropDown2.default, {\n        value: type,\n        choices: ['input', 'scale', 'multiple-choice', 'checkbox', 'time'],\n        question: \"Type of Question?\",\n        handleChange: updateType })\n    ),\n    type === \"multiple-choice\" ? _react2.default.createElement(\n      _reactBootstrap.FormGroup,\n      null,\n      _react2.default.createElement(_Input2.default, {\n        value: choices,\n        question: \"Choices? (seperate w/ commas)\",\n        handleChange: updateChoices })\n    ) : _react2.default.createElement('div', null),\n    type === \"checkbox\" ? _react2.default.createElement(\n      _reactBootstrap.FormGroup,\n      null,\n      _react2.default.createElement(_Input2.default, {\n        value: choices,\n        question: \"Choices? (seperate w/ commas)\",\n        handleChange: updateChoices })\n    ) : _react2.default.createElement('div', null),\n    _react2.default.createElement(\n      _reactBootstrap.Button,\n      { onClick: addQuestion },\n      ' Add New Question '\n    )\n  );\n}; // NPM Imports\n\n\nNewQuestion.propTypes = {\n  type: _propTypes2.default.string,\n  name: _propTypes2.default.string,\n  choices: _propTypes2.default.string,\n  updateType: _propTypes2.default.func,\n  updateName: _propTypes2.default.func,\n  updateChoices: _propTypes2.default.func,\n  addQuestion: _propTypes2.default.func\n};\n\nexports.default = NewQuestion;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTmV3UXVlc3Rpb24uanM/NzYxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOUE0gSW1wb3J0c1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sICBGb3JtR3JvdXAsIFBhbmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuLy8gTG9jYWwgSW1wb3J0c1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4vRHJvcERvd24nO1xuXG4vLyBOZXcgUXVlc3Rpb24gIENvbXBvbmVudFxuY29uc3QgTmV3UXVlc3Rpb24gPSAoeyB0eXBlLCBuYW1lLCBjaG9pY2VzLCB1cGRhdGVOYW1lLCB1cGRhdGVDaG9pY2VzLCB1cGRhdGVUeXBlLCBhZGRRdWVzdGlvbiB9KSA9PiAoXG4gIDxQYW5lbCBoZWFkZXI9ezxoND5OZXcgUXVlc3Rpb248L2g0Pn0gYnNTdHlsZT1cInN1Y2Nlc3NcIj5cbiAgICA8Rm9ybUdyb3VwPlxuICAgICAgPElucHV0XG4gICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICBxdWVzdGlvbj17XCJRdWVzdGlvbiB0byBhZGQ/XCJ9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17dXBkYXRlTmFtZX0vPlxuICAgIDwvRm9ybUdyb3VwPlxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8RHJvcERvd25cbiAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgIGNob2ljZXM9e1snaW5wdXQnLCAnc2NhbGUnLCAnbXVsdGlwbGUtY2hvaWNlJywgJ2NoZWNrYm94JywgJ3RpbWUnXX1cbiAgICAgICAgcXVlc3Rpb249e1wiVHlwZSBvZiBRdWVzdGlvbj9cIn1cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt1cGRhdGVUeXBlfS8+XG4gICAgPC9Gb3JtR3JvdXA+XG4gICAge3R5cGUgPT09IFwibXVsdGlwbGUtY2hvaWNlXCJcbiAgICAgID8gPEZvcm1Hcm91cD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtjaG9pY2VzfVxuICAgICAgICAgICAgcXVlc3Rpb249e1wiQ2hvaWNlcz8gKHNlcGVyYXRlIHcvIGNvbW1hcylcIn1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dXBkYXRlQ2hvaWNlc30vPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDogPGRpdi8+fVxuICAgIHt0eXBlID09PSBcImNoZWNrYm94XCJcbiAgICAgID8gPEZvcm1Hcm91cD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtjaG9pY2VzfVxuICAgICAgICAgICAgcXVlc3Rpb249e1wiQ2hvaWNlcz8gKHNlcGVyYXRlIHcvIGNvbW1hcylcIn1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dXBkYXRlQ2hvaWNlc30vPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDogPGRpdi8+fVxuICAgIDxCdXR0b24gb25DbGljaz17YWRkUXVlc3Rpb259PiBBZGQgTmV3IFF1ZXN0aW9uIDwvQnV0dG9uPlxuICA8L1BhbmVsPlxuKTtcblxuXG5OZXdRdWVzdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNob2ljZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVwZGF0ZVR5cGU6IFByb3BUeXBlcy5mdW5jLFxuICB1cGRhdGVOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgdXBkYXRlQ2hvaWNlczogUHJvcFR5cGVzLmZ1bmMsXG4gIGFkZFF1ZXN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV3UXVlc3Rpb247XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL05ld1F1ZXN0aW9uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5QkE7QUFEQTtBQUNBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///321\n");

/***/ })

})