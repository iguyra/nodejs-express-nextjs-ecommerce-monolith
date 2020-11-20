webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/cart/cartpage/cartWithItem.js":
/*!**************************************************!*\
  !*** ./components/cart/cartpage/cartWithItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItem */ "./components/cart/cartpage/CartItem.js");
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/appContext */ "./context/appContext.js");


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\frontend\\components\\cart\\cartpage\\cartWithItem.js",
    _this = undefined,
    _s = $RefreshSig$();





var CartWithItem = function CartWithItem(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_appContext__WEBPACK_IMPORTED_MODULE_3__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var products = JSON.parse(localStorage.getItem("isavecart"));
    setProducts(products);
    console.log("product from cartwith", products);
  }, [cart]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "cart",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cartitem__messagedisplay",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "cartitem__update",
        children: "your cart is updated"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "cartitem__itemnumber",
        children: ["my cart (", products.totalProductsCount, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), products.products && products.products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cartitem__checkoutcontainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cartitem__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cartitem__totalcontainer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__totalword",
            children: "total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__totalprice",
            children: ["GH ", products.totalProductsPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "cartitem__policy",
          children: "delievry fee not included"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "cartitem__checkout",
        id: "checkout",
        children: "checkout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "cartitem__call",
        children: "call to order"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(CartWithItem, "WqOWvikZzaXVbg6qLIEOIuuO38c=");

_c = CartWithItem;
/* harmony default export */ __webpack_exports__["default"] = (CartWithItem);

var _c;

$RefreshReg$(_c, "CartWithItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0L2NhcnRwYWdlL2NhcnRXaXRoSXRlbS5qcyJdLCJuYW1lcyI6WyJDYXJ0V2l0aEl0ZW0iLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsInNldENhcnQiLCJ1c2VFZmZlY3QiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRvdGFsUHJvZHVjdHNDb3VudCIsIm1hcCIsInByb2R1Y3QiLCJ0b3RhbFByb2R1Y3RzUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ3ZCQyxRQUR1QjtBQUFBLE1BQ2JDLFdBRGE7O0FBQUEsb0JBRU5DLHdEQUFVLENBQUNDLDhEQUFELENBRko7QUFBQSxNQUV2QkMsSUFGdUI7QUFBQSxNQUVqQkMsT0FGaUI7O0FBSTlCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNTixRQUFRLEdBQUdPLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxDQUFqQjtBQUNBVCxlQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNBVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1osUUFBckM7QUFDRCxHQUpRLEVBSU4sQ0FBQ0ksSUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQSxnQ0FBOENKLFFBQVEsQ0FBQ2Esa0JBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdiLFFBQVEsQ0FBQ0EsUUFBVCxJQUNDQSxRQUFRLENBQUNBLFFBQVQsQ0FBa0JjLEdBQWxCLENBQXNCLFVBQUNDLE9BQUQsRUFBYTtBQUNqQywwQkFBTyxxRUFBQyxpREFBRDtBQUFVLGVBQU8sRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxDQVBKLGVBV0U7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsc0JBQWI7QUFBQSw4QkFBd0NmLFFBQVEsQ0FBQ2dCLGtCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBRyxtQkFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFVBQUUsRUFBQyxVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBV0U7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FyQ0Q7O0dBQU1uQixZOztLQUFBQSxZO0FBdUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0Ljc2MDFjNTM2ODFjNjdkMGI1ZDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSBcIi4vQ2FydEl0ZW1cIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2FwcENvbnRleHRcIjtcclxuXHJcbmNvbnN0IENhcnRXaXRoSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc2F2ZWNhcnRcIikpO1xyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGZyb20gY2FydHdpdGhcIiwgcHJvZHVjdHMpO1xyXG4gIH0sIFtjYXJ0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX21lc3NhZ2VkaXNwbGF5XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX3VwZGF0ZVwiPnlvdXIgY2FydCBpcyB1cGRhdGVkPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX19pdGVtbnVtYmVyXCI+bXkgY2FydCAoe3Byb2R1Y3RzLnRvdGFsUHJvZHVjdHNDb3VudH0pPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9kdWN0cy5wcm9kdWN0cyAmJlxyXG4gICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBwcm9kdWN0PXtwcm9kdWN0fSAvPjtcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX2NoZWNrb3V0Y29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRpdGVtX190b3RhbGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fdG90YWx3b3JkXCI+dG90YWw8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX190b3RhbHByaWNlXCI+R0gge3Byb2R1Y3RzLnRvdGFsUHJvZHVjdHNQcmljZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX19wb2xpY3lcIj5kZWxpZXZyeSBmZWUgbm90IGluY2x1ZGVkPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX19jaGVja291dFwiIGlkPVwiY2hlY2tvdXRcIj5cclxuICAgICAgICAgIGNoZWNrb3V0XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX19jYWxsXCI+Y2FsbCB0byBvcmRlcjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRXaXRoSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==