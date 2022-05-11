/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./terrace.jpg */ "./src/terrace.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,200;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-clr: #383838;\n  --light-clr: whitesmoke;\n}\n\n* { \n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: var(--light-clr);\n}\n\nbody {\n  min-height: 100vh;\n}\n\n.content {\n  height: 100vh;\n  background-color: var(--light-clr);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.top-bar,\nfooter {\n  background-color: var(--light-clr);\n}\n\n.top-bar {\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-inline: 1rem;\n  width: 100%;\n  height: 3rem;\n  position: fixed;\n  top: 0;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.header > img {\n  height: 2.5rem;\n} \n\n.header > h1  {\n  font-family: 'Libre Baskerville', serif ;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 1.3rem;\n  color: var(--dark-clr);\n} \n\nnav > button {\n  border: none;\n  background: none;\n}\n\nnav > ul {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background-color: var(--light-clr);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n\n  visibility: hidden;\n  transform: translateY(-3em);\n  z-index: -1;\n  opacity: 0;\n  transition: all 300ms ease 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;\n}\n\n.clicked {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0);\n  transition-delay: 0s, 0s, 0.3s;\n}\n\nnav > ul > li {\n  /* display: none; */\n  color: var(--dark-clr);\n  list-style: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  width: 90%;\n  padding-block: .5rem;\n}\n\nnav > ul a {\n  color: var(--dark-clr);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif;\n  font-size: .8rem;\n  font-weight: 200;\n}\n\nmain {\n  background-color: var(--light-clr);\n  padding-inline: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero {\n  height: 70vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: top center;\n  background-attachment: scroll;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgba(0, 0, 0, 0.3);  \n  background-blend-mode: multiply;\n  padding-block: 5rem;\n  padding-inline: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hero > h2 {\n  margin-top: 1.5rem;\n  font-family: 'Montserrat', sans-serif;\n  text-align: start;\n  width: 15ch;\n  padding: 5px;\n  font-style: italic;\n  background-color: rgba(0, 0, 0, 0.3);\n  font-weight: 400;\n\n  \n}\n\n.hero > button {\n  align-self: flex-end;\n  border: 1px solid rgba(255, 165, 0, .6);\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  background-color: transparent;\n}\n\n.hero > button > a {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: .9rem;\n  color: var(--light-clr);\n  text-decoration: none;\n}\n\n.info {\n  background-color: var(--dark-clr);\n  height: 25vh;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-inline: 1rem;\n  padding-block: 3rem;\n}\n\n.info >div {\n  color: var(--light-clr);\n  font-family: 'Montserrat', sans-serif;\n  font-size: .8rem;\n  font-weight: 400;\n}\n\nfooter {\n  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding: .8rem 1rem;\n  width: 100%;\n  height: 3rem;\n  position: static;\n}\n\nfooter > img {\n  height: 1.2rem;\n}\n\nfooter > span {\n  font-size: .8rem;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: var(--dark-clr);\n  text-transform: uppercase;\n}\n\n\n/* MEDIA QUERIES */\n\n/* LAPTOPS */\n@media screen and (min-width: 700px) {\n\n  .top-bar {\n    align-items: center;\n  }\n\n  .top-bar, \n  nav > ul {\n    height: 4rem;\n  }\n\n  nav > button {\n    display: none;\n  }\n\n  nav > ul {\n    opacity: 1;\n    visibility: visible;\n    flex-direction: row;\n    padding-inline: 12rem;\n    top: 3rem;\n  }\n  .hero {\n    padding-inline: 7rem;\n    padding-block: 8rem;\n  }\n}\n\n/* LARGE SCREENS */\n\n@media screen and (min-width: 1200px) {\n  main {\n    padding-inline: 15rem;\n  }\n\n  nav > ul {\n    padding-inline: 16rem;\n  }\n\n  .hero {\n    padding-inline: 10rem;\n    padding-block: 8rem;\n    background-position: center center;\n  }\n\n  .hero h2 {\n    font-size: 2.5rem;\n    font-weight: 200;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 20ch;\n  }\n}\n\n@media screen and (min-width: 2000px) {\n  .hero h2 {\n    font-size: 4rem;\n  }\n  .hero > button > a {\n    font-size: 2rem;\n  }\n\n  .info {\n    height: 26vh;\n    align-items: center;\n  }\n\n  .info > div {\n    font-size: 1.2rem;\n  }\n  footer > span {\n    font-size: 1.2rem;\n  }\n}\n\n  ", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,200;1,400&display=swap');\n\n:root {\n  --dark-clr: #383838;\n  --light-clr: whitesmoke;\n}\n\n* { \n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: var(--light-clr);\n}\n\nbody {\n  min-height: 100vh;\n}\n\n.content {\n  height: 100vh;\n  background-color: var(--light-clr);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.top-bar,\nfooter {\n  background-color: var(--light-clr);\n}\n\n.top-bar {\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-inline: 1rem;\n  width: 100%;\n  height: 3rem;\n  position: fixed;\n  top: 0;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.header > img {\n  height: 2.5rem;\n} \n\n.header > h1  {\n  font-family: 'Libre Baskerville', serif ;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 1.3rem;\n  color: var(--dark-clr);\n} \n\nnav > button {\n  border: none;\n  background: none;\n}\n\nnav > ul {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background-color: var(--light-clr);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n\n  visibility: hidden;\n  transform: translateY(-3em);\n  z-index: -1;\n  opacity: 0;\n  transition: all 300ms ease 0s, visibility 0s linear 0.3s, z-index 0s linear 10ms;\n}\n\n.clicked {\n  visibility: visible;\n  opacity: 1;\n  z-index: 100;\n  transform: translateY(0);\n  transition-delay: 0s, 0s, 0.3s;\n}\n\nnav > ul > li {\n  /* display: none; */\n  color: var(--dark-clr);\n  list-style: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  width: 90%;\n  padding-block: .5rem;\n}\n\nnav > ul a {\n  color: var(--dark-clr);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif;\n  font-size: .8rem;\n  font-weight: 200;\n}\n\nmain {\n  background-color: var(--light-clr);\n  padding-inline: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero {\n  height: 70vh;\n  background-image: url('./terrace.jpg');\n  background-position: top center;\n  background-attachment: scroll;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgba(0, 0, 0, 0.3);  \n  background-blend-mode: multiply;\n  padding-block: 5rem;\n  padding-inline: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hero > h2 {\n  margin-top: 1.5rem;\n  font-family: 'Montserrat', sans-serif;\n  text-align: start;\n  width: 15ch;\n  padding: 5px;\n  font-style: italic;\n  background-color: rgba(0, 0, 0, 0.3);\n  font-weight: 400;\n\n  \n}\n\n.hero > button {\n  align-self: flex-end;\n  border: 1px solid rgba(255, 165, 0, .6);\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  background-color: transparent;\n}\n\n.hero > button > a {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: .9rem;\n  color: var(--light-clr);\n  text-decoration: none;\n}\n\n.info {\n  background-color: var(--dark-clr);\n  height: 25vh;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-inline: 1rem;\n  padding-block: 3rem;\n}\n\n.info >div {\n  color: var(--light-clr);\n  font-family: 'Montserrat', sans-serif;\n  font-size: .8rem;\n  font-weight: 400;\n}\n\nfooter {\n  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding: .8rem 1rem;\n  width: 100%;\n  height: 3rem;\n  position: static;\n}\n\nfooter > img {\n  height: 1.2rem;\n}\n\nfooter > span {\n  font-size: .8rem;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: var(--dark-clr);\n  text-transform: uppercase;\n}\n\n\n/* MEDIA QUERIES */\n\n/* LAPTOPS */\n@media screen and (min-width: 700px) {\n\n  .top-bar {\n    align-items: center;\n  }\n\n  .top-bar, \n  nav > ul {\n    height: 4rem;\n  }\n\n  nav > button {\n    display: none;\n  }\n\n  nav > ul {\n    opacity: 1;\n    visibility: visible;\n    flex-direction: row;\n    padding-inline: 12rem;\n    top: 3rem;\n  }\n  .hero {\n    padding-inline: 7rem;\n    padding-block: 8rem;\n  }\n}\n\n/* LARGE SCREENS */\n\n@media screen and (min-width: 1200px) {\n  main {\n    padding-inline: 15rem;\n  }\n\n  nav > ul {\n    padding-inline: 16rem;\n  }\n\n  .hero {\n    padding-inline: 10rem;\n    padding-block: 8rem;\n    background-position: center center;\n  }\n\n  .hero h2 {\n    font-size: 2.5rem;\n    font-weight: 200;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 20ch;\n  }\n}\n\n@media screen and (min-width: 2000px) {\n  .hero h2 {\n    font-size: 4rem;\n  }\n  .hero > button > a {\n    font-size: 2rem;\n  }\n\n  .info {\n    height: 26vh;\n    align-items: center;\n  }\n\n  .info > div {\n    font-size: 1.2rem;\n  }\n  footer > span {\n    font-size: 1.2rem;\n  }\n}\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Hamburger_icon.svg":
/*!********************************!*\
  !*** ./src/Hamburger_icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b778cb1777612594612f.svg";

/***/ }),

