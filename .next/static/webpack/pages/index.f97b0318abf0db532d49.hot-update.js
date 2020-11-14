webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Heading.js":
/*!*******************************!*\
  !*** ./components/Heading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _server_fauthContoller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../server/fauthContoller */ "./server/fauthContoller.js");
/* harmony import */ var _server_fauthContoller__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_server_fauthContoller__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_cart_CartIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/cart/CartIcon */ "./components/cart/CartIcon.js");










var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\components\\Heading.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Heading = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Heading, _React$Component);

  var _super = _createSuper(Heading);

  function Heading() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Heading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      user: {},
      headerActive: "header"
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleBackground", function () {
      window.onscroll = function () {
        if (window.onscrollY >= 50) {
          console.log(window.onscrollY);
          this.setState({
            headerActive: "header active"
          });
        }
      };
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Heading, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var token, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem("token");
                _context.next = 3;
                return Object(_server_fauthContoller__WEBPACK_IMPORTED_MODULE_13__["getFrontUser"])(token);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    user: data.user
                  });
                }

                window.addEventListener("scroll", this.handleBackground);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          user = _this$state.user,
          headerActive = _this$state.headerActive;
      console.log(headerActive);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
        className: headerActive,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "header__details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "header__menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
              className: "header__name",
              children: "iguyra"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "searchtest",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "searchtest__inputcontainer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              type: "text",
              className: "searchtest__input",
              placeholder: "search product",
              id: "searchinput"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
              href: "#",
              className: "searchtest__searchbutton",
              id: "searchbutton",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                className: "fas fa-search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "header__profileDetails",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "header__profile",
            children: user.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "/user",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas activeIcon fa-user",
                  id: "user"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "/login",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
                  className: "fas fa-user",
                  id: "userLogin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "header__cart",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_cart_CartIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this);
    }
  }]);

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Heading);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJ1c2VyIiwiaGVhZGVyQWN0aXZlIiwid2luZG93Iiwib25zY3JvbGwiLCJvbnNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRGcm9udFVzZXIiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJhY2tncm91bmQiLCJzdGF0ZSIsImVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsVUFBSSxFQUFFLEVBREE7QUFFTkMsa0JBQVksRUFBRTtBQUZSLEs7OzJOQWVXLFlBQU07QUFDdkJDLFlBQU0sQ0FBQ0MsUUFBUCxHQUFrQixZQUFZO0FBQzVCLFlBQUlELE1BQU0sQ0FBQ0UsU0FBUCxJQUFvQixFQUF4QixFQUE0QjtBQUMxQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNFLFNBQW5CO0FBQ0EsZUFBS0csUUFBTCxDQUFjO0FBQUVOLHdCQUFZLEVBQUU7QUFBaEIsV0FBZDtBQUNEO0FBQ0YsT0FMRDtBQU1ELEs7Ozs7Ozs7Ozs7Ozs7O0FBaEJPTyxxQixHQUFRQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQzs7dUJBQ0tDLDRFQUFZLENBQUNILEtBQUQsQzs7O0FBQXpCSSxvQjs7QUFDTixvQkFBSUEsSUFBSixFQUFVO0FBQ1IsdUJBQUtMLFFBQUwsQ0FBYztBQUFFUCx3QkFBSSxFQUFFWSxJQUFJLENBQUNaO0FBQWIsbUJBQWQ7QUFDRDs7QUFFREUsc0JBQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsZ0JBQXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBWU87QUFBQSx3QkFDd0IsS0FBS0MsS0FEN0I7QUFBQSxVQUNDZixJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPQyxZQURQLGVBQ09BLFlBRFA7QUFFUEksYUFBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVo7QUFDQSwwQkFDRTtBQUFTLGlCQUFTLEVBQUVBLFlBQXBCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGlEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyw0QkFBZjtBQUFBLG9DQUNFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsdUJBQVMsRUFBQyxtQkFGWjtBQUdFLHlCQUFXLEVBQUMsZ0JBSGQ7QUFJRSxnQkFBRSxFQUFDO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU9FO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQVksdUJBQVMsRUFBQywwQkFBdEI7QUFBaUQsZ0JBQUUsRUFBQyxjQUFwRDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFzQkU7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsc0JBQ0dELElBQUksQ0FBQ2dCLEtBQUwsZ0JBQ0MscUVBQUMsaURBQUQ7QUFBTSxrQkFBSSxFQUFDLE9BQVg7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQyx3QkFBYjtBQUFzQyxvQkFBRSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxnQkFPQyxxRUFBQyxpREFBRDtBQUFNLGtCQUFJLEVBQUMsUUFBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLGFBQWI7QUFBMkIsb0JBQUUsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBZ0JFO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFrREQ7Ozs7RUE5RW1CQyw2Q0FBSyxDQUFDQyxTOztBQWlGYm5CLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5N2IwMzE4YWJmMGRiNTMyZDQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXRGcm9udFVzZXIgfSBmcm9tIFwiLi4vc2VydmVyL2ZhdXRoQ29udG9sbGVyXCI7XHJcbmltcG9ydCBDYXJ0SWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0L0NhcnRJY29uXCI7XHJcblxyXG5jbGFzcyBIZWFkaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHVzZXI6IHt9LFxyXG4gICAgaGVhZGVyQWN0aXZlOiBcImhlYWRlclwiLFxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZyb250VXNlcih0b2tlbik7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcjogZGF0YS51c2VyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlQmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAod2luZG93Lm9uc2Nyb2xsWSA+PSA1MCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5vbnNjcm9sbFkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWFkZXJBY3RpdmU6IFwiaGVhZGVyIGFjdGl2ZVwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlciwgaGVhZGVyQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coaGVhZGVyQWN0aXZlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aGVhZGVyQWN0aXZlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnVcIj48L2Rpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlcl9fbmFtZVwiPmlndXlyYTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNodGVzdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2h0ZXN0X19pbnB1dGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNodGVzdF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIHByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2VhcmNoaW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNlYXJjaHRlc3RfX3NlYXJjaGJ1dHRvblwiIGlkPVwic2VhcmNoYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19wcm9maWxlRGV0YWlsc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAge3VzZXIuZW1haWwgPyAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGFjdGl2ZUljb24gZmEtdXNlclwiIGlkPVwidXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgaWQ9XCJ1c2VyTG9naW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2FydFwiPlxyXG4gICAgICAgICAgICA8Q2FydEljb24gLz5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhcnQtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=