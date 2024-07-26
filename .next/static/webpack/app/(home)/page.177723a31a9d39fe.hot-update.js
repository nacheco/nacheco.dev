/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-client)/./components/ProjectComponents/Tool.tsx":
/*!***********************************************!*\
  !*** ./components/ProjectComponents/Tool.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "(app-client)/./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   HeroHeading: function() { return /* reexport safe */ _HeroHeading__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   HeroImage: function() { return /* reexport safe */ _HeroImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   NavigationBar: function() { return /* reexport safe */ _NavigationBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   ProjectCard: function() { return /* reexport safe */ _ProjectComponents_ProjectCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   ProjectHeading: function() { return /* reexport safe */ _ProjectComponents_ProjectHeading__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   ScrollToTop: function() { return /* reexport safe */ _ScrollToTop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   ScrollUp: function() { return /* reexport safe */ _Common_ScrollUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   SectionHeading: function() { return /* reexport safe */ _SectionHeading__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   Tool: function() { return /* reexport default from dynamic */ _ProjectComponents_Tool__WEBPACK_IMPORTED_MODULE_10___default.a; },\n/* harmony export */   ToolList: function() { return /* reexport safe */ _ProjectComponents_ToolList__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"(app-client)/./components/Footer.tsx\");\n/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollToTop */ \"(app-client)/./components/ScrollToTop.tsx\");\n/* harmony import */ var _Common_ScrollUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common/ScrollUp */ \"(app-client)/./components/Common/ScrollUp.tsx\");\n/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionHeading */ \"(app-client)/./components/SectionHeading.tsx\");\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationBar */ \"(app-client)/./components/NavigationBar/index.tsx\");\n/* harmony import */ var _HeroHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroHeading */ \"(app-client)/./components/HeroHeading.tsx\");\n/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroImage */ \"(app-client)/./components/HeroImage.tsx\");\n/* harmony import */ var _ProjectComponents_ProjectHeading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectComponents/ProjectHeading */ \"(app-client)/./components/ProjectComponents/ProjectHeading.tsx\");\n/* harmony import */ var _ProjectComponents_ProjectCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectComponents/ProjectCard */ \"(app-client)/./components/ProjectComponents/ProjectCard.tsx\");\n/* harmony import */ var _ProjectComponents_ToolList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectComponents/ToolList */ \"(app-client)/./components/ProjectComponents/ToolList.tsx\");\n/* harmony import */ var _ProjectComponents_Tool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectComponents/Tool */ \"(app-client)/./components/ProjectComponents/Tool.tsx\");\n/* harmony import */ var _ProjectComponents_Tool__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ProjectComponents_Tool__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNVO0FBQ0M7QUFDSztBQUNGO0FBQ0o7QUFDSjtBQUM0QjtBQUNOO0FBQ047QUFDUjtBQWMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LnRzP2YyYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IFNjcm9sbFVwIGZyb20gXCIuL0NvbW1vbi9TY3JvbGxVcFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuL1NlY3Rpb25IZWFkaW5nXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgSGVyb0hlYWRpbmcgZnJvbSBcIi4vSGVyb0hlYWRpbmdcIjtcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSBcIi4vSGVyb0ltYWdlXCI7XG5pbXBvcnQgUHJvamVjdEhlYWRpbmcgZnJvbSBcIi4vUHJvamVjdENvbXBvbmVudHMvUHJvamVjdEhlYWRpbmdcIjtcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IFRvb2xMaXN0IGZyb20gXCIuL1Byb2plY3RDb21wb25lbnRzL1Rvb2xMaXN0XCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi9Qcm9qZWN0Q29tcG9uZW50cy9Ub29sXCI7XG5cbmV4cG9ydCB7XG4gIE5hdmlnYXRpb25CYXIsXG4gIEZvb3RlcixcbiAgU2Nyb2xsVG9Ub3AsXG4gIFNlY3Rpb25IZWFkaW5nLFxuICBTY3JvbGxVcCxcbiAgSGVyb0hlYWRpbmcsXG4gIEhlcm9JbWFnZSxcbiAgUHJvamVjdEhlYWRpbmcsXG4gIFByb2plY3RDYXJkLFxuICBUb29sTGlzdCxcbiAgVG9vbCxcbn07XG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiU2Nyb2xsVG9Ub3AiLCJTY3JvbGxVcCIsIlNlY3Rpb25IZWFkaW5nIiwiTmF2aWdhdGlvbkJhciIsIkhlcm9IZWFkaW5nIiwiSGVyb0ltYWdlIiwiUHJvamVjdEhlYWRpbmciLCJQcm9qZWN0Q2FyZCIsIlRvb2xMaXN0IiwiVG9vbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/index.ts\n"));

/***/ })

});