/***/ "./src/logo-sunrise.svg":
/*!******************************!*\
  !*** ./src/logo-sunrise.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a206433a45fdc3ba06a9.svg";

/***/ }),

/***/ "./src/phone-icon.svg":
/*!****************************!*\
  !*** ./src/phone-icon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "915675a4fe5b126e1af0.svg";

/***/ }),

/***/ "./src/terrace.jpg":
/*!*************************!*\
  !*** ./src/terrace.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52eb303f055f08b6be7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logo_sunrise_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo-sunrise.svg */ "./src/logo-sunrise.svg");
/* harmony import */ var _Hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger_icon.svg */ "./src/Hamburger_icon.svg");
/* harmony import */ var _terrace_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terrace.jpg */ "./src/terrace.jpg");
/* harmony import */ var _phone_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-icon.svg */ "./src/phone-icon.svg");






const content = document.querySelector('.content');

//Create topbar html
const topBar = document.createElement('div');
topBar.className = 'top-bar';
content.appendChild(topBar);

const header = document.createElement('header');
header.className = 'header';
topBar.appendChild(header);

const imgLogo = document.createElement('img');
imgLogo.src = _logo_sunrise_svg__WEBPACK_IMPORTED_MODULE_1__;
imgLogo.alt = 'logo';

const h1Logo = document.createElement('h1');
h1Logo.textContent = 'Aurora';

