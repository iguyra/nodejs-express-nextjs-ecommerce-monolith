webpackHotUpdate_N_E("pages/checkout/details",{

/***/ "./pages/checkout/details/index.js":
/*!*****************************************!*\
  !*** ./pages/checkout/details/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_checkout_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/checkout/Detail */ "./components/checkout/Detail.js");
/* harmony import */ var _components_checkout_Shipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/checkout/Shipping */ "./components/checkout/Shipping.js");
/* harmony import */ var _components_checkout_Pay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/checkout/Pay */ "./components/checkout/Pay.js");
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/appContext */ "./context/appContext.js");


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\pages\\checkout\\details\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var details = function details() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      openPay = _useState2[0],
      setOpenPay = _useState2[1];

  console.log(products);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cart = localStorage.getItem("isavecart");
    cart = JSON.parse(cart);
    setProducts(cart);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Shipping__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setOpenPay: setOpenPay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), setOpenPay ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Pay__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cart: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }, _this) : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(details, "XpCSkvmfl4moTYBc8qFVCXsk+yA=");

/* harmony default export */ __webpack_exports__["default"] = (details);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQvZGV0YWlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwib3BlblBheSIsInNldE9wZW5QYXkiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxFQUFELENBRHBCO0FBQUEsTUFDYkMsUUFEYTtBQUFBLE1BQ0hDLFdBREc7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRWJHLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUlwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVo7QUFFQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWDtBQUNBRixRQUFJLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixJQUFYLENBQVA7QUFDQU4sZUFBVyxDQUFDTSxJQUFELENBQVg7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFVLGdCQUFVLEVBQUVKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdHQSxVQUFVLGdCQUFHLHFFQUFDLGdFQUFEO0FBQUssVUFBSSxFQUFFSDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUE2QixFQUgxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBbkJEOztHQUFNRixPOztBQXFCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQvZGV0YWlscy44NzhhOWQ3ZDZiYzcwNDZjNTkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jaGVja291dC9EZXRhaWxcIjtcclxuaW1wb3J0IFNoaXBwaW5nIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrb3V0L1NoaXBwaW5nXCI7XHJcbmltcG9ydCBQYXkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tvdXQvUGF5XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9hcHBDb250ZXh0XCI7XHJcblxyXG5jb25zdCBkZXRhaWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuUGF5LCBzZXRPcGVuUGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzYXZlY2FydFwiKTtcclxuICAgIGNhcnQgPSBKU09OLnBhcnNlKGNhcnQpO1xyXG4gICAgc2V0UHJvZHVjdHMoY2FydCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPERldGFpbCAvPlxyXG4gICAgICA8U2hpcHBpbmcgc2V0T3BlblBheT17c2V0T3BlblBheX0gLz5cclxuICAgICAge3NldE9wZW5QYXkgPyA8UGF5IGNhcnQ9e3Byb2R1Y3RzfSAvPiA6IFwiXCJ9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==