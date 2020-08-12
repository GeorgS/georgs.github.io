webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\nvar _jsxFileName = \"/Users/georg/Development/Sandbox/georgs.github.io/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction MainPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setMounted(true);\n  }, []);\n  var springConfig = {\n    mass: 1,\n    tension: 280,\n    friction: 60\n  };\n  var wWidth =  true && window.innerWidth * 0.33;\n  var openAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])({\n    from: {\n      width: 0\n    },\n    to: {\n      width: wWidth || 0\n    },\n    delay: 500,\n    config: springConfig\n  });\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])({\n    from: {\n      x: -400\n    },\n    to: {\n      x: 0\n    },\n    delay: 1000,\n    config: springConfig\n  }),\n      x = _useSpring.x;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: openAnimation,\n    className: \"slant\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: {\n      transform: x.interpolate(function (x) {\n        return \"translate3d(\".concat(x, \"px, 0px, 0px)\");\n      })\n    },\n    className: \"me-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"content-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \"Hi!\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 28\n    }\n  }), \"I'm Georg\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"Entrepreneur, Developer\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 48\n    }\n  }), \"and Design Enthusiast\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 25\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 31\n    }\n  }), \"Working \", __jsx(\"a\", {\n    href: \"https://tyl.at\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 33\n    }\n  }, \"@TouchLay\")))));\n}\n\n_s(MainPage, \"SoaEsNmGyXWwoxwKYcTGzaN2vcQ=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"]];\n});\n\n_c = MainPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Iiwic3ByaW5nQ29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIndXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvcGVuQW5pbWF0aW9uIiwidXNlU3ByaW5nIiwiZnJvbSIsIndpZHRoIiwidG8iLCJkZWxheSIsImNvbmZpZyIsIngiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQkMseURBQVMsQ0FBQyxZQUFNO0FBQUVELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFBa0IsR0FBM0IsRUFBNkIsRUFBN0IsQ0FBVDtBQUVBLE1BQU1FLFlBQVksR0FBRztBQUFFQyxRQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFPLEVBQUUsR0FBcEI7QUFBeUJDLFlBQVEsRUFBRTtBQUFuQyxHQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFxQkMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFSO0FBQXNCQyxNQUFFLEVBQUU7QUFBRUQsV0FBSyxFQUFFTixNQUFNLElBQUk7QUFBbkIsS0FBMUI7QUFBa0RRLFNBQUssRUFBRSxHQUF6RDtBQUE4REMsVUFBTSxFQUFFYjtBQUF0RSxHQUFELENBQS9COztBQVArQixtQkFRakJRLDhEQUFTLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQUVLLE9BQUMsRUFBRSxDQUFDO0FBQU4sS0FBUjtBQUFxQkgsTUFBRSxFQUFFO0FBQUVHLE9BQUMsRUFBRTtBQUFMLEtBQXpCO0FBQW1DRixTQUFLLEVBQUUsSUFBMUM7QUFBZ0RDLFVBQU0sRUFBRWI7QUFBeEQsR0FBRCxDQVJRO0FBQUEsTUFRdkJjLENBUnVCLGNBUXZCQSxDQVJ1Qjs7QUFVL0IsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxTQUFLLEVBQUVQLGFBQXJCO0FBQW9DLGFBQVMsRUFBQyxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRTtBQUNqQlEsZUFBUyxFQUFFRCxDQUFDLENBQUNFLFdBQUYsQ0FBYyxVQUFDRixDQUFEO0FBQUEscUNBQXNCQSxDQUF0QjtBQUFBLE9BQWQ7QUFETSxLQUFyQjtBQUVHLGFBQVMsRUFBQyxRQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUtJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQLGNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNCLDJCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUVVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGVixjQUdZO0FBQUcsUUFBSSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSFosQ0FGSixDQURKLENBTEosQ0FESjtBQWtCSDs7R0E1QnVCbkIsUTtVQU9FYSxzRCxFQUNSQSxzRDs7O0tBUk1iLFEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoKSB7XG4gICAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgc2V0TW91bnRlZCh0cnVlKSB9LCBbXSk7XG5cbiAgICBjb25zdCBzcHJpbmdDb25maWcgPSB7IG1hc3M6IDEsIHRlbnNpb246IDI4MCwgZnJpY3Rpb246IDYwIH1cblxuICAgIGNvbnN0IHdXaWR0aCA9IChwcm9jZXNzLmJyb3dzZXIpICYmIHdpbmRvdy5pbm5lcldpZHRoICogMC4zM1xuICAgIGNvbnN0IG9wZW5BbmltYXRpb24gPSB1c2VTcHJpbmcoeyBmcm9tOiB7IHdpZHRoOiAwIH0sIHRvOiB7IHdpZHRoOiB3V2lkdGggfHwgMCB9LCBkZWxheTogNTAwLCBjb25maWc6IHNwcmluZ0NvbmZpZyB9KVxuICAgIGNvbnN0IHsgeCB9ID0gdXNlU3ByaW5nKHsgZnJvbTogeyB4OiAtNDAwIH0sIHRvOiB7IHg6IDAgfSwgZGVsYXk6IDEwMDAsIGNvbmZpZzogc3ByaW5nQ29uZmlnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17b3BlbkFuaW1hdGlvbn0gY2xhc3NOYW1lPSdzbGFudCcgLz5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHguaW50ZXJwb2xhdGUoKHgpID0+IGB0cmFuc2xhdGUzZCgke3h9cHgsIDBweCwgMHB4KWApLFxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdtZS1pbWcnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LXRleHQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGkhPGJyIC8+SSdtIEdlb3JnPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVudHJlcHJlbmV1ciwgRGV2ZWxvcGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgRGVzaWduIEVudGh1c2lhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgV29ya2luZyA8YSBocmVmPVwiaHR0cHM6Ly90eWwuYXRcIj5AVG91Y2hMYXk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})