header.appendChild(imgLogo);
header.appendChild(h1Logo);

const nav = document.createElement('nav');
topBar.appendChild(nav);

const menuButton = document.createElement('button');
menuButton.type = 'button';

const menuButtonImg = document.createElement('img');
menuButtonImg.src = _Hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
menuButtonImg.alt = 'menu';

menuButton.appendChild(menuButtonImg);
nav.appendChild(menuButton);

const menuList = document.createElement('ul');
menuList.clasName = 'navigation-drawer';

const menuListItems = ['Home', 'About', 'Menu', 'Contact'];

for (let i = 0; i <= menuListItems.length - 1; i++) {
  const li = document.createElement('li');
  const link = document.createElement('a');

  link.textContent = menuListItems[i];
  link.href = `#${menuListItems[i].toLowerCase()}`;
  li.appendChild(link);
  menuList.appendChild(li);
}

nav.appendChild(menuList);

/// Menu button event listener
menuButton.addEventListener('click', () => {
  menuList.classList.toggle('clicked');
})

//Create main html

const main = document.createElement('main');
content.appendChild(main);

const hero = document.createElement('div');
hero.className = 'hero';
const heroTitle = document.createElement('h2');
heroTitle.textContent = 'MEDITERRANEAN DELIGHTS AND GOURMET BURGERS';

