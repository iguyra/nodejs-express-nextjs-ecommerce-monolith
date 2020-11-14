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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var input = localStorage.getItem("inputs");
    input = JSON.parse(input);
    setInput(input);
  }, []);
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
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list ",
        children: "shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list active",
        children: "pay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "details__summarycontainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "details__summary",
        children: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "details__list",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "far icon fa-user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), input && input.firstname]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas icon fa-map-pin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), "bus stop 100"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "far icon fa-envelope"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), " ", input && input.email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas icon fa-phone-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), " ", input && input.number]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "details__allitems",
          children: ["causal snkeaer GT0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "details__allitemprice",
            children: "GH: 500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), cart.products && cart.products.map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "details__allitems",
            children: [product.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "details__allitemprice",
              children: ["GH: ", product.totalPrice]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Pay, "Fb7RmtCPL4IBzxr5oqrsvGZVzfw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9QYXkuanMiXSwibmFtZXMiOlsiUGF5IiwiY2FydCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImZpcnN0bmFtZSIsImVtYWlsIiwibnVtYmVyIiwidG90YWxQcm9kdWN0c1ByaWNlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsInRvdGFsUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUI7O0FBQUEsbUJBRUxGLHNEQUFRLEVBRkg7QUFBQSxNQUV4QkcsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBSS9CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixLQUFLLEdBQUdHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFaO0FBQ0FKLFNBQUssR0FBR0ssSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQVgsQ0FBUjtBQUNBQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQU8sU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlIsS0FBckI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxhQUFuQjtBQUFpQyxNQUFFLEVBQUMsS0FBcEM7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBQUEsYUFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0REQsQ0F4RU07O0dBQU10QixHOztLQUFBQSxHO0FBMEVFQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC9kZXRhaWxzLmE4NjFlZjA5MzdhNDExYjM2OTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheSA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlucHV0c1wiKTtcclxuICAgIGlucHV0ID0gSlNPTi5wYXJzZShpbnB1dCk7XHJcbiAgICBzZXRJbnB1dChpbnB1dCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImlucHV0XCIsIGlucHV0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMgcGF5XCIgaWQ9XCJwYXlcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInN0ZXBzXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3QgXCI+ZGV0YWlsczwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwc19fbGlzdCBcIj5zaGlwcGluZzwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwc19fbGlzdCBhY3RpdmVcIj5wYXk8L3A+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX3N1bW1hcnljb250YWluZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxzX19zdW1tYXJ5XCI+c3VtbWFyeTwvcD5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGV0YWlsc19fbGlzdFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGljb24gZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAge2lucHV0ICYmIGlucHV0LmZpcnN0bmFtZX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGV0YWlsc19faXRlbVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgaWNvbiBmYS1tYXAtcGluXCI+PC9pPmJ1cyBzdG9wIDEwMFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZXRhaWxzX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBpY29uIGZhLWVudmVsb3BlXCI+PC9pPiB7aW5wdXQgJiYgaW5wdXQuZW1haWx9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRldGFpbHNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGljb24gZmEtcGhvbmUtYWx0XCI+PC9pPiB7aW5wdXQgJiYgaW5wdXQubnVtYmVyfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19faXRlbWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkZXRhaWxzX19hbGxsaXN0XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGV0YWlsc19fYWxsaXRlbXMgZGV0YWlsc19fYWxsaXRlbXMtLXRvdGFsXCI+XHJcbiAgICAgICAgICAgIHRvdGFsIHByaWNlXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbHNfX2FsbGl0ZW1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIEdIOiB7Y2FydC50b3RhbFByb2R1Y3RzUHJpY2V9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGV0YWlsc19fYWxsaXRlbXNcIj5cclxuICAgICAgICAgICAgY2F1c2FsIHNua2VhZXIgR1QwXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbHNfX2FsbGl0ZW1wcmljZVwiPkdIOiA1MDA8L3A+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge2NhcnQucHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgY2FydC5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGV0YWlsc19fYWxsaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxzX19hbGxpdGVtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgR0g6IHtwcm9kdWN0LnRvdGFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX25leHRjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX25leHRcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGV0YWlsc19fbmV4dC0tbGlua1wiIGlkPVwicGF5bWVudHByb2NlZWRcIj5cclxuICAgICAgICAgICAgcGF5XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=