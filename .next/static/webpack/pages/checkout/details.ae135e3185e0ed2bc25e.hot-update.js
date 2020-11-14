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
        onClick: handleOpenPay(event),
        className: "details__next",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "details__next--link",
          id: "shippingproceed",
          children: "next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9TaGlwcGluZy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZyIsInNldE9wZW5QYXkiLCJoYW5kbGVPcGVuUGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQ25DLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxrQkFBbkI7QUFBc0MsTUFBRSxFQUFDLFVBQXpDO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxTQUFmO0FBQXlCLG1CQUFTLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLFlBQUUsRUFBQyxTQURMO0FBRUUsbUJBQVMsRUFBQyxnQkFGWjtBQUdFLHFCQUFXLEVBQUMsV0FIZDtBQUlFLGNBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsaUJBQWY7QUFBaUMsbUJBQVMsRUFBQyxlQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQVEsbUJBQVMsRUFBQyxRQUFsQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBeUMsWUFBRSxFQUFDLFFBQTVDO0FBQUEsa0NBQ0U7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGlCQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQXNCRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsUUFBZjtBQUF3QixtQkFBUyxFQUFDLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxZQUFFLEVBQUMsUUFETDtBQUVFLG1CQUFTLEVBQUMsZ0JBRlo7QUFHRSxxQkFBVyxFQUFDLGtCQUhkO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUFpQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBdUIsbUJBQVMsRUFBQyxlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQ0UsWUFBRSxFQUFDLE9BREw7QUFFRSxtQkFBUyxFQUFDLGdCQUZaO0FBR0UscUJBQVcsRUFBQyxhQUhkO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0YsZUE0Q0U7QUFBSyxlQUFPLEVBQUVDLGFBQWEsQ0FBQ0ssS0FBRCxDQUEzQjtBQUFvQyxpQkFBUyxFQUFDLGVBQTlDO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLG1CQUFTLEVBQUMscUJBQXRCO0FBQTRDLFlBQUUsRUFBQyxpQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkRELENBbkVEOztLQUFNUCxRO0FBcUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC9kZXRhaWxzLmFlMTM1ZTMxODVlMGVkMmJjMjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwcGluZyA9ICh7IHNldE9wZW5QYXkgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5QYXkgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkXCIpO1xyXG4gICAgc2V0T3BlblBheSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscyBzaGlwcGluZ1wiIGlkPVwic2hpcHBpbmdcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInN0ZXBzXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcHNfX2xpc3QgXCI+ZGV0YWlsczwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwc19fbGlzdCBhY3RpdmVcIj5zaGlwcGluZzwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwc19fbGlzdFwiPnBheTwvcD5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX2dyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIiBjbGFzc05hbWU9XCJkZXRhaWxzX19uYW1lXCI+XHJcbiAgICAgICAgICAgIGNvdW50cnlcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsc19faW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVnOiBHaGFuYVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZWxpZXZlcnlyZWdpb25cIiBjbGFzc05hbWU9XCJkZXRhaWxzX19uYW1lXCI+XHJcbiAgICAgICAgICAgIGRlbGlldmVyeSByZWdpb25cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cInNlbGVjdFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWNjcmFcIj5hY2NyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2Fzb2FcIj5rYXNvYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2VpamFcIj53ZWlqYTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZHJlc3NcIiBjbGFzc05hbWU9XCJkZXRhaWxzX19uYW1lXCI+XHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJhZHJlc3NcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWxzX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWc6IDExMSBidXMgc3RvcFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19fZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm90ZXNcIiBjbGFzc05hbWU9XCJkZXRhaWxzX19uYW1lXCI+XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWwgbm90ZXNcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJub3Rlc1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbHNfX2lucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlZzogY2FsbCBtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVPcGVuUGF5KGV2ZW50KX0gY2xhc3NOYW1lPVwiZGV0YWlsc19fbmV4dFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkZXRhaWxzX19uZXh0LS1saW5rXCIgaWQ9XCJzaGlwcGluZ3Byb2NlZWRcIj5cclxuICAgICAgICAgICAgbmV4dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=