const springMenuButton = document.createElement('button');
springMenuButton.type = 'button'
const springMenuLink = document.createElement('a');
springMenuLink.textContent = 'Spring-Summer Menu';
springMenuLink.href = '#';

hero.appendChild(heroTitle);
springMenuButton.appendChild(springMenuLink);
hero.appendChild(springMenuButton);

main.appendChild(hero);

const info = document.createElement('div');
info.className = 'info';
const infoArray = ['Riviera Dionisio Il Grande, 194, 96100 Siracusa SR, Italia','+39 06 173 14002', 'Mon-Fri 12:30-22:45', 'Ristorante Aurora Copyright 2022'];

for (let i = 0; i <= infoArray.length - 1; i++) {
  const infoDiv = document.createElement('div');
  infoDiv.className = infoArray[i];
  infoDiv.textContent = infoArray[i].charAt(0).toUpperCase() + infoArray[i].slice(1);
  info.appendChild(infoDiv);
}

main.appendChild(info);


//Create footer html

const footer = document.createElement('footer');
const callIcon = document.createElement('img');
callIcon.src = _phone_icon_svg__WEBPACK_IMPORTED_MODULE_4__;
callIcon.alt = 'call us';

const footerSpan = document.createElement('span');
footerSpan.textContent = 'Book a table';

footer.appendChild(callIcon);
footer.appendChild(footerSpan);

