webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\nvar _jsxFileName = \"/Users/georg/Development/Sandbox/georgs.github.io/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction MainPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setMounted(true);\n  }, []);\n  var springConfig = {\n    mass: 1,\n    tension: 200,\n    friction: 20\n  };\n  var wWidth =  true && window.innerWidth * 0.33;\n  var openAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])({\n    from: {\n      width: 0\n    },\n    to: {\n      width: wWidth || 0\n    },\n    delay: 500,\n    config: springConfig\n  });\n  var imageAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"])({\n    from: {\n      left: -400\n    },\n    to: {\n      left: 10\n    },\n    delay: 1000,\n    config: springConfig\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: openAnimation,\n    className: \"slant\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    style: imageAnimation,\n    className: \"me-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"content-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, \"Hi!\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 28\n    }\n  }), \"I'm Georg\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Entrepreneur, Developer\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 48\n    }\n  }), \"and Design Enthusiast\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 31\n    }\n  }), \"Working \", __jsx(\"a\", {\n    href: \"https://tyl.at\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 33\n    }\n  }, \"@TouchLay\")))));\n}\n\n_s(MainPage, \"T34Gj9pzc4v+t1iK1S0AKR1GPbQ=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useSpring\"]];\n});\n\n_c = MainPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Iiwic3ByaW5nQ29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIndXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvcGVuQW5pbWF0aW9uIiwidXNlU3ByaW5nIiwiZnJvbSIsIndpZHRoIiwidG8iLCJkZWxheSIsImNvbmZpZyIsImltYWdlQW5pbWF0aW9uIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUUvQkMseURBQVMsQ0FBQyxZQUFNO0FBQUVELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFBa0IsR0FBM0IsRUFBNkIsRUFBN0IsQ0FBVDtBQUVBLE1BQU1FLFlBQVksR0FBRztBQUFFQyxRQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFPLEVBQUUsR0FBcEI7QUFBeUJDLFlBQVEsRUFBRTtBQUFuQyxHQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFxQkMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFSO0FBQXNCQyxNQUFFLEVBQUU7QUFBRUQsV0FBSyxFQUFFTixNQUFNLElBQUk7QUFBbkIsS0FBMUI7QUFBa0RRLFNBQUssRUFBRSxHQUF6RDtBQUE4REMsVUFBTSxFQUFFYjtBQUF0RSxHQUFELENBQS9CO0FBQ0EsTUFBTWMsY0FBYyxHQUFHTiw4REFBUyxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFFTSxVQUFJLEVBQUUsQ0FBQztBQUFULEtBQVI7QUFBd0JKLE1BQUUsRUFBRTtBQUFFSSxVQUFJLEVBQUU7QUFBUixLQUE1QjtBQUEwQ0gsU0FBSyxFQUFFLElBQWpEO0FBQXVEQyxVQUFNLEVBQUViO0FBQS9ELEdBQUQsQ0FBaEM7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRU8sYUFBckI7QUFBb0MsYUFBUyxFQUFDLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFTyxjQUFyQjtBQUFxQyxhQUFTLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVAsY0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBM0IsMkJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBRVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZWLGNBR1k7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIWixDQUZKLENBREosQ0FISixDQURKO0FBZ0JIOztHQTFCdUJuQixRO1VBT0VhLHNELEVBQ0NBLHNEOzs7S0FSSGIsUSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpIHtcbiAgICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBzZXRNb3VudGVkKHRydWUpIH0sIFtdKTtcblxuICAgIGNvbnN0IHNwcmluZ0NvbmZpZyA9IHsgbWFzczogMSwgdGVuc2lvbjogMjAwLCBmcmljdGlvbjogMjAgfVxuXG4gICAgY29uc3Qgd1dpZHRoID0gKHByb2Nlc3MuYnJvd3NlcikgJiYgd2luZG93LmlubmVyV2lkdGggKiAwLjMzXG4gICAgY29uc3Qgb3BlbkFuaW1hdGlvbiA9IHVzZVNwcmluZyh7IGZyb206IHsgd2lkdGg6IDAgfSwgdG86IHsgd2lkdGg6IHdXaWR0aCB8fCAwIH0sIGRlbGF5OiA1MDAsIGNvbmZpZzogc3ByaW5nQ29uZmlnIH0pXG4gICAgY29uc3QgaW1hZ2VBbmltYXRpb24gPSB1c2VTcHJpbmcoeyBmcm9tOiB7IGxlZnQ6IC00MDAgfSwgdG86IHsgbGVmdDogMTAgfSwgZGVsYXk6IDEwMDAsIGNvbmZpZzogc3ByaW5nQ29uZmlnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17b3BlbkFuaW1hdGlvbn0gY2xhc3NOYW1lPSdzbGFudCcgLz5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e2ltYWdlQW5pbWF0aW9ufSBjbGFzc05hbWU9J21lLWltZycgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5IaSE8YnIgLz5JJ20gR2Vvcmc8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RW50cmVwcmVuZXVyLCBEZXZlbG9wZXI8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBEZXNpZ24gRW50aHVzaWFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBXb3JraW5nIDxhIGhyZWY9XCJodHRwczovL3R5bC5hdFwiPkBUb3VjaExheTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})