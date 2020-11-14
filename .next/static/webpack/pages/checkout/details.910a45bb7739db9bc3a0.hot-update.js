webpackHotUpdate_N_E("pages/checkout/details",{

/***/ "./components/checkout/Shipping.js":
/*!*****************************************!*\
  !*** ./components/checkout/Shipping.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\isave\\components\\checkout\\Shipping.js",
    _this = undefined;

var Shipping = function Shipping(_ref) {
  var setOpenPay = _ref.setOpenPay;

  var handleOpenPay = function handleOpenPay(e) {
    e.preventDefault();
    console.log("logged");
    setOpenPay(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "details shipping",
    id: "shipping",
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
        className: "steps__list active",
        children: "shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "steps__list",
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
      className: "details__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details__group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "country",
          className: "details__name",
          children: "country"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "country",
          className: "details__input",
          placeholder: "eg: Ghana",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details__group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "delieveryregion",
          className: "details__name",
          children: "delievery region"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "select",
          name: "select",
          id: "select",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "accra",
            children: "accra"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "kasoa",
            children: "kasoa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "weija",
            children: "weija"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details__group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "adress",
          className: "details__name",
          children: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "adress",
          className: "details__input",
          placeholder: "eg: 111 bus stop",
          type: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details__group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "notes",
          className: "details__name",
          children: "additional notes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "notes",
          className: "details__input",
          placeholder: "eg: call me",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick(event) {
          return handleOpenPay(event);
        },
        className: "details__next",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "details__next--link",
          id: "shippingproceed",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            "class": "fas fa-chevron-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Shipping;
/* harmony default export */ __webpack_exports__["default"] = (Shipping);

var _c;

$RefreshReg$(_c, "Shipping");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9TaGlwcGluZy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZyIsInNldE9wZW5QYXkiLCJoYW5kbGVPcGVuUGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQ25DLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxrQkFBbkI7QUFBc0MsTUFBRSxFQUFDLFVBQXpDO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxTQUFmO0FBQXlCLG1CQUFTLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyxTQURMO0FBRUUsbUJBQVMsRUFBQyxnQkFGWjtBQUdFLHFCQUFXLEVBQUMsV0FIZDtBQUlFLGNBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsaUJBQWY7QUFBaUMsbUJBQVMsRUFBQyxlQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQVEsbUJBQVMsRUFBQyxRQUFsQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBeUMsWUFBRSxFQUFDLFFBQTVDO0FBQUEsa0NBQ0U7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGlCQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQXNCRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsUUFBZjtBQUF3QixtQkFBUyxFQUFDLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxZQUFFLEVBQUMsUUFETDtBQUVFLG1CQUFTLEVBQUMsZ0JBRlo7QUFHRSxxQkFBVyxFQUFDLGtCQUhkO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUFpQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBdUIsbUJBQVMsRUFBQyxlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQ0UsWUFBRSxFQUFDLE9BREw7QUFFRSxtQkFBUyxFQUFDLGdCQUZaO0FBR0UscUJBQVcsRUFBQyxhQUhkO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0YsZUE0Q0U7QUFDRSxlQUFPLEVBQUUsaUJBQUNNLEtBQUQ7QUFBQSxpQkFBV0wsYUFBYSxDQUFDSyxLQUFELENBQXhCO0FBQUEsU0FEWDtBQUVFLGlCQUFTLEVBQUMsZUFGWjtBQUFBLCtCQUlFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFDLHFCQUF0QjtBQUE0QyxZQUFFLEVBQUMsaUJBQS9DO0FBQUEsaUNBQ0U7QUFBRyxxQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQXRFRDs7S0FBTVAsUTtBQXdFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQvZGV0YWlscy45MTBhNDViYjc3MzlkYjliYzNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcHBpbmcgPSAoeyBzZXRPcGVuUGF5IH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVPcGVuUGF5ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ2dlZFwiKTtcclxuICAgIHNldE9wZW5QYXkodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMgc2hpcHBpbmdcIiBpZD1cInNoaXBwaW5nXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGVwc1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0ZXBzX19saXN0IFwiPmRldGFpbHM8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3QgYWN0aXZlXCI+c2hpcHBpbmc8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3RcIj5wYXk8L3A+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCIgY2xhc3NOYW1lPVwiZGV0YWlsc19fbmFtZVwiPlxyXG4gICAgICAgICAgICBjb3VudHJ5XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbHNfX2lucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlZzogR2hhbmFcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19fZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVsaWV2ZXJ5cmVnaW9uXCIgY2xhc3NOYW1lPVwiZGV0YWlsc19fbmFtZVwiPlxyXG4gICAgICAgICAgICBkZWxpZXZlcnkgcmVnaW9uXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3RcIiBuYW1lPVwic2VsZWN0XCIgaWQ9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFjY3JhXCI+YWNjcmE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImthc29hXCI+a2Fzb2E8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlaWphXCI+d2VpamE8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19fZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRyZXNzXCIgY2xhc3NOYW1lPVwiZGV0YWlsc19fbmFtZVwiPlxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWRyZXNzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsc19faW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVnOiAxMTEgYnVzIHN0b3BcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX2dyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdGVzXCIgY2xhc3NOYW1lPVwiZGV0YWlsc19fbmFtZVwiPlxyXG4gICAgICAgICAgICBhZGRpdGlvbmFsIG5vdGVzXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwibm90ZXNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWxzX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWc6IGNhbGwgbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3BlblBheShldmVudCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWxzX19uZXh0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRldGFpbHNfX25leHQtLWxpbmtcIiBpZD1cInNoaXBwaW5ncHJvY2VlZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwcGluZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==