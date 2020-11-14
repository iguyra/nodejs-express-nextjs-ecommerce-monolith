webpackHotUpdate_N_E("pages/index",{

/***/ "./components/cart/CartIcon.js":
/*!*************************************!*\
  !*** ./components/cart/CartIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CartIcon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartIcon.module.scss */ "./components/cart/CartIcon.module.scss");
/* harmony import */ var _CartIcon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CartIcon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/appContext */ "./context/appContext.js");


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\components\\cart\\CartIcon.js",
    _this = undefined,
    _s = $RefreshSig$();








var CartIcon = function CartIcon() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_appContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var productCount = null !== cart && Object.keys(cart).length ? cart.totalProductsCount : "";
  var totalPrice = null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : "";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3518758607" + " " + "cartIcon",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/cart",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "jsx-3518758607" + " " + "fa fa-shopping-cart cartIcon__icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3518758607" + " " + "cartIcon__cartDetailContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-3518758607",
          children: productCount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-3518758607",
            children: [productCount, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }, _this) : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "jsx-3518758607" + " " + "totalPrice",
          children: totalPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-3518758607",
            children: ["$", totalPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 27
          }, _this) : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3518758607",
      children: ".cartIcon.jsx-3518758607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.cartIcon__cartDetailContainer.jsx-3518758607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.cartIcon__icon.jsx-3518758607{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcaXNhdmVcXGNvbXBvbmVudHNcXGNhcnRcXENhcnRJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFHd0IsQUFNQSxBQUtFLGVBQ2pCLDJEQVhBLEFBTXdCLDhFQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGlzYXZlXFxjb21wb25lbnRzXFxjYXJ0XFxDYXJ0SWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcnRJY29uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHBDb250ZXh0XCI7XHJcblxyXG5jb25zdCBDYXJ0SWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0Q291bnQgPVxyXG4gICAgbnVsbCAhPT0gY2FydCAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPyBjYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCA6IFwiXCI7XHJcblxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPVxyXG4gICAgbnVsbCAhPT0gY2FydCAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPyBjYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSA6IFwiXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydEljb25cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnQgY2FydEljb25fX2ljb25cIj48L2k+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydEljb25fX2NhcnREZXRhaWxDb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9kdWN0Q291bnQgPyA8c3Bhbj57cHJvZHVjdENvdW50fSA8L3NwYW4+IDogXCJcIn08L3NwYW4+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0b3RhbFByaWNlXCI+XHJcbiAgICAgICAgICAgIHt0b3RhbFByaWNlID8gPHNwYW4+JHt0b3RhbFByaWNlfTwvc3Bhbj4gOiBcIlwifVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FydEljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3RhbFByaWNlIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcnRJY29uX19jYXJ0RGV0YWlsQ29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcnRJY29uX19pY29uIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FydEljb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Desktop\\\\isave\\\\components\\\\cart\\\\CartIcon.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(CartIcon, "yW3F9rTSSpXoz1qpM/EYKrSPIEE=");

_c = CartIcon;
/* harmony default export */ __webpack_exports__["default"] = (CartIcon);

var _c;

$RefreshReg$(_c, "CartIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJY29uLmpzIl0sIm5hbWVzIjpbIkNhcnRJY29uIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0Iiwic2V0Q2FydCIsInByb2R1Y3RDb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbFByb2R1Y3RzQ291bnQiLCJ0b3RhbFByaWNlIiwidG90YWxQcm9kdWN0c1ByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQyw4REFBRCxDQURiO0FBQUEsTUFDZEMsSUFEYztBQUFBLE1BQ1JDLE9BRFE7O0FBR3JCLE1BQU1DLFlBQVksR0FDaEIsU0FBU0YsSUFBVCxJQUFpQkcsTUFBTSxDQUFDQyxJQUFQLENBQVlKLElBQVosRUFBa0JLLE1BQW5DLEdBQTRDTCxJQUFJLENBQUNNLGtCQUFqRCxHQUFzRSxFQUR4RTtBQUdBLE1BQU1DLFVBQVUsR0FDZCxTQUFTUCxJQUFULElBQWlCRyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixFQUFrQkssTUFBbkMsR0FBNENMLElBQUksQ0FBQ1Esa0JBQWpELEdBQXNFLEVBRHhFO0FBR0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxVQUFmO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNFO0FBQUEsOENBQWE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBQSw0Q0FBZSwrQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBT04sWUFBWSxnQkFBRztBQUFBO0FBQUEsdUJBQU9BLFlBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFILEdBQWtDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhDQUFhLFlBQWI7QUFBQSxvQkFDR0ssVUFBVSxnQkFBRztBQUFBO0FBQUEsNEJBQVFBLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFILEdBQWdDO0FBRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F6Q0Q7O0dBQU1WLFE7O0tBQUFBLFE7QUEwQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlYTI5NTNkNTBkNmZhOWE3Mzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJ0SWNvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXBwQ29udGV4dFwiO1xyXG5cclxuY29uc3QgQ2FydEljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdENvdW50ID1cclxuICAgIG51bGwgIT09IGNhcnQgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID8gY2FydC50b3RhbFByb2R1Y3RzQ291bnQgOiBcIlwiO1xyXG5cclxuICBjb25zdCB0b3RhbFByaWNlID1cclxuICAgIG51bGwgIT09IGNhcnQgJiYgT2JqZWN0LmtleXMoY2FydCkubGVuZ3RoID8gY2FydC50b3RhbFByb2R1Y3RzUHJpY2UgOiBcIlwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRJY29uXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0IGNhcnRJY29uX19pY29uXCI+PC9pPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRJY29uX19jYXJ0RGV0YWlsQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvZHVjdENvdW50ID8gPHNwYW4+e3Byb2R1Y3RDb3VudH0gPC9zcGFuPiA6IFwiXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG90YWxQcmljZVwiPlxyXG4gICAgICAgICAgICB7dG90YWxQcmljZSA/IDxzcGFuPiR7dG90YWxQcmljZX08L3NwYW4+IDogXCJcIn1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhcnRJY29uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG90YWxQcmljZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJ0SWNvbl9fY2FydERldGFpbENvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJ0SWNvbl9faWNvbiB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhcnRJY29uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9