webpackHotUpdate(0,{

/***/ 329:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/SurveyCreate.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 73);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(/*! redux */ 108);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 98);\n\nvar _NewQuestion = __webpack_require__(/*! ../components/NewQuestion */ 321);\n\nvar _NewQuestion2 = _interopRequireDefault(_NewQuestion);\n\nvar _DisplayQuestion = __webpack_require__(/*! ../components/DisplayQuestion */ 317);\n\nvar _DisplayQuestion2 = _interopRequireDefault(_DisplayQuestion);\n\nvar _SurveyConduct = __webpack_require__(/*! ./SurveyConduct */ 328);\n\nvar _SurveyConduct2 = _interopRequireDefault(_SurveyConduct);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NPM Packages\n\n\n// Local Imports\n\n\nvar SurveyCreate = function (_Component) {\n  _inherits(SurveyCreate, _Component);\n\n  function SurveyCreate(props) {\n    _classCallCheck(this, SurveyCreate);\n\n    var _this = _possibleConstructorReturn(this, (SurveyCreate.__proto__ || Object.getPrototypeOf(SurveyCreate)).call(this, props));\n\n    _this.questionArr = [];\n    _this.state = {\n      type: '',\n      name: '',\n      choices: '',\n      questions: []\n    };\n    _this.surveyResponse = _this.surveyResponse.bind(_this);\n    _this.updateName = _this.updateName.bind(_this);\n    _this.updateChoices = _this.updateChoices.bind(_this);\n    _this.updateType = _this.updateType.bind(_this);\n    _this.addQuestion = _this.addQuestion.bind(_this);\n    _this.saveSurvey = _this.saveSurvey.bind(_this);\n    return _this;\n  }\n\n  _createClass(SurveyCreate, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.props.loadSurvey(this.props.match.params.id);\n    }\n  }, {\n    key: 'updateName',\n    value: function updateName(e) {\n      this.setState({ name: e.target.value });\n    }\n  }, {\n    key: 'updateChoices',\n    value: function updateChoices(e) {\n      this.setState({ choices: e.target.value });\n    }\n  }, {\n    key: 'updateType',\n    value: function updateType(e) {\n      this.setState({ type: e.target.value });\n    }\n  }, {\n    key: 'addQuestion',\n    value: function addQuestion() {\n      var questions = this.state.questions.slice();\n      questions.push({\n        name: this.state.name,\n        type: this.state.type,\n        message: this.state.name,\n        choices: this.state.choices\n      });\n      this.setState({ questions: questions, name: '', choices: '', type: '' });\n    }\n  }, {\n    key: 'saveSurvey',\n    value: function saveSurvey() {\n      var questions = this.state.questions.map(function (question) {\n        question.choices = question.choices !== '' ? question.choices.split(',') : null;\n        question.when = true;\n        question.previous = null;\n        return question;\n      });\n\n      var survey = {\n        questions: questions,\n        assignees: [],\n        uploader: this.props.uploader\n      };\n      this.props.createNewSurvey(survey);\n    }\n  }, {\n    key: 'surveyResponse',\n    value: function surveyResponse() {\n      // this.context.router.push({\n      //   pathname: '/SurveyConduct',\n      //   state: {email: this.state.email}\n      // });\n      alert('jello');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        _reactBootstrap.Row,\n        null,\n        _react2.default.createElement(\n          _reactBootstrap.Col,\n          { lg: 6, lgOffset: 3 },\n          _react2.default.createElement(\n            _reactBootstrap.Panel,\n            { header: _react2.default.createElement(\n                'h3',\n                null,\n                'Create New Survey'\n              ) },\n            _react2.default.createElement(\n              'form',\n              null,\n              _react2.default.createElement(_NewQuestion2.default, {\n                type: this.state.type,\n                name: this.state.name,\n                choices: this.state.choices,\n                updateType: this.updateType,\n                updateName: this.updateName,\n                updateChoices: this.updateChoices,\n                addQuestion: this.addQuestion }),\n              _react2.default.createElement(\n                _reactBootstrap.Panel,\n                { header: _react2.default.createElement(\n                    'h3',\n                    null,\n                    'Questions'\n                  ) },\n                this.state.questions.length === 0 ? _react2.default.createElement(\n                  'p',\n                  null,\n                  'Questions added to survey will appear here...'\n                ) : this.state.questions.map(function (question, index) {\n                  return _react2.default.createElement(_DisplayQuestion2.default, {\n                    key: index,\n                    question: question,\n                    index: index\n                  });\n                })\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.Button,\n                { bsStyle: 'primary', onClick: this.saveSurvey },\n                ' Save Survey '\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.Button,\n                { bsStyle: 'primary', onClick: function onClick() {\n                    _this2.surveyResponse();\n                  } },\n                ' Move On '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SurveyCreate;\n}(_react.Component);\n\nSurveyCreate.propTypes = {\n  uploader: _propTypes2.default.string,\n  createNewSurvey: _propTypes2.default.func\n};\n\n// const mapStateToProps = (state) => {\n//   return {\n//     uploader: state.auth.user._id\n//   };\n// // };\n\n// function mapDispatchToProps(dispatch) {\n//   return bindActionCreators(actions, dispatch);\n// }\n\nexports.default = SurveyCreate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvU3VydmV5Q3JlYXRlLmpzPzQ5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTlBNIFBhY2thZ2VzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBDb2wsIFJvdywgUGFuZWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbi8vIExvY2FsIEltcG9ydHNcbmltcG9ydCBOZXdRdWVzdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05ld1F1ZXN0aW9uJztcbmltcG9ydCBEaXNwbGF5UXVlc3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9EaXNwbGF5UXVlc3Rpb24nO1xuaW1wb3J0IFN1cnZleUNvbmR1Y3QgZnJvbSAnLi9TdXJ2ZXlDb25kdWN0JztcblxuXG5jbGFzcyBTdXJ2ZXlDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnF1ZXN0aW9uQXJyID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBjaG9pY2VzOiAnJyxcbiAgICAgIHF1ZXN0aW9uczogW11cbiAgICB9O1xuICAgIHRoaXMuc3VydmV5UmVzcG9uc2UgPSB0aGlzLnN1cnZleVJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVOYW1lID0gdGhpcy51cGRhdGVOYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVDaG9pY2VzID0gdGhpcy51cGRhdGVDaG9pY2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVUeXBlID0gdGhpcy51cGRhdGVUeXBlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRRdWVzdGlvbiA9IHRoaXMuYWRkUXVlc3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmVTdXJ2ZXkgPSB0aGlzLnNhdmVTdXJ2ZXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWRTdXJ2ZXkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICB9XG4gIHVwZGF0ZU5hbWUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgdXBkYXRlQ2hvaWNlcyhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hvaWNlczogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuICB1cGRhdGVUeXBlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0eXBlOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgYWRkUXVlc3Rpb24oKSB7XG4gICAgY29uc3QgcXVlc3Rpb25zID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMuc2xpY2UoKTtcbiAgICBxdWVzdGlvbnMucHVzaCh7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICB0eXBlOiB0aGlzLnN0YXRlLnR5cGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICBjaG9pY2VzOiB0aGlzLnN0YXRlLmNob2ljZXNcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtxdWVzdGlvbnMsIG5hbWU6ICcnLCBjaG9pY2VzOiAnJywgdHlwZTogJyd9KTtcbiAgfVxuXG4gIHNhdmVTdXJ2ZXkoKSB7XG4gICAgY29uc3QgcXVlc3Rpb25zID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcbiAgICAgIHF1ZXN0aW9uLmNob2ljZXMgPSBxdWVzdGlvbi5jaG9pY2VzICE9PSAnJyA/IHF1ZXN0aW9uLmNob2ljZXMuc3BsaXQoJywnKSA6IG51bGw7XG4gICAgICBxdWVzdGlvbi53aGVuID0gdHJ1ZTtcbiAgICAgIHF1ZXN0aW9uLnByZXZpb3VzID0gbnVsbDtcbiAgICAgIHJldHVybiBxdWVzdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN1cnZleSA9IHtcbiAgICAgIHF1ZXN0aW9ucyxcbiAgICAgIGFzc2lnbmVlczogW10sXG4gICAgICB1cGxvYWRlcjogdGhpcy5wcm9wcy51cGxvYWRlclxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVOZXdTdXJ2ZXkoc3VydmV5KTtcbiAgfVxuXG4gIHN1cnZleVJlc3BvbnNlKCkge1xuICAgIC8vIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCh7XG4gICAgLy8gICBwYXRobmFtZTogJy9TdXJ2ZXlDb25kdWN0JyxcbiAgICAvLyAgIHN0YXRlOiB7ZW1haWw6IHRoaXMuc3RhdGUuZW1haWx9XG4gICAgLy8gfSk7XG4gICAgYWxlcnQoJ2plbGxvJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbGc9ezZ9IGxnT2Zmc2V0PXszfT5cbiAgICAgICAgICA8UGFuZWwgaGVhZGVyPXs8aDM+Q3JlYXRlIE5ldyBTdXJ2ZXk8L2gzPn0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPE5ld1F1ZXN0aW9uXG4gICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBjaG9pY2VzPXt0aGlzLnN0YXRlLmNob2ljZXN9XG4gICAgICAgICAgICAgICAgdXBkYXRlVHlwZT17dGhpcy51cGRhdGVUeXBlfVxuICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWU9e3RoaXMudXBkYXRlTmFtZX1cbiAgICAgICAgICAgICAgICB1cGRhdGVDaG9pY2VzPXt0aGlzLnVwZGF0ZUNob2ljZXN9XG4gICAgICAgICAgICAgICAgYWRkUXVlc3Rpb249e3RoaXMuYWRkUXVlc3Rpb259Lz5cblxuICAgICAgICAgICAgICA8UGFuZWwgaGVhZGVyPXs8aDM+UXVlc3Rpb25zPC9oMz59PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnF1ZXN0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gPHA+UXVlc3Rpb25zIGFkZGVkIHRvIHN1cnZleSB3aWxsIGFwcGVhciBoZXJlLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5UXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9QYW5lbD5cblxuXG4gICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNhdmVTdXJ2ZXl9PiBTYXZlIFN1cnZleSA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnN1cnZleVJlc3BvbnNlKCk7fX0+IE1vdmUgT24gPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9QYW5lbD5cblxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuU3VydmV5Q3JlYXRlLnByb3BUeXBlcyA9IHtcbiAgdXBsb2FkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNyZWF0ZU5ld1N1cnZleTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVwbG9hZGVyOiBzdGF0ZS5hdXRoLnVzZXIuX2lkXG4vLyAgIH07XG4vLyAvLyB9O1xuXG4vLyBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbi8vICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaCk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN1cnZleUNyZWF0ZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbnRhaW5lcnMvU3VydmV5Q3JlYXRlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQVhBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUhBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBREE7QUFEQTtBQURBO0FBa0NBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///329\n");

/***/ })

})