content.appendChild(footer);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxV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QUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3RlcnJhY2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMjAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRhcmstY2xyOiAjMzgzODM4O1xcbiAgLS1saWdodC1jbHI6IHdoaXRlc21va2U7XFxufVxcblxcbiogeyBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3AtYmFyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbn1cXG5cXG4udG9wLWJhciB7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmhlYWRlciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59IFxcblxcbi5oZWFkZXIgPiBoMSAge1xcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmIDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxufSBcXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNlbSk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4zcywgei1pbmRleCAwcyBsaW5lYXIgMTBtcztcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuM3M7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nLWJsb2NrOiAuNXJlbTtcXG59XFxuXFxubmF2ID4gdWwgYSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1jbHIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7ICBcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBwYWRkaW5nLWJsb2NrOiA1cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlcm8gPiBoMiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB3aWR0aDogMTVjaDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICBcXG59XFxuXFxuLmhlcm8gPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTY1LCAwLCAuNik7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmhlcm8gPiBidXR0b24gPiBhIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAzcmVtO1xcbn1cXG5cXG4uaW5mbyA+ZGl2IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm94LXNoYWRvdzogMCAtMnB4IDRweCAwIHJnYmEoMCwwLDAsLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogLjhyZW0gMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuZm9vdGVyID4gaW1nIHtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuLyogTEFQVE9QUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFxuICAudG9wLWJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudG9wLWJhciwgXFxuICBuYXYgPiB1bCB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gIH1cXG5cXG4gIG5hdiA+IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgPiB1bCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxMnJlbTtcXG4gICAgdG9wOiAzcmVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBwYWRkaW5nLWlubGluZTogN3JlbTtcXG4gICAgcGFkZGluZy1ibG9jazogOHJlbTtcXG4gIH1cXG59XFxuXFxuLyogTEFSR0UgU0NSRUVOUyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxNXJlbTtcXG4gIH1cXG5cXG4gIG5hdiA+IHVsIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE2cmVtO1xcbiAgfVxcblxcbiAgLmhlcm8ge1xcbiAgICBwYWRkaW5nLWlubGluZTogMTByZW07XFxuICAgIHBhZGRpbmctYmxvY2s6IDhyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICB9XFxuXFxuICAuaGVybyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDIwY2g7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xcbiAgLmhlcm8gaDIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuICAuaGVybyA+IGJ1dHRvbiA+IGEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIGhlaWdodDogMjZ2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbmZvID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICBmb290ZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcblxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0FB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cEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMjAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1jbHI6ICMzODM4Mzg7XFxuICAtLWxpZ2h0LWNscjogd2hpdGVzbW9rZTtcXG59XFxuXFxuKiB7IFxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtY2xyKTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcC1iYXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxufVxcblxcbi50b3AtYmFyIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uaGVhZGVyID4gaW1nIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbn0gXFxuXFxuLmhlYWRlciA+IGgxICB7XFxuICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWYgO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstY2xyKTtcXG59IFxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5uYXYgPiB1bCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM2VtKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjNzLCB6LWluZGV4IDBzIGxpbmVhciAxMG1zO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4zcztcXG59XFxuXFxubmF2ID4gdWwgPiBsaSB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgY29sb3I6IHZhcigtLWRhcmstY2xyKTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcbn1cXG5cXG5uYXYgPiB1bCBhIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNscik7XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi90ZXJyYWNlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7ICBcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBwYWRkaW5nLWJsb2NrOiA1cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlcm8gPiBoMiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB3aWR0aDogMTVjaDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICBcXG59XFxuXFxuLmhlcm8gPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTY1LCAwLCAuNik7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmhlcm8gPiBidXR0b24gPiBhIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAzcmVtO1xcbn1cXG5cXG4uaW5mbyA+ZGl2IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm94LXNoYWRvdzogMCAtMnB4IDRweCAwIHJnYmEoMCwwLDAsLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogLjhyZW0gMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuZm9vdGVyID4gaW1nIHtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNscik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuLyogTEFQVE9QUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFxuICAudG9wLWJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudG9wLWJhciwgXFxuICBuYXYgPiB1bCB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gIH1cXG5cXG4gIG5hdiA+IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYgPiB1bCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxMnJlbTtcXG4gICAgdG9wOiAzcmVtO1xcbiAgfVxcbiAgLmhlcm8ge1xcbiAgICBwYWRkaW5nLWlubGluZTogN3JlbTtcXG4gICAgcGFkZGluZy1ibG9jazogOHJlbTtcXG4gIH1cXG59XFxuXFxuLyogTEFSR0UgU0NSRUVOUyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxNXJlbTtcXG4gIH1cXG5cXG4gIG5hdiA+IHVsIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE2cmVtO1xcbiAgfVxcblxcbiAgLmhlcm8ge1xcbiAgICBwYWRkaW5nLWlubGluZTogMTByZW07XFxuICAgIHBhZGRpbmctYmxvY2s6IDhyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICB9XFxuXFxuICAuaGVybyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDIwY2g7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xcbiAgLmhlcm8gaDIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuICAuaGVybyA+IGJ1dHRvbiA+IGEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIGhlaWdodDogMjZ2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbmZvID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICBmb290ZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcblxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28tc3VucmlzZS5zdmcnO1xuaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnLi9IYW1idXJnZXJfaWNvbi5zdmcnO1xuaW1wb3J0IE1haW5CYWNrZ3JvdW5kIGZyb20gJy4vdGVycmFjZS5qcGcnO1xuaW1wb3J0IFBob25lSWNvbiBmcm9tICcuL3Bob25lLWljb24uc3ZnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbi8vQ3JlYXRlIHRvcGJhciBodG1sXG5jb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvcEJhci5jbGFzc05hbWUgPSAndG9wLWJhcic7XG5jb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcik7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xudG9wQmFyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZ0xvZ28uc3JjID0gTG9nbztcbmltZ0xvZ28uYWx0ID0gJ2xvZ28nO1xuXG5jb25zdCBoMUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDFMb2dvLnRleHRDb250ZW50ID0gJ0F1cm9yYSc7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChpbWdMb2dvKTtcbmhlYWRlci5hcHBlbmRDaGlsZChoMUxvZ28pO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbnRvcEJhci5hcHBlbmRDaGlsZChuYXYpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5tZW51QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcblxuY29uc3QgbWVudUJ1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVudUJ1dHRvbkltZy5zcmMgPSBIYW1idXJnZXJNZW51O1xubWVudUJ1dHRvbkltZy5hbHQgPSAnbWVudSc7XG5cbm1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbkltZyk7XG5uYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm1lbnVMaXN0LmNsYXNOYW1lID0gJ25hdmlnYXRpb24tZHJhd2VyJztcblxuY29uc3QgbWVudUxpc3RJdGVtcyA9IFsnSG9tZScsICdBYm91dCcsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPD0gbWVudUxpc3RJdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGxpbmsudGV4dENvbnRlbnQgPSBtZW51TGlzdEl0ZW1zW2ldO1xuICBsaW5rLmhyZWYgPSBgIyR7bWVudUxpc3RJdGVtc1tpXS50b0xvd2VyQ2FzZSgpfWA7XG4gIGxpLmFwcGVuZENoaWxkKGxpbmspO1xuICBtZW51TGlzdC5hcHBlbmRDaGlsZChsaSk7XG59XG5cbm5hdi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbi8vLyBNZW51IGJ1dHRvbiBldmVudCBsaXN0ZW5lclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xufSlcblxuLy9DcmVhdGUgbWFpbiBodG1sXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbmNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5oZXJvVGl0bGUudGV4dENvbnRlbnQgPSAnTUVESVRFUlJBTkVBTiBERUxJR0hUUyBBTkQgR09VUk1FVCBCVVJHRVJTJztcblxuY29uc3Qgc3ByaW5nTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3ByaW5nTWVudUJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbmNvbnN0IHNwcmluZ01lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuc3ByaW5nTWVudUxpbmsudGV4dENvbnRlbnQgPSAnU3ByaW5nLVN1bW1lciBNZW51JztcbnNwcmluZ01lbnVMaW5rLmhyZWYgPSAnIyc7XG5cbmhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcbnNwcmluZ01lbnVCdXR0b24uYXBwZW5kQ2hpbGQoc3ByaW5nTWVudUxpbmspO1xuaGVyby5hcHBlbmRDaGlsZChzcHJpbmdNZW51QnV0dG9uKTtcblxubWFpbi5hcHBlbmRDaGlsZChoZXJvKTtcblxuY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5mby5jbGFzc05hbWUgPSAnaW5mbyc7XG5jb25zdCBpbmZvQXJyYXkgPSBbJ1JpdmllcmEgRGlvbmlzaW8gSWwgR3JhbmRlLCAxOTQsIDk2MTAwIFNpcmFjdXNhIFNSLCBJdGFsaWEnLCcrMzkgMDYgMTczIDE0MDAyJywgJ01vbi1GcmkgMTI6MzAtMjI6NDUnLCAnUmlzdG9yYW50ZSBBdXJvcmEgQ29weXJpZ2h0IDIwMjInXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5mb0FycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9EaXYuY2xhc3NOYW1lID0gaW5mb0FycmF5W2ldO1xuICBpbmZvRGl2LnRleHRDb250ZW50ID0gaW5mb0FycmF5W2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5mb0FycmF5W2ldLnNsaWNlKDEpO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9EaXYpO1xufVxuXG5tYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG5cbi8vQ3JlYXRlIGZvb3RlciBodG1sXG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuY29uc3QgY2FsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNhbGxJY29uLnNyYyA9IFBob25lSWNvbjtcbmNhbGxJY29uLmFsdCA9ICdjYWxsIHVzJztcblxuY29uc3QgZm9vdGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmZvb3RlclNwYW4udGV4dENvbnRlbnQgPSAnQm9vayBhIHRhYmxlJztcblxuZm9vdGVyLmFwcGVuZENoaWxkKGNhbGxJY29uKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJTcGFuKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=