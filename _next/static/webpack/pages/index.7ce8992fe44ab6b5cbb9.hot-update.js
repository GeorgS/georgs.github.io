webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SocialIcon */ \"./src/components/SocialIcon.js\");\n/* harmony import */ var _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-hook/media-query */ \"./node_modules/@react-hook/media-query/dist/module/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/georg/Development/Sandbox/georgs.github.io/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MainPage() {\n  _s();\n\n  var _this = this;\n\n  var isTablet = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 1024px)'); // 50%\n\n  var isXLMobile = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 768px)'); // 60%\n\n  var isMobile = Object(_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"])('only screen and (max-width: 425px)'); // 70%\n\n  var socialIcons = [__jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"linkedin\",\n    href: \"https://www.linkedin.com/in/georg-schelkshorn-632655ba/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"xing\",\n    href: \"https://www.xing.com/profile/Georg_Schelkshorn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"facebook\",\n    href: \"http://facebook.com/georg.schelkshorn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })];\n  var multiplier = 0.28; // desktop\n\n  if (isTablet) multiplier = 0.5;\n  if (isXLMobile) multiplier = 0.6;\n  if (isMobile) multiplier = 0.7;\n  var imgOffset =  true && window.innerWidth * multiplier;\n  var springConfig = {\n    mass: 1,\n    tension: 280,\n    friction: 60\n  };\n  var wWidth =  true && window.innerWidth * 0.33;\n  var wHeight =  true && window.innerHeight * 0.4;\n  var openAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: isTablet ? {\n      height: 0\n    } : {\n      width: 0\n    },\n    to: isTablet ? {\n      height: wHeight || 0\n    } : {\n      width: wWidth || 0\n    },\n    delay: 500,\n    config: springConfig\n  });\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: {\n      x: -imgOffset || 0\n    },\n    to: {\n      x: 0\n    },\n    delay: 750,\n    config: _objectSpread(_objectSpread({}, springConfig), {}, {\n      duration: 400\n    })\n  }),\n      imageX = _useSpring.x;\n\n  var textAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    from: {\n      opacity: 0\n    },\n    to: {\n      opacity: 1\n    },\n    delay: 750,\n    config: _objectSpread(_objectSpread({}, springConfig), {}, {\n      duration: 1500\n    })\n  });\n  var socialAnimations = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTrail\"])(3, {\n    from: {\n      y: -100\n    },\n    to: {\n      y: 0\n    },\n    delay: 1000,\n    config: springConfig\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: openAnimation,\n    className: \"slant\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: {\n      transform: imageX.interpolate(function (imageX) {\n        return \"translate3d(\".concat(imageX, \"px, 0px, 0px)\");\n      })\n    },\n    className: \"me-img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: textAnimation,\n    className: \"content-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"Hi!\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 28\n    }\n  }), \"I'm Georg\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, \"Entrepreneur, Developer\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 48\n    }\n  }), \"and Design Enthusiast\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 31\n    }\n  }), \"Working \", __jsx(\"a\", {\n    href: \"https://tly.at\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 33\n    }\n  }, \"@TouchLay\")))), __jsx(\"div\", {\n    className: \"social-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, socialAnimations.map(function (_ref, index) {\n    var y = _ref.y,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"y\"]);\n\n    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n      key: index,\n      style: _objectSpread(_objectSpread({}, rest), {}, {\n        transform: y.interpolate(function (y) {\n          return \"translate3d(0,\".concat(y, \"px,0)\");\n        })\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, socialIcons[index]);\n  })));\n}\n\n_s(MainPage, \"mPnsj6HlqxLPgrD8l3EFbVY1GKw=\", false, function () {\n  return [_react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], _react_hook_media_query__WEBPACK_IMPORTED_MODULE_5__[\"useMediaQuery\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useTrail\"]];\n});\n\n_c = MainPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJpc1RhYmxldCIsInVzZU1lZGlhUXVlcnkiLCJpc1hMTW9iaWxlIiwiaXNNb2JpbGUiLCJzb2NpYWxJY29ucyIsIm11bHRpcGxpZXIiLCJpbWdPZmZzZXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3ByaW5nQ29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsIndXaWR0aCIsIndIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9wZW5BbmltYXRpb24iLCJ1c2VTcHJpbmciLCJmcm9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0byIsImRlbGF5IiwiY29uZmlnIiwieCIsImR1cmF0aW9uIiwiaW1hZ2VYIiwidGV4dEFuaW1hdGlvbiIsIm9wYWNpdHkiLCJzb2NpYWxBbmltYXRpb25zIiwidXNlVHJhaWwiLCJ5IiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJtYXAiLCJpbmRleCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxRQUFRLEdBQUdDLDZFQUFhLENBQUMscUNBQUQsQ0FBOUIsQ0FEK0IsQ0FDdUM7O0FBQ3RFLE1BQU1DLFVBQVUsR0FBR0QsNkVBQWEsQ0FBQyxvQ0FBRCxDQUFoQyxDQUYrQixDQUV3Qzs7QUFDdkUsTUFBTUUsUUFBUSxHQUFHRiw2RUFBYSxDQUFDLG9DQUFELENBQTlCLENBSCtCLENBR3NDOztBQUVyRSxNQUFNRyxXQUFXLEdBQUcsQ0FDaEIsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBQyxVQUFqQjtBQUE0QixRQUFJLEVBQUMseURBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZ0IsRUFFaEIsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFB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QUFBQSxTQUFmO0FBQXhCLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdTM0IsV0FBVyxDQUFDK0IsS0FBRCxDQUhwQixDQURzQjtBQUFBLEdBQXJCLENBREwsQ0FmSixDQURKO0FBMkJIOztHQXJEdUJwQyxRO1VBQ0hFLHFFLEVBQ0VBLHFFLEVBQ0ZBLHFFLEVBa0JLZ0Isc0QsRUFDQUEsc0QsRUFDQUEsc0QsRUFDR2EscUQ7OztLQXhCTC9CLFEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5nLCB1c2VUcmFpbCwgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgU29jaWFsSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbEljb24nXG5pbXBvcnQge3VzZU1lZGlhUXVlcnl9IGZyb20gJ0ByZWFjdC1ob29rL21lZGlhLXF1ZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpIHtcbiAgICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJykgLy8gNTAlXG4gICAgY29uc3QgaXNYTE1vYmlsZSA9IHVzZU1lZGlhUXVlcnkoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknKSAvLyA2MCVcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCknKSAvLyA3MCVcblxuICAgIGNvbnN0IHNvY2lhbEljb25zID0gW1xuICAgICAgICA8U29jaWFsSWNvbiBpY29uPSdsaW5rZWRpbicgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dlb3JnLXNjaGVsa3Nob3JuLTYzMjY1NWJhLycgLz4sXG4gICAgICAgIDxTb2NpYWxJY29uIGljb249J3hpbmcnIGhyZWY9J2h0dHBzOi8vd3d3LnhpbmcuY29tL3Byb2ZpbGUvR2VvcmdfU2NoZWxrc2hvcm4nIC8+LFxuICAgICAgICA8U29jaWFsSWNvbiBpY29uPSdmYWNlYm9vaycgaHJlZj0naHR0cDovL2ZhY2Vib29rLmNvbS9nZW9yZy5zY2hlbGtzaG9ybicgLz5cbiAgICBdXG5cbiAgICBsZXQgbXVsdGlwbGllciA9IDAuMjggLy8gZGVza3RvcFxuICAgIGlmIChpc1RhYmxldCkgbXVsdGlwbGllciA9IDAuNVxuICAgIGlmIChpc1hMTW9iaWxlKSBtdWx0aXBsaWVyID0gMC42XG4gICAgaWYgKGlzTW9iaWxlKSBtdWx0aXBsaWVyID0gMC43XG4gICAgY29uc3QgaW1nT2Zmc2V0ID0gcHJvY2Vzcy5icm93c2VyICYmICh3aW5kb3cuaW5uZXJXaWR0aCAqIG11bHRpcGxpZXIpXG5cbiAgICBjb25zdCBzcHJpbmdDb25maWcgPSB7IG1hc3M6IDEsIHRlbnNpb246IDI4MCwgZnJpY3Rpb246IDYwIH1cblxuICAgIGNvbnN0IHdXaWR0aCA9IChwcm9jZXNzLmJyb3dzZXIpICYmIHdpbmRvdy5pbm5lcldpZHRoICogMC4zM1xuICAgIGNvbnN0IHdIZWlnaHQgPSAocHJvY2Vzcy5icm93c2VyKSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjRcbiAgICBjb25zdCBvcGVuQW5pbWF0aW9uID0gdXNlU3ByaW5nKHsgZnJvbTogaXNUYWJsZXQgPyB7IGhlaWdodDogMCB9IDogeyB3aWR0aDogMCB9LCB0bzogaXNUYWJsZXQgPyB7IGhlaWdodDogd0hlaWdodCB8fCAwIH0gOiB7IHdpZHRoOiB3V2lkdGggfHwgMCB9LCBkZWxheTogNTAwLCBjb25maWc6IHNwcmluZ0NvbmZpZyB9KVxuICAgIGNvbnN0IHsgeDogaW1hZ2VYIH0gPSB1c2VTcHJpbmcoeyBmcm9tOiB7IHg6IC1pbWdPZmZzZXQgfHwgMCB9LCB0bzogeyB4OiAwIH0sIGRlbGF5OiA3NTAsIGNvbmZpZzogeyAuLi5zcHJpbmdDb25maWcsIGR1cmF0aW9uOiA0MDAgfSB9KVxuICAgIGNvbnN0IHRleHRBbmltYXRpb24gPSB1c2VTcHJpbmcoeyBmcm9tOiB7IG9wYWNpdHk6IDAgfSwgdG86IHsgb3BhY2l0eTogMSB9LCBkZWxheTogNzUwLCBjb25maWc6IHsgLi4uc3ByaW5nQ29uZmlnLCBkdXJhdGlvbjogMTUwMCB9IH0pXG4gICAgY29uc3Qgc29jaWFsQW5pbWF0aW9ucyA9IHVzZVRyYWlsKDMsIHsgZnJvbTogeyB5OiAtMTAwIH0sIHRvOiB7IHk6IDAgfSwgZGVsYXk6IDEwMDAsIGNvbmZpZzogc3ByaW5nQ29uZmlnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17b3BlbkFuaW1hdGlvbn0gY2xhc3NOYW1lPSdzbGFudCcgLz5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGltYWdlWC5pbnRlcnBvbGF0ZSgoaW1hZ2VYKSA9PiBgdHJhbnNsYXRlM2QoJHtpbWFnZVh9cHgsIDBweCwgMHB4KWApLFxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtgbWUtaW1nYH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17dGV4dEFuaW1hdGlvbn0gY2xhc3NOYW1lPSdjb250ZW50LXRleHQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGkhPGJyIC8+SSdtIEdlb3JnPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVudHJlcHJlbmV1ciwgRGV2ZWxvcGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgRGVzaWduIEVudGh1c2lhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgV29ya2luZyA8YSBocmVmPVwiaHR0cHM6Ly90bHkuYXRcIj5AVG91Y2hMYXk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7c29jaWFsQW5pbWF0aW9ucy5tYXAoKHsgeSwgLi4ucmVzdCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ucmVzdCwgdHJhbnNmb3JtOiB5LmludGVycG9sYXRlKHkgPT4gYHRyYW5zbGF0ZTNkKDAsJHt5fXB4LDApYCkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c29jaWFsSWNvbnNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})