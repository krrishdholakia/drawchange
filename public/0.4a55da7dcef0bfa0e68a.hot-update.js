webpackHotUpdate(0,{

/***/ 273:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/components/ItemList.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _InlineItem = __webpack_require__(/*! ./InlineItem */ 272);\n\nvar _InlineItem2 = _interopRequireDefault(_InlineItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ItemList = function (_React$Component) {\n  _inherits(ItemList, _React$Component);\n\n  function ItemList(props) {\n    _classCallCheck(this, ItemList);\n\n    var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));\n\n    _this.items = _this.props.items;\n    _this.title = _this.props.title;\n    _this.updateCurrentEvent = _this.props.updateCurrentEvent;\n    return _this;\n  }\n\n  _createClass(ItemList, [{\n    key: 'renderItem',\n    value: function renderItem() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'ItemList' },\n        this.items.map(function (item) {\n          return _react2.default.createElement(_InlineItem2.default, {\n            name: item.name,\n            date: item.date,\n            location: item.location,\n            description: item.description,\n            id: item._id,\n            updateCurrentEvent: _this2.updateCurrentEvent\n          });\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          this.title\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          this.renderItem()\n        )\n      );\n    }\n  }]);\n\n  return ItemList;\n}(_react2.default.Component);\n\nItemList.propTypes = {\n  items: _propTypes2.default.array,\n  title: _propTypes2.default.string,\n  updateCurrentEvent: _propTypes2.default.func\n};\n\nexports.default = ItemList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvSXRlbUxpc3QuanM/ZDUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IElubGluZUl0ZW0gZnJvbSAnLi9JbmxpbmVJdGVtJztcblxuY2xhc3MgSXRlbUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5wcm9wcy5pdGVtcztcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRFdmVudCA9IHRoaXMucHJvcHMudXBkYXRlQ3VycmVudEV2ZW50O1xuICB9XG5cbiAgcmVuZGVySXRlbSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtTGlzdFwiPlxuICAgICAgICB7IHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPElubGluZUl0ZW1cbiAgICAgICAgICAgIG5hbWUgPSB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgZGF0ZSA9IHtpdGVtLmRhdGV9XG4gICAgICAgICAgICBsb2NhdGlvbiA9IHtpdGVtLmxvY2F0aW9ufVxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlkID0ge2l0ZW0uX2lkfVxuICAgICAgICAgICAgdXBkYXRlQ3VycmVudEV2ZW50ID0ge3RoaXMudXBkYXRlQ3VycmVudEV2ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgICAge3RoaXMudGl0bGV9XG4gICAgICA8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSXRlbUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXBkYXRlQ3VycmVudEV2ZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFEQTtBQWFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTs7OztBQXBDQTtBQUNBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///273\n");

/***/ })

})