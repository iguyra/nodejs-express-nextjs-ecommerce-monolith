webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/cart/cartpage/CartItem.js":
/*!**********************************************!*\
  !*** ./components/cart/cartpage/CartItem.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/appContext */ "./context/appContext.js");
/* harmony import */ var _pages_products_product___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pages/products/[product] */ "./pages/products/[product].js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../functions/functions */ "./functions/functions.js");


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\frontend\\components\\cart\\cartpage\\CartItem.js",
    _this = undefined,
    _s = $RefreshSig$();






var CartItem = function CartItem(_ref) {
  _s();

  var product = _ref.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(product.qty),
      productCount = _useState[0],
      setProductCount = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_appContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var handleQtyChange = function handleQtyChange(e) {
    if (true) {
      var newQty = e.target.value;
      setProductCount(newQty);
      var existingCart = localStorage.getItem("isavecart");
      existingCart = JSON.parse(existingCart);
      var updatedCart = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_4__["updateCart"])(existingCart, product, false, newQty);
      setCart(updatedCart);
    }
  };

  var handleRemoveCartItem = function handleRemoveCartItem(e) {
    var itemToBeRemoved = e.target;
    var itemToBeRemovedId = +itemToBeRemoved.id;
    var item = document.getElementById(itemToBeRemovedId); // const elementParent = itemToBeRemoved.parentNode.parentNode.parentNode.parentNode.parentNode;
    // const element = itemToBeRemoved.parentNode.parentNode.parentNode.parentNode;
    // elementParent.removeChild(element);
    // console.log("itemToBeRemoved", elementParent, item, element);

    var existingCart = localStorage.getItem("isavecart");
    existingCart = JSON.parse(existingCart);
    var itemIndex = existingCart.products.findIndex(function (product) {
      return product._id === itemToBeRemovedId;
    });

    if (-1 < itemIndex) {
      var updatedCart = existingCart;
      var productToBeRemoved = existingCart.products[itemIndex];
      var itemToBeRemovedQty = +productToBeRemoved.qty;
      var itemToBeRemovedPrice = +productToBeRemoved.totalPrice;
      updatedCart.totalProductsCount = updatedCart.totalProductsCount - itemToBeRemovedQty;
      updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - itemToBeRemovedPrice;
      updatedCart.products.splice(itemIndex, 1);
      localStorage.setItem("isavecart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }

    console.log("ousited", itemToBeRemovedId, itemIndex, existingCart); // updatedCart.products.splice(itemIndex, 1);
    // console.log(updatedCart, existingCart);
    // setCart(updatedCart);
    // localStorage.setItem("isavecart", JSON.stringify(updatedCart));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cartItemList",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cartitem__top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: product.image,
          alt: "",
          className: "cartitem__img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cartitem__details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__productname",
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__size",
            children: "size: one size fits all"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__price",
            children: ["GH ", product.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__price",
            children: ["GH ", product.totalPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this)]
      }, product.productId, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cartitem__bottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cartitem__control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "far fa-heart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            onClick: handleRemoveCartItem,
            id: product._id,
            className: "fas fa-trash-alt",
            children: "remove"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cartitem__incdes",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__qunatity cartitem__qunatity--dec",
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            min: "1",
            onChange: handleQtyChange,
            className: "cartitem__qunatity cartitem__qunatity--number",
            value: productCount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cartitem__qunatity cartitem__qunatity--inc",
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(CartItem, "uhTIhDhZ5NafGoiq7lbbKe9Mdxo=");

_c = CartItem;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

var _c;

$RefreshReg$(_c, "CartItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0L2NhcnRwYWdlL0NhcnRJdGVtLmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwicHJvZHVjdCIsInVzZVN0YXRlIiwicXR5IiwicHJvZHVjdENvdW50Iiwic2V0UHJvZHVjdENvdW50IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0Iiwic2V0Q2FydCIsImhhbmRsZVF0eUNoYW5nZSIsImUiLCJuZXdRdHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImV4aXN0aW5nQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1cGRhdGVkQ2FydCIsInVwZGF0ZUNhcnQiLCJoYW5kbGVSZW1vdmVDYXJ0SXRlbSIsIml0ZW1Ub0JlUmVtb3ZlZCIsIml0ZW1Ub0JlUmVtb3ZlZElkIiwiaWQiLCJpdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1JbmRleCIsInByb2R1Y3RzIiwiZmluZEluZGV4IiwiX2lkIiwicHJvZHVjdFRvQmVSZW1vdmVkIiwiaXRlbVRvQmVSZW1vdmVkUXR5IiwiaXRlbVRvQmVSZW1vdmVkUHJpY2UiLCJ0b3RhbFByaWNlIiwidG90YWxQcm9kdWN0c0NvdW50IiwidG90YWxQcm9kdWN0c1ByaWNlIiwic3BsaWNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInByb2R1Y3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUNELE9BQU8sQ0FBQ0UsR0FBVCxDQURoQjtBQUFBLE1BQ3pCQyxZQUR5QjtBQUFBLE1BQ1hDLGVBRFc7O0FBQUEsb0JBRVJD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LG1CQUZGLGVBU0U7QUFBRyxxQkFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0ExR0Q7O0dBQU1KLFE7O0tBQUFBLFE7QUE0R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuMzRlMjlhNjdjZjU0NTliN2ZlYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvYXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RdXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgQ2FydEl0ZW0gPSAoeyBwcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCBbcHJvZHVjdENvdW50LCBzZXRQcm9kdWN0Q291bnRdID0gdXNlU3RhdGUocHJvZHVjdC5xdHkpO1xyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVF0eUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IG5ld1F0eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBzZXRQcm9kdWN0Q291bnQobmV3UXR5KTtcclxuXHJcbiAgICAgIGxldCBleGlzdGluZ0NhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzYXZlY2FydFwiKTtcclxuICAgICAgZXhpc3RpbmdDYXJ0ID0gSlNPTi5wYXJzZShleGlzdGluZ0NhcnQpO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZENhcnQgPSB1cGRhdGVDYXJ0KGV4aXN0aW5nQ2FydCwgcHJvZHVjdCwgZmFsc2UsIG5ld1F0eSk7XHJcblxyXG4gICAgICBzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVDYXJ0SXRlbSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtVG9CZVJlbW92ZWQgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGl0ZW1Ub0JlUmVtb3ZlZElkID0gK2l0ZW1Ub0JlUmVtb3ZlZC5pZDtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtVG9CZVJlbW92ZWRJZCk7XHJcblxyXG4gICAgLy8gY29uc3QgZWxlbWVudFBhcmVudCA9IGl0ZW1Ub0JlUmVtb3ZlZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgLy8gY29uc3QgZWxlbWVudCA9IGl0ZW1Ub0JlUmVtb3ZlZC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIC8vIGVsZW1lbnRQYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtVG9CZVJlbW92ZWRcIiwgZWxlbWVudFBhcmVudCwgaXRlbSwgZWxlbWVudCk7XHJcblxyXG4gICAgbGV0IGV4aXN0aW5nQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNhdmVjYXJ0XCIpO1xyXG4gICAgZXhpc3RpbmdDYXJ0ID0gSlNPTi5wYXJzZShleGlzdGluZ0NhcnQpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGV4aXN0aW5nQ2FydC5wcm9kdWN0cy5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHtcclxuICAgICAgcmV0dXJuIHByb2R1Y3QuX2lkID09PSBpdGVtVG9CZVJlbW92ZWRJZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgtMSA8IGl0ZW1JbmRleCkge1xyXG4gICAgICBsZXQgdXBkYXRlZENhcnQgPSBleGlzdGluZ0NhcnQ7XHJcblxyXG4gICAgICBjb25zdCBwcm9kdWN0VG9CZVJlbW92ZWQgPSBleGlzdGluZ0NhcnQucHJvZHVjdHNbaXRlbUluZGV4XTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1Ub0JlUmVtb3ZlZFF0eSA9ICtwcm9kdWN0VG9CZVJlbW92ZWQucXR5O1xyXG4gICAgICBjb25zdCBpdGVtVG9CZVJlbW92ZWRQcmljZSA9ICtwcm9kdWN0VG9CZVJlbW92ZWQudG90YWxQcmljZTtcclxuXHJcbiAgICAgIHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCA9XHJcbiAgICAgICAgdXBkYXRlZENhcnQudG90YWxQcm9kdWN0c0NvdW50IC0gaXRlbVRvQmVSZW1vdmVkUXR5O1xyXG4gICAgICB1cGRhdGVkQ2FydC50b3RhbFByb2R1Y3RzUHJpY2UgPVxyXG4gICAgICAgIHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSAtIGl0ZW1Ub0JlUmVtb3ZlZFByaWNlO1xyXG5cclxuICAgICAgdXBkYXRlZENhcnQucHJvZHVjdHMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzYXZlY2FydFwiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FydCkpO1xyXG4gICAgICBzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm91c2l0ZWRcIiwgaXRlbVRvQmVSZW1vdmVkSWQsIGl0ZW1JbmRleCwgZXhpc3RpbmdDYXJ0KTtcclxuICAgIC8vIHVwZGF0ZWRDYXJ0LnByb2R1Y3RzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHVwZGF0ZWRDYXJ0LCBleGlzdGluZ0NhcnQpO1xyXG5cclxuICAgIC8vIHNldENhcnQodXBkYXRlZENhcnQpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc2F2ZWNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhcnQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRJdGVtTGlzdFwiPlxyXG4gICAgICA8ZGl2IGtleT17cHJvZHVjdC5wcm9kdWN0SWR9IGNsYXNzTmFtZT1cImNhcnRpdGVtX190b3BcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImNhcnRpdGVtX19pbWdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRpdGVtX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX3Byb2R1Y3RuYW1lXCI+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX3NpemVcIj5zaXplOiBvbmUgc2l6ZSBmaXRzIGFsbDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fcHJpY2VcIj5HSCB7cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydGl0ZW1fX3ByaWNlXCI+R0gge3Byb2R1Y3QudG90YWxQcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRpdGVtX19ib3R0b21cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiPjwvaT5cclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlQ2FydEl0ZW19XHJcbiAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5faWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICByZW1vdmVcclxuICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRpdGVtX19pbmNkZXNcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fcXVuYXRpdHkgY2FydGl0ZW1fX3F1bmF0aXR5LS1kZWNcIj4tPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0aXRlbV9fcXVuYXRpdHkgY2FydGl0ZW1fX3F1bmF0aXR5LS1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRpdGVtX19xdW5hdGl0eSBjYXJ0aXRlbV9fcXVuYXRpdHktLWluY1wiPis8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9