webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SocialIcon */ \"./src/components/SocialIcon.js\");\n/* harmony import */ var _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-hook/media-query */ \"./node_modules/@react-hook/media-query/dist/module/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/georg/Development/Sandbox/georgs.github.io/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MainPage() {\n  _s();\n\n  var _this = this;\n\n  var isTablet = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 1024px)'); // 50%\n\n  var isXLMobile = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 768px)'); // 60%\n\n  var isMobile = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 425px)'); // 70%\n\n  var socialIcons = [__jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"linkedin\",\n    href: \"https://www.linkedin.com/in/georg-schelkshorn-632655ba/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"xing\",\n    href: \"https://www.xing.com/profile/Georg_Schelkshorn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"facebook\",\n    href: \"http://facebook.com/georg.schelkshorn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })];\n  var multiplier = 0.28; // desktop\n\n  if (isTablet) multiplier = 0.5;\n  if (isXLMobile) multiplier = 0.6;\n  if (isMobile) multiplier = 0.7;\n  var imgOffset =  true && window.innerWidth * multiplier;\n  var springConfig = {\n    mass: 1,\n    tension: 280,\n    friction: 60\n  };\n  var wWidth =  true && window.innerWidth * 0.33;\n  var wHeight =  true && window.innerHeight * 0.4;\n  var openAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: isTablet ? {\n      height: 0\n    } : {\n      width: 0\n    },\n    to: isTablet ? {\n      height: wHeight || 0\n    } : {\n      width: wWidth || 0\n    },\n    delay: 500,\n    config: springConfig\n  });\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: {\n      x: -imgOffset || 0\n    },\n    to: {\n      x: 0\n    },\n    delay: 750,\n    config: springConfig\n  }),\n      imageX = _useSpring.x;\n\n  var textAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: {\n      opacity: 0\n    },\n    to: {\n      opacity: 1\n    },\n    delay: 750,\n    config: _objectSpread(_objectSpread({}, springConfig), {}, {\n      duration: 1500\n    })\n  });\n  var socialAnimations = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTrail\"])(3, {\n    from: {\n      y: -100\n    },\n    to: {\n      y: 0\n    },\n    delay: 1000,\n    config: springConfig\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: openAnimation,\n    className: \"slant\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: {\n      transform: imageX.interpolate(function (imageX) {\n        return \"translate3d(\".concat(imageX, \"px, 0px, 0px)\");\n      })\n    },\n    className: \"me-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: textAnimation,\n    className: \"content-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"Hi!\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 28\n    }\n  }), \"I'm Georg\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, \"Entrepreneur, Developer\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 48\n    }\n  }), \"and Design Enthusiast\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 31\n    }\n  }), \"Working \", __jsx(\"a\", {\n    href: \"https://tyl.at\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 33\n    }\n  }, \"@TouchLay\")))), __jsx(\"div\", {\n    className: \"social-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, socialAnimations.map(function (_ref, index) {\n    var y = _ref.y,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"y\"]);\n\n    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n      key: index,\n      style: _objectSpread(_objectSpread({}, rest), {}, {\n        transform: y.interpolate(function (y) {\n          return \"translate3d(0,\".concat(y, \"px,0)\");\n        })\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, socialIcons[index]);\n  })));\n}\n\n_s(MainPage, \"mPnsj6HlqxLPgrD8l3EFbVY1GKw=\", false, function () {\n  return [_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTrail\"]];\n});\n\n_c = MainPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJpc1RhYmxldCIsInVzZU1lZGlhUXVlcnkiLCJpc1hMTW9iaWxlIiwiaXNNb2JpbGUiLCJzb2NpYWxJY29ucyIsIm11bHRpcGxpZXIiLCJpbWdPZmZzZXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3ByaW5nQ29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIndXaWR0aCIsIndIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9wZW5BbmltYXRpb24iLCJ1c2VTcHJpbmciLCJmcm9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0byIsImRlbGF5IiwiY29uZmlnIiwieCIsImltYWdlWCIsInRleHRBbmltYXRpb24iLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJzb2NpYWxBbmltYXRpb25zIiwidXNlVHJhaWwiLCJ5IiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJtYXAiLCJpbmRleCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxRQUFRLEdBQUdDLDZFQUFhLENBQUMscUNBQUQsQ0FBOUIsQ0FEK0IsQ0FDdUM7O0FBQ3RFLE1BQU1DLFVBQVUsR0FBR0QsNkVBQWEsQ0FBQyxvQ0FBRCxDQUFoQyxDQUYrQixDQUV3Qzs7QUFDdkUsTUFBTUUsUUFBUSxHQUFHRiw2RUFBYSxDQUFDLG9DQUFELENBQTlCLENBSCtCLENBR3NDOztBQUVyRSxNQUFNRyxXQUFXLEdBQUcsQ0FDaEIsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBQyxVQUFqQjtBQUE0QixRQUFJLEVBQUMseURBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZ0IsRUFFaEIsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHUzNCLFdBQVcsQ0FBQytCLEtBQUQsQ0FIcEIsQ0FEc0I7QUFBQSxHQUFyQixDQURMLENBZkosQ0FESjtBQTJCSDs7R0FyRHVCcEMsUTtVQUNIRSxxRSxFQUNFQSxxRSxFQUNGQSxxRSxFQWtCS2dCLHNELEVBQ0FBLHNELEVBQ0FBLHNELEVBQ0dhLHFEOzs7S0F4QkwvQixRIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNwcmluZywgdXNlVHJhaWwsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxJY29uJ1xuaW1wb3J0IHt1c2VNZWRpYVF1ZXJ5fSBmcm9tICdAcmVhY3QtaG9vay9tZWRpYS1xdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoKSB7XG4gICAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KScpIC8vIDUwJVxuICAgIGNvbnN0IGlzWExNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJykgLy8gNjAlXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpJykgLy8gNzAlXG5cbiAgICBjb25zdCBzb2NpYWxJY29ucyA9IFtcbiAgICAgICAgPFNvY2lhbEljb24gaWNvbj0nbGlua2VkaW4nIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9nZW9yZy1zY2hlbGtzaG9ybi02MzI2NTViYS8nIC8+LFxuICAgICAgICA8U29jaWFsSWNvbiBpY29uPSd4aW5nJyBocmVmPSdodHRwczovL3d3dy54aW5nLmNvbS9wcm9maWxlL0dlb3JnX1NjaGVsa3Nob3JuJyAvPixcbiAgICAgICAgPFNvY2lhbEljb24gaWNvbj0nZmFjZWJvb2snIGhyZWY9J2h0dHA6Ly9mYWNlYm9vay5jb20vZ2Vvcmcuc2NoZWxrc2hvcm4nIC8+XG4gICAgXVxuXG4gICAgbGV0IG11bHRpcGxpZXIgPSAwLjI4IC8vIGRlc2t0b3BcbiAgICBpZiAoaXNUYWJsZXQpIG11bHRpcGxpZXIgPSAwLjVcbiAgICBpZiAoaXNYTE1vYmlsZSkgbXVsdGlwbGllciA9IDAuNlxuICAgIGlmIChpc01vYmlsZSkgbXVsdGlwbGllciA9IDAuN1xuICAgIGNvbnN0IGltZ09mZnNldCA9IHByb2Nlc3MuYnJvd3NlciAmJiAod2luZG93LmlubmVyV2lkdGggKiBtdWx0aXBsaWVyKVxuXG4gICAgY29uc3Qgc3ByaW5nQ29uZmlnID0geyBtYXNzOiAxLCB0ZW5zaW9uOiAyODAsIGZyaWN0aW9uOiA2MCB9XG5cbiAgICBjb25zdCB3V2lkdGggPSAocHJvY2Vzcy5icm93c2VyKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMzNcbiAgICBjb25zdCB3SGVpZ2h0ID0gKHByb2Nlc3MuYnJvd3NlcikgJiYgd2luZG93LmlubmVySGVpZ2h0ICogMC40XG4gICAgY29uc3Qgb3BlbkFuaW1hdGlvbiA9IHVzZVNwcmluZyh7IGZyb206IGlzVGFibGV0ID8geyBoZWlnaHQ6IDAgfSA6IHsgd2lkdGg6IDAgfSwgdG86IGlzVGFibGV0ID8geyBoZWlnaHQ6IHdIZWlnaHQgfHwgMCB9IDogeyB3aWR0aDogd1dpZHRoIHx8IDAgfSwgZGVsYXk6IDUwMCwgY29uZmlnOiBzcHJpbmdDb25maWcgfSlcbiAgICBjb25zdCB7IHg6IGltYWdlWCB9ID0gdXNlU3ByaW5nKHsgZnJvbTogeyB4OiAtaW1nT2Zmc2V0IHx8IDAgfSwgdG86IHsgeDogMCB9LCBkZWxheTogNzUwLCBjb25maWc6IHNwcmluZ0NvbmZpZyB9KVxuICAgIGNvbnN0IHRleHRBbmltYXRpb24gPSB1c2VTcHJpbmcoeyBmcm9tOiB7IG9wYWNpdHk6IDAgfSwgdG86IHsgb3BhY2l0eTogMSB9LCBkZWxheTogNzUwLCBjb25maWc6IHsgLi4uc3ByaW5nQ29uZmlnLCBkdXJhdGlvbjogMTUwMCB9IH0pXG4gICAgY29uc3Qgc29jaWFsQW5pbWF0aW9ucyA9IHVzZVRyYWlsKDMsIHsgZnJvbTogeyB5OiAtMTAwIH0sIHRvOiB7IHk6IDAgfSwgZGVsYXk6IDEwMDAsIGNvbmZpZzogc3ByaW5nQ29uZmlnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17b3BlbkFuaW1hdGlvbn0gY2xhc3NOYW1lPSdzbGFudCcgLz5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGltYWdlWC5pbnRlcnBvbGF0ZSgoaW1hZ2VYKSA9PiBgdHJhbnNsYXRlM2QoJHtpbWFnZVh9cHgsIDBweCwgMHB4KWApLFxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtgbWUtaW1nYH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17dGV4dEFuaW1hdGlvbn0gY2xhc3NOYW1lPSdjb250ZW50LXRleHQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGkhPGJyIC8+SSdtIEdlb3JnPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVudHJlcHJlbmV1ciwgRGV2ZWxvcGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgRGVzaWduIEVudGh1c2lhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgV29ya2luZyA8YSBocmVmPVwiaHR0cHM6Ly90eWwuYXRcIj5AVG91Y2hMYXk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7c29jaWFsQW5pbWF0aW9ucy5tYXAoKHsgeSwgLi4ucmVzdCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ucmVzdCwgdHJhbnNmb3JtOiB5LmludGVycG9sYXRlKHkgPT4gYHRyYW5zbGF0ZTNkKDAsJHt5fXB4LDApYCkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c29jaWFsSWNvbnNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})