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

  console.log(products);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var cart = localStorage.getItem("isavecart");
    cart = JSON.parse(cart);
    setProducts(cart);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Shipping__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_checkout_Pay__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cart: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(details, "f86L6rLANGURv6GE6gupp7+oOp4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQvZGV0YWlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImNhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ2JDLFFBRGE7QUFBQSxNQUNIQyxXQURHOztBQUdwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFFQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWDtBQUNBRixRQUFJLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixJQUFYLENBQVA7QUFDQUosZUFBVyxDQUFDSSxJQUFELENBQVg7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxnRUFBRDtBQUFLLFVBQUksRUFBRUw7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQWxCRDs7R0FBTUYsTzs7QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0L2RldGFpbHMuNjM4MTE5Mjk1NzdlODZhYWYwYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tvdXQvRGV0YWlsXCI7XHJcbmltcG9ydCBTaGlwcGluZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jaGVja291dC9TaGlwcGluZ1wiO1xyXG5pbXBvcnQgUGF5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrb3V0L1BheVwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvYXBwQ29udGV4dFwiO1xyXG5cclxuY29uc3QgZGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzYXZlY2FydFwiKTtcclxuICAgIGNhcnQgPSBKU09OLnBhcnNlKGNhcnQpO1xyXG4gICAgc2V0UHJvZHVjdHMoY2FydCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPERldGFpbCAvPlxyXG4gICAgICA8U2hpcHBpbmcgLz5cclxuICAgICAgPFBheSBjYXJ0PXtwcm9kdWN0c30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9