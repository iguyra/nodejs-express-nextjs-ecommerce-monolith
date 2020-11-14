webpackHotUpdate_N_E("pages/checkout/details",{

/***/ "./components/checkout/Pay.js":
/*!************************************!*\
  !*** ./components/checkout/Pay.js ***!
  \************************************/
/*! exports provided: Pay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pay", function() { return Pay; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\components\\checkout\\Pay.js",
    _this = undefined,
    _s = $RefreshSig$();


var Pay = function Pay(_ref) {
  _s();

  var cart = _ref.cart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      input = _useState2[0],
      setInput = _useState2[1];

  console.log("input", input);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "details pay",
    id: "pay",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "steps",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list ",
        children: "details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list ",
        children: "shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list active",
        children: "pay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "details__summarycontainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "details__summary",
        children: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "details__list",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "far icon fa-user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), input && input.firstname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas icon fa-map-pin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), "bus stop 100"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "far icon fa-envelope"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), " ", input && input.email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas icon fa-phone-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), " ", input && input.number]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "details__itemcontainer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "details__alllist",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__allitems details__allitems--total",
          children: ["total price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "details__allitemprice",
            children: ["GH: ", cart.totalProductsPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__allitems",
          children: ["causal snkeaer GT0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "details__allitemprice",
            children: "GH: 500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), cart.products && cart.products.map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "details__allitems",
            children: [product.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "details__allitemprice",
              children: ["GH: ", product.totalPrice]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "details__nextcontainer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details__next",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "details__next--link",
          id: "paymentproceed",
          children: "pay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(Pay, "ecaSfvr9+ifuaRO5PtIUZC2dNjw=");

_c = Pay;
/* harmony default export */ __webpack_exports__["default"] = (Pay);

var _c;

$RefreshReg$(_c, "Pay");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9QYXkuanMiXSwibmFtZXMiOlsiUGF5IiwiY2FydCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb25zb2xlIiwibG9nIiwiZmlyc3RuYW1lIiwiZW1haWwiLCJudW1iZXIiLCJ0b3RhbFByb2R1Y3RzUHJpY2UiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwidG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTEMsc0RBQVEsRUFESDtBQUFBLE1BQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFBQSxtQkFFTEYsc0RBQVEsRUFGSDtBQUFBLE1BRXhCRyxLQUZ3QjtBQUFBLE1BRWpCQyxRQUZpQjs7QUFJL0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJILEtBQXJCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsYUFBbkI7QUFBaUMsTUFBRSxFQUFDLEtBQXBDO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNJLFNBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFRRTtBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDNENKLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFXRTtBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDNkNMLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxNQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUEwQkU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsNENBQWQ7QUFBQSxpREFFRTtBQUFHLHFCQUFTLEVBQUMsdUJBQWI7QUFBQSwrQkFDT1YsSUFBSSxDQUFDVyxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUEsd0RBRUU7QUFBRyxxQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVdHWCxJQUFJLENBQUNZLFFBQUwsSUFDQ1osSUFBSSxDQUFDWSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLDhCQUNoQjtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQSx1QkFDR0EsT0FBTyxDQUFDQyxJQURYLGVBRUU7QUFBRyx1QkFBUyxFQUFDLHVCQUFiO0FBQUEsaUNBQ09ELE9BQU8sQ0FBQ0UsVUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWxCLENBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQWtERTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUMscUJBQXRCO0FBQTRDLFlBQUUsRUFBQyxnQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRERCxDQWxFTTs7R0FBTWpCLEc7O0tBQUFBLEc7QUFvRUVBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0L2RldGFpbHMuNTYyYjVkY2E4MDgyYTQ0ZTE4ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF5ID0gKHsgY2FydCB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJpbnB1dFwiLCBpbnB1dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzIHBheVwiIGlkPVwicGF5XCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGVwc1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXBzX19saXN0IFwiPmRldGFpbHM8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3QgXCI+c2hpcHBpbmc8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3QgYWN0aXZlXCI+cGF5PC9wPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19zdW1tYXJ5Y29udGFpbmVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsc19fc3VtbWFyeVwiPnN1bW1hcnk8L3A+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRldGFpbHNfX2xpc3RcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZXRhaWxzX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBpY29uIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgIHtpbnB1dCAmJiBpbnB1dC5maXJzdG5hbWV9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGljb24gZmEtbWFwLXBpblwiPjwvaT5idXMgc3RvcCAxMDBcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGV0YWlsc19faXRlbVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgaWNvbiBmYS1lbnZlbG9wZVwiPjwvaT4ge2lucHV0ICYmIGlucHV0LmVtYWlsfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZXRhaWxzX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBpY29uIGZhLXBob25lLWFsdFwiPjwvaT4ge2lucHV0ICYmIGlucHV0Lm51bWJlcn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX2l0ZW1jb250YWluZXJcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGV0YWlsc19fYWxsbGlzdFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2FsbGl0ZW1zIGRldGFpbHNfX2FsbGl0ZW1zLS10b3RhbFwiPlxyXG4gICAgICAgICAgICB0b3RhbCBwcmljZVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxzX19hbGxpdGVtcHJpY2VcIj5cclxuICAgICAgICAgICAgICBHSDoge2NhcnQudG90YWxQcm9kdWN0c1ByaWNlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2FsbGl0ZW1zXCI+XHJcbiAgICAgICAgICAgIGNhdXNhbCBzbmtlYWVyIEdUMFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxzX19hbGxpdGVtcHJpY2VcIj5HSDogNTAwPC9wPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIHtjYXJ0LnByb2R1Y3RzICYmXHJcbiAgICAgICAgICAgIGNhcnQucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2FsbGl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsc19fYWxsaXRlbXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEdIOiB7cHJvZHVjdC50b3RhbFByaWNlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19uZXh0Y29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19uZXh0XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRldGFpbHNfX25leHQtLWxpbmtcIiBpZD1cInBheW1lbnRwcm9jZWVkXCI+XHJcbiAgICAgICAgICAgIHBheVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9