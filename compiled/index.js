/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony export appendChild */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** @jsx createElement */

var createElement = function createElement(tag, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (typeof tag === "function") return tag.apply(void 0, [props].concat(children));
  var element = document.createElement(tag);
  Object.entries(props || {}).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      value = _ref2[1];
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substring(2), value);
      return;
    }
    if (name === "className") {
      element.setAttribute("class", value);
      return;
    }
    if (name === "style" && _typeof(value) === "object") {
      Object.keys(value).forEach(function (propName) {
        var propValue = value[propName];
        element.style[propName] = propValue;
      });
      return;
    }
    if (name === "disabled") {
      element.disabled = Boolean(value);
      return;
    }
    if (!value) return;
    element.setAttribute(name, value.toString());
  });
  children.forEach(function (child) {
    appendChild(element, child);
  });
  return element;
};
var appendChild = function appendChild(parent, child) {
  if (Array.isArray(child)) return child.forEach(function (nestedChild) {
    return appendChild(parent, nestedChild);
  });
  if (!child) return;
  parent.appendChild(child !== null && child !== void 0 && child.nodeType ? child : document.createTextNode(child));
};


/***/ }),

/***/ 363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.AppOverview__SeeAlso {
    margin: 14px;
    gap: 8px;
}

.AppOverview__SeeAlsoList {
    list-style-type: none;
}

.AppOverview__SeeAlsoListItem {
    margin-top: 4px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/AppOverview/index.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".AppOverview__SeeAlso {\r\n    margin: 14px;\r\n    gap: 8px;\r\n}\r\n\r\n.AppOverview__SeeAlsoList {\r\n    list-style-type: none;\r\n}\r\n\r\n.AppOverview__SeeAlsoListItem {\r\n    margin-top: 4px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ButtonBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: calc(100vw - 4px);
    border: 0;
    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,
        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-300),
        var(--border-radius) 0px 0px var(--shadow-300), 0px var(--border-radius) 0px var(--shadow-300);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/ButtonBarContainer/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,SAAS;IACT;;;sGAGkG;AACtG","sourcesContent":[".ButtonBar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width: calc(100vw - 4px);\r\n    border: 0;\r\n    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,\r\n        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-300),\r\n        var(--border-radius) 0px 0px var(--shadow-300), 0px var(--border-radius) 0px var(--shadow-300);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ViewContainer {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    height: calc(100% - 85px);
    padding-top: 4px;
}

.View {
    background-color: var(--white);
    overflow-y: auto;
    overflow-x: auto;
}

.ViewResizeHandleLeft {
    cursor: ew-resize;
    padding-inline: 4px;
    height: 100%;
    z-index: 2;
}

.CloseBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/ViewContainer/index.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,QAAQ;AACZ","sourcesContent":[".ViewContainer {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: calc(100% - 85px);\r\n    padding-top: 4px;\r\n}\r\n\r\n.View {\r\n    background-color: var(--white);\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n.ViewResizeHandleLeft {\r\n    cursor: ew-resize;\r\n    padding-inline: 4px;\r\n    height: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.CloseBar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 1px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 32:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.WindowContent {
    display: flex;
    flex-flow: column;
    height: 100%;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/WindowContent/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB","sourcesContent":[".WindowContent {\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--black);
    font-family: var(--font-reg);
    font-size: small;
    background-color: transparent;
    border: 0;
    padding-block: 2px;
    margin: 0;
    cursor: pointer;
    padding-inline: 8px;
}
.Button:active {
    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;
}
.Button:disabled {
    cursor: default;
    color: var(--grey-300);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Button/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,6BAA6B;IAC7B,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,mBAAmB;AACvB;AACA;IACI;6EACyE;AAC7E;AACA;IACI,eAAe;IACf,sBAAsB;AAC1B","sourcesContent":[".Button {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--black);\r\n    font-family: var(--font-reg);\r\n    font-size: small;\r\n    background-color: transparent;\r\n    border: 0;\r\n    padding-block: 2px;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    padding-inline: 8px;\r\n}\r\n.Button:active {\r\n    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;\r\n}\r\n.Button:disabled {\r\n    cursor: default;\r\n    color: var(--grey-300);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Dropdown {
    position: absolute;
    width: 150px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.DropdownItem {
    pointer-events: all;
    cursor: pointer;
    color: var(--black);
    padding-left: 4px;
    width: calc(100% - 5.5px);
    margin-block: 1px;
    text-align: start;
}

.DropdownItem:hover {
    background-color: var(--blue-200);
    color: var(--white);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Dropdown/index.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;AACvB","sourcesContent":[".Dropdown {\r\n    position: absolute;\r\n    width: 150px;\r\n    z-index: 1000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.DropdownItem {\r\n    pointer-events: all;\r\n    cursor: pointer;\r\n    color: var(--black);\r\n    padding-left: 4px;\r\n    width: calc(100% - 5.5px);\r\n    margin-block: 1px;\r\n    text-align: start;\r\n}\r\n\r\n.DropdownItem:hover {\r\n    background-color: var(--blue-200);\r\n    color: var(--white);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Icon {
    width: 16px;
    height: 16px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Icon/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[".Icon {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.InfoBox {
    margin: 8px;
    padding: 4px;
    background-color: var(--yellow-100);
    border: var(--yellow-200) 1px solid;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/InfoBox/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,mCAAmC;AACvC","sourcesContent":[".InfoBox {\r\n    margin: 8px;\r\n    padding: 4px;\r\n    background-color: var(--yellow-100);\r\n    border: var(--yellow-200) 1px solid;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Input {
    color: var(--black);
    font-family: var(--font-fat);
    border: 0;
    padding-inline: 4px;
    padding-block: 2px;
    background-color: var(--white);
    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset,
        calc(var(--border-radiusn) * 2) calc(var(--border-radiusn) * 2) 0px var(--grey-200) inset,
        calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0px var(--shadow-300) inset;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Link/index.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4BAA4B;IAC5B,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,8BAA8B;IAC9B;;;iGAG6F;AACjG","sourcesContent":[".Input {\r\n    color: var(--black);\r\n    font-family: var(--font-fat);\r\n    border: 0;\r\n    padding-inline: 4px;\r\n    padding-block: 2px;\r\n    background-color: var(--white);\r\n    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset,\r\n        calc(var(--border-radiusn) * 2) calc(var(--border-radiusn) * 2) 0px var(--grey-200) inset,\r\n        calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0px var(--shadow-300) inset;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 354:
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
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

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 540:
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

/***/ 56:
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

/***/ 825:
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 113:
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/WindowContent/index.css
var WindowContent = __webpack_require__(32);
;// CONCATENATED MODULE: ./webindows/components/WindowContent/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(WindowContent/* default */.A, options);




       /* harmony default export */ const components_WindowContent = (WindowContent/* default */.A && WindowContent/* default */.A.locals ? WindowContent/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/WindowContent/index.js
/* provided dependency */ var createElement = __webpack_require__(153)["n"];

function WindowContent_WindowContent(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return createElement("div", {
    className: "WindowContent"
  }, children);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/ViewContainer/index.css
var ViewContainer = __webpack_require__(523);
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/index.css

      
      
      
      
      
      
      
      
      

var ViewContainer_options = {};

ViewContainer_options.styleTagTransform = (styleTagTransform_default());
ViewContainer_options.setAttributes = (setAttributesWithoutAttributes_default());

      ViewContainer_options.insert = insertBySelector_default().bind(null, "head");
    
ViewContainer_options.domAPI = (styleDomAPI_default());
ViewContainer_options.insertStyleElement = (insertStyleElement_default());

var ViewContainer_update = injectStylesIntoStyleTag_default()(ViewContainer/* default */.A, ViewContainer_options);




       /* harmony default export */ const components_ViewContainer = (ViewContainer/* default */.A && ViewContainer/* default */.A.locals ? ViewContainer/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Icon/index.css
var Icon = __webpack_require__(414);
;// CONCATENATED MODULE: ./webindows/components/common/Icon/index.css

      
      
      
      
      
      
      
      
      

var Icon_options = {};

Icon_options.styleTagTransform = (styleTagTransform_default());
Icon_options.setAttributes = (setAttributesWithoutAttributes_default());

      Icon_options.insert = insertBySelector_default().bind(null, "head");
    
Icon_options.domAPI = (styleDomAPI_default());
Icon_options.insertStyleElement = (insertStyleElement_default());

var Icon_update = injectStylesIntoStyleTag_default()(Icon/* default */.A, Icon_options);




       /* harmony default export */ const common_Icon = (Icon/* default */.A && Icon/* default */.A.locals ? Icon/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Icon/index.js
/* provided dependency */ var Icon_createElement = __webpack_require__(153)["n"];

function Icon_Icon(props) {
  return Icon_createElement("img", {
    id: props.id,
    src: props.src,
    className: "Icon" + (props.className ? " " + props.className : ""),
    style: {
      width: props.width,
      height: props.height,
      filter: props.isGrey ? "grayscale(100%)" : "none"
    },
    onClick: props.onClick
  });
}
;// CONCATENATED MODULE: ./webindows/connect/constants.js
var WBND_REQ = "http://localhost:3000";
var ROOT_PATH = WBND_REQ + "/files/get/folder";
var FILE_PATH = WBND_REQ + "/files/get/file";
var PUBLIC_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/";
var ASSETS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/";
var ICONS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/Icons/";
var FILES_REQ = WBND_REQ + "/files/get/files/";

;// CONCATENATED MODULE: ./webindows/components/ViewContainer/CloseBar/index.js
/* provided dependency */ var CloseBar_createElement = __webpack_require__(153)["n"];


function CloseBar(props) {
  return CloseBar_createElement("div", {
    className: "CloseBar"
  }, CloseBar_createElement("div", {
    className: "winCl-HardOutsetShadow winCl-BGColor",
    style: {
      width: "100%",
      height: "16px"
    }
  }), CloseBar_createElement(Icon_Icon, {
    className: "winCl-HardOutsetShadow winCl-BGColor",
    src: ASSETS_PATH + "/Img_Button_Close.PNG",
    onClick: props.onClick
  }));
}
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/removeView.js
function removeView(id) {
  var view = document.getElementById(id);
  var viewWidth = parseInt(window.getComputedStyle(view).getPropertyValue("width"));
  var subViews = document.getElementsByClassName("View");
  var prevView;
  var resizeView;
  for (var i = 0; i < subViews.length; i++) {
    if (subViews[i].id === id) {
      prevView = subViews[i - 1];
      resizeView = document.getElementsByClassName("ViewResizeHandleLeft")[i - 1];
      break;
    }
  }
  var prevViewWidth = parseInt(window.getComputedStyle(prevView).getPropertyValue("width"));
  prevView.style.width = prevViewWidth + viewWidth + 12 + "px";
  if (resizeView) resizeView.remove();
  if (view) view.remove();
}
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/View/index.js
/* provided dependency */ var View_createElement = __webpack_require__(153)["n"];


function View(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return View_createElement("div", {
    id: props.id,
    className: "winCl-HardInsetShadow View",
    style: {
      width: props.width
    },
    onContextmenu: function onContextmenu(e) {
      return e.preventDefault();
    }
  }, props.isClosable && View_createElement(CloseBar, {
    onClick: function onClick() {
      return removeView(props.id);
    }
  }), children);
}
;// CONCATENATED MODULE: ./webindows/utils/math.js
/**
 * Subtracts a value from another until limit.
 * If limit is met, then subtract from value the rest.
 * Default limit is 150
 * @param {number} value - The value to subtract.
 * @param {number} from - The value to subtract from.
 * @param {number} [limit=150] - The limit to subtract from.
 * @return {Object} An object with properties x and y representing the subtracted values.
 */
function subtractFrom(value, from) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
  var remainingFrom = from - value;
  var subtractedValue = value;
  if (remainingFrom < limit) {
    var toSubtract = value - Math.abs(limit - from);
    remainingFrom = limit;
    subtractedValue = value - toSubtract;
  }
  return {
    x: subtractedValue,
    y: remainingFrom
  };
}

/**
 * Clamps a value between an upper and lower bound.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @return {number} The clamped value.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Subtracts an equal share from each element in the array based on the total value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to subtract from.
 * @return {Array} The modified array after subtracting the equal share from each element.
 */
function subtractEqualShare(value, array) {
  if (array.length == 0) return array;
  var share = value / array.length;
  for (var i = array.length - 1; i >= 0; i--) {
    var newValue = array[i] - share;
    array[i] = Math.max(newValue, 150);
    value -= array[i] - newValue;
  }
  return array;
}

/**
 * Calculates if two numbers are nearly equal within a specified epsilon value.
 *
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * @param {number} [epsilon=1] - The acceptable difference between the numbers.
 * @return {boolean} True if the numbers are nearly equal, false otherwise.
 */
function nearlyEqual(num1, num2) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.abs(num1 - num2) < epsilon;
}

/**
 * Adds an equal share to each element in the array based on the value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to add to.
 * @return {Array} The modified array.
 */
function spreadValueAcrossArray(value, arr) {
  var length = arr.length;
  if (length === 0) return arr;
  var equalValue = value / length;
  var spreadArray = arr.map(function (num) {
    return num + equalValue;
  });
  return spreadArray;
}

;// CONCATENATED MODULE: ./webindows/components/ViewContainer/addView.js
/* provided dependency */ var addView_createElement = __webpack_require__(153)["n"];



/**
 * Add a new view to the view container.
 *
 * @param {number} initWidth - The initial width of the new view.
 * @param {HTMLElement} content - The content to be displayed in the new view.
 * @param {boolean} isClosable - Include a button to close the view.
 */
function addView(initWidth, content) {
  var isClosable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var subWindowWrapper = document.getElementsByClassName("ViewContainer")[0];
  var subWindows = document.getElementsByClassName("View");
  var resizeHandleLeft = addView_createElement("div", {
    className: "ViewResizeHandleLeft"
  });
  var windowWidth = document.body.clientWidth;
  var desiredWidth = parseInt(initWidth) * windowWidth / 100;
  if (subWindows.length > 1) {
    var lastWindow = subWindows[subWindows.length - 1];
    var lastWindowWidth = parseInt(window.getComputedStyle(lastWindow).getPropertyValue("width"));
    if (lastWindowWidth < 175) return;
    var _subtractFrom = subtractFrom(desiredWidth, lastWindowWidth),
      x = _subtractFrom.x,
      y = _subtractFrom.y;
    desiredWidth = x;
    lastWindow.style.width = y - 4 + "px";
  }
  var id = "id_View_".concat(subWindows.length + 1);
  var newSubWindow = addView_createElement(View, {
    id: id,
    width: desiredWidth - 8 + "px",
    isClosable: isClosable
  });
  if (subWindows.length > 0) {
    subWindowWrapper.append(resizeHandleLeft);
  }
  newSubWindow.append(content);
  subWindowWrapper.append(newSubWindow);
  resizeHandleLeft.addEventListener("mousedown", function () {
    var subViews = document.getElementsByClassName("View");
    var subWindowCurrent = document.getElementById("id_View_".concat(subWindows.length - 1));
    var subWindowNext = document.getElementById("id_View_".concat(subWindows.length));
    for (var i = 0; i < subViews.length; i++) {
      if (subViews[i].id === id) {
        subWindowCurrent = subViews[i - 1];
        subWindowNext = subViews[i];
        break;
      }
    }
    var savedWidthCurrent = parseInt(window.getComputedStyle(subWindowCurrent).getPropertyValue("width"));
    var savedWidthNext = parseInt(window.getComputedStyle(subWindowNext).getPropertyValue("width"));
    var handle = function handle(e) {
      var widthDiff = e.clientX - (subWindowCurrent.offsetLeft + savedWidthCurrent);
      var newCurrentWidth = clamp(savedWidthCurrent + widthDiff, 50, savedWidthCurrent + savedWidthNext - 50);
      var newNextWidth = clamp(savedWidthNext - widthDiff, 50, savedWidthCurrent + savedWidthNext - 50);
      subWindowCurrent.style.width = newCurrentWidth + "px";
      subWindowNext.style.width = newNextWidth + "px";
    };
    document.addEventListener("mousemove", handle);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", handle);
    });
  });
}
;// CONCATENATED MODULE: ./webindows/connect/WebindowsMessageReceiver.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var WebindowsMessageReceiver = /*#__PURE__*/function () {
  function WebindowsMessageReceiver() {
    _classCallCheck(this, WebindowsMessageReceiver);
  }
  return _createClass(WebindowsMessageReceiver, [{
    key: "onWindowResize",
    value: function onWindowResize(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowResizeStart",
    value: function onWindowResizeStart(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize_start") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowResizeEnd",
    value: function onWindowResizeEnd(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize_end") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowBeforeExpand",
    value: function onWindowBeforeExpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_before_expand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowExpand",
    value: function onWindowExpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_expand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowBeforeUnexpand",
    value: function onWindowBeforeUnexpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_before_unexpand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowUnexpand",
    value: function onWindowUnexpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_unexpand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowOpen",
    value: function onWindowOpen(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_open") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowClose",
    value: function onWindowClose(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_close") {
          callback(e.data);
        }
      });
    }
  }]);
}();
var windowEvents = new WebindowsMessageReceiver();
/* harmony default export */ const connect_WebindowsMessageReceiver = (windowEvents);
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/index.js
/* provided dependency */ var ViewContainer_createElement = __webpack_require__(153)["n"];





function ViewContainer_ViewContainer(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ViewContainer_createElement("div", {
    className: "ViewContainer"
  }, children);
}
var windowWidthStart = 0;
var savedWidths = [];
connect_WebindowsMessageReceiver.onWindowBeforeExpand(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowBeforeUnexpand(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowResizeStart(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowResizeEnd(function () {
  clearViewWidths();
});
connect_WebindowsMessageReceiver.onWindowResize(function (data) {
  adjustViewSizes(data);
});
connect_WebindowsMessageReceiver.onWindowExpand(function (data) {
  adjustViewSizes(data);
  clearViewWidths();
});
connect_WebindowsMessageReceiver.onWindowUnexpand(function (data) {
  adjustViewSizes(data);
  clearViewWidths();
});
function clearViewWidths() {
  windowWidthStart = 0;
  savedWidths = [];
}
function saveViewWidths(data) {
  windowWidthStart = data.windowSize.width;
  var subViews = document.getElementsByClassName("View");
  for (var i = 0; i < subViews.length; i++) {
    savedWidths.push(parseInt(window.getComputedStyle(subViews[i]).getPropertyValue("width")));
  }
}
function adjustViewSizes(data) {
  var windowWidth = data.windowSize.width;
  var subViews = document.getElementsByClassName("View");
  var newWidths = [];
  for (var i = 0; i < subViews.length; i++) {
    var currentWidth = savedWidths[i];
    var currentWidthPrec = currentWidth / windowWidthStart;
    var newWidth = windowWidth * currentWidthPrec;
    newWidths.push(newWidth);
  }
  var diff = windowWidth - newWidths.reduce(function (a, b) {
    return a + b;
  }, 0);
  var adjustedWidths = spreadValueAcrossArray(diff, newWidths);
  for (var _i = 0; _i < subViews.length; _i++) {
    subViews[_i].style.width = adjustedWidths[_i] - 8 + "px";
    if (_i == subViews.length - 1) subViews[_i].style.width = adjustedWidths[_i] - 4 * (_i + 1) + "px";
  }
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/AppOverview/index.css
var AppOverview = __webpack_require__(363);
;// CONCATENATED MODULE: ./webindows/components/AppOverview/index.css

      
      
      
      
      
      
      
      
      

var AppOverview_options = {};

AppOverview_options.styleTagTransform = (styleTagTransform_default());
AppOverview_options.setAttributes = (setAttributesWithoutAttributes_default());

      AppOverview_options.insert = insertBySelector_default().bind(null, "head");
    
AppOverview_options.domAPI = (styleDomAPI_default());
AppOverview_options.insertStyleElement = (insertStyleElement_default());

var AppOverview_update = injectStylesIntoStyleTag_default()(AppOverview/* default */.A, AppOverview_options);




       /* harmony default export */ const components_AppOverview = (AppOverview/* default */.A && AppOverview/* default */.A.locals ? AppOverview/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewList/index.js
/* provided dependency */ var AppOverviewList_createElement = __webpack_require__(153)["n"];
function AppOverviewList(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return AppOverviewList_createElement("div", {
    className: "AppOverview__SeeAlso"
  }, AppOverviewList_createElement("p", {
    style: {
      width: "150px"
    }
  }, props.text), AppOverviewList_createElement("ul", {
    className: "AppOverview__SeeAlsoList"
  }, children));
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewImage/index.js
/* provided dependency */ var AppOverviewImage_createElement = __webpack_require__(153)["n"];
function AppOverviewImage(props) {
  return AppOverviewImage_createElement("img", {
    src: props.src,
    style: {
      width: "250px"
    }
  });
}

//ASSETS_PATH + "FileExplorer.png"
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewDescription/index.js
/* provided dependency */ var AppOverviewDescription_createElement = __webpack_require__(153)["n"];
function AppOverviewDescription(props) {
  return AppOverviewDescription_createElement("p", {
    style: {
      margin: "14px",
      minWidth: "150px"
    }
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Link/index.css
var Link = __webpack_require__(53);
;// CONCATENATED MODULE: ./webindows/components/common/Link/index.css

      
      
      
      
      
      
      
      
      

var Link_options = {};

Link_options.styleTagTransform = (styleTagTransform_default());
Link_options.setAttributes = (setAttributesWithoutAttributes_default());

      Link_options.insert = insertBySelector_default().bind(null, "head");
    
Link_options.domAPI = (styleDomAPI_default());
Link_options.insertStyleElement = (insertStyleElement_default());

var Link_update = injectStylesIntoStyleTag_default()(Link/* default */.A, Link_options);




       /* harmony default export */ const common_Link = (Link/* default */.A && Link/* default */.A.locals ? Link/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Link/index.js
/* provided dependency */ var Link_createElement = __webpack_require__(153)["n"];

function Link_Link(props) {
  return Link_createElement("a", {
    id: props.id,
    className: "Link",
    href: props.href,
    onClick: props.onClick
  }, props.text);
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewList/AppOverviewLink/index.js
/* provided dependency */ var AppOverviewLink_createElement = __webpack_require__(153)["n"];

function AppOverviewLink(props) {
  return AppOverviewLink_createElement("li", {
    className: "AppOverview__SeeAlsoListItem",
    onClick: props.onClick
  }, AppOverviewLink_createElement(Link_Link, {
    href: props.to,
    text: props.text,
    onClick: props.onClick
  }));
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/index.js
/* provided dependency */ var AppOverview_createElement = __webpack_require__(153)["n"];





function AppOverview_AppOverview(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return AppOverview_createElement("div", {
    className: "AppOverview"
  }, children);
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/InfoBox/index.css
var InfoBox = __webpack_require__(580);
;// CONCATENATED MODULE: ./webindows/components/common/InfoBox/index.css

      
      
      
      
      
      
      
      
      

var InfoBox_options = {};

InfoBox_options.styleTagTransform = (styleTagTransform_default());
InfoBox_options.setAttributes = (setAttributesWithoutAttributes_default());

      InfoBox_options.insert = insertBySelector_default().bind(null, "head");
    
InfoBox_options.domAPI = (styleDomAPI_default());
InfoBox_options.insertStyleElement = (insertStyleElement_default());

var InfoBox_update = injectStylesIntoStyleTag_default()(InfoBox/* default */.A, InfoBox_options);




       /* harmony default export */ const common_InfoBox = (InfoBox/* default */.A && InfoBox/* default */.A.locals ? InfoBox/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/InfoBox/index.js
/* provided dependency */ var InfoBox_createElement = __webpack_require__(153)["n"];

function InfoBox_InfoBox(props) {
  return InfoBox_createElement("div", {
    id: props.id,
    className: "InfoBox",
    style: {
      width: props.width
    }
  }, InfoBox_createElement("p", null, props.text));
}
;// CONCATENATED MODULE: ./src/AppViews/WebindowsAppOverview.js
/* provided dependency */ var WebindowsAppOverview_createElement = __webpack_require__(153)["n"];



function WebindowsAppOverview() {
  return WebindowsAppOverview_createElement(AppOverview_AppOverview, null, WebindowsAppOverview_createElement(AppOverviewImage, {
    src: "".concat(ASSETS_PATH, "/WebindowsApp.png")
  }), WebindowsAppOverview_createElement(AppOverviewDescription, {
    text: "This is a template for a Webindows app."
  }), WebindowsAppOverview_createElement(InfoBox_InfoBox, {
    text: "Click with RMB to create extra views!",
    width: "250px"
  }), WebindowsAppOverview_createElement(AppOverviewList, {
    text: "You can do:"
  }, WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "this"
  }), WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "that"
  }), WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "everything"
  })));
}
;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/ButtonBar/index.js
/* provided dependency */ var ButtonBar_createElement = __webpack_require__(153)["n"];
function ButtonBar(props) {
  var _props$gap;
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ButtonBar_createElement("div", {
    className: "ButtonBar",
    style: {
      gap: (_props$gap = props === null || props === void 0 ? void 0 : props.gap) !== null && _props$gap !== void 0 ? _props$gap : "4px"
    }
  }, ButtonBar_createElement("div", {
    className: "winCl-DividerBigVertical",
    style: "height: 22px; margin-block: 2px"
  }), children);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/ButtonBarContainer/index.css
var ButtonBarContainer = __webpack_require__(965);
;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/index.css

      
      
      
      
      
      
      
      
      

var ButtonBarContainer_options = {};

ButtonBarContainer_options.styleTagTransform = (styleTagTransform_default());
ButtonBarContainer_options.setAttributes = (setAttributesWithoutAttributes_default());

      ButtonBarContainer_options.insert = insertBySelector_default().bind(null, "head");
    
ButtonBarContainer_options.domAPI = (styleDomAPI_default());
ButtonBarContainer_options.insertStyleElement = (insertStyleElement_default());

var ButtonBarContainer_update = injectStylesIntoStyleTag_default()(ButtonBarContainer/* default */.A, ButtonBarContainer_options);




       /* harmony default export */ const components_ButtonBarContainer = (ButtonBarContainer/* default */.A && ButtonBarContainer/* default */.A.locals ? ButtonBarContainer/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/index.js
/* provided dependency */ var ButtonBarContainer_createElement = __webpack_require__(153)["n"];


function ButtonBarContainer_ButtonBarContainer(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ButtonBarContainer_createElement("div", {
    className: "winCl-HardInsetShadow"
  }, children.map(function (child) {
    return ButtonBarContainer_createElement("div", null, child);
  }));
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Button/index.css
var Button = __webpack_require__(349);
;// CONCATENATED MODULE: ./webindows/components/common/Button/index.css

      
      
      
      
      
      
      
      
      

var Button_options = {};

Button_options.styleTagTransform = (styleTagTransform_default());
Button_options.setAttributes = (setAttributesWithoutAttributes_default());

      Button_options.insert = insertBySelector_default().bind(null, "head");
    
Button_options.domAPI = (styleDomAPI_default());
Button_options.insertStyleElement = (insertStyleElement_default());

var Button_update = injectStylesIntoStyleTag_default()(Button/* default */.A, Button_options);




       /* harmony default export */ const common_Button = (Button/* default */.A && Button/* default */.A.locals ? Button/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Button/index.js
/* provided dependency */ var Button_createElement = __webpack_require__(153)["n"];

function Button_Button(props) {
  return Button_createElement("button", {
    id: props.id,
    className: "Button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.text);
}
;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/DropdownItem/index.js
/* provided dependency */ var DropdownItem_createElement = __webpack_require__(153)["n"];
function DropdownItem(props) {
  return DropdownItem_createElement("div", {
    className: "DropdownItem",
    onClick: function onClick(e) {
      props.onClick(e);
      document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
      document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
      document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
      document.getElementsByClassName("Dropdown")[0].remove();
    }
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Dropdown/index.css
var Dropdown = __webpack_require__(166);
;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/index.css

      
      
      
      
      
      
      
      
      

var Dropdown_options = {};

Dropdown_options.styleTagTransform = (styleTagTransform_default());
Dropdown_options.setAttributes = (setAttributesWithoutAttributes_default());

      Dropdown_options.insert = insertBySelector_default().bind(null, "head");
    
Dropdown_options.domAPI = (styleDomAPI_default());
Dropdown_options.insertStyleElement = (insertStyleElement_default());

var Dropdown_update = injectStylesIntoStyleTag_default()(Dropdown/* default */.A, Dropdown_options);




       /* harmony default export */ const common_Dropdown = (Dropdown/* default */.A && Dropdown/* default */.A.locals ? Dropdown/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/index.js
/* provided dependency */ var Dropdown_createElement = __webpack_require__(153)["n"];

function createDropdown(anchorId, id, content) {
  var anchorElem = document.getElementById(anchorId);
  document.addEventListener("mouseup", function (e) {
    if (e.target.classList.contains("DropdownItem")) return;
    if (!document.getElementsByClassName("Dropdown")[0]) return;
    document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
    document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
    document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
    document.getElementsByClassName("Dropdown")[0].remove();
  });
  var elem = Dropdown_createElement("div", {
    id: id,
    className: "Dropdown winCl-BGColor winCl-HardOutsetShadow"
  }, content);
  var anchorHeight = parseInt(window.getComputedStyle(anchorElem).getPropertyValue("height"));
  elem.style.top = anchorElem.offsetTop + anchorHeight + "px";
  elem.style.left = anchorElem.offsetLeft + "px";
  anchorElem.append(elem);
  anchorElem.disabled = true;
  anchorElem.style.color = "var(--black)";
  anchorElem.style.border = "2px dotted var(--black)";
  anchorElem.style.pointerEvents = "none";
}
;// CONCATENATED MODULE: ./src/AppViews/NavigationBar.js
/* provided dependency */ var NavigationBar_createElement = __webpack_require__(153)["n"];




function NavigationBar() {
  return NavigationBar_createElement(ButtonBarContainer_ButtonBarContainer, null, NavigationBar_createElement(ButtonBar, null, NavigationBar_createElement(Button_Button, {
    text: "File",
    disabled: false,
    onClick: function onClick() {
      createDropdown("App_FileBtn", "App_FileDD", [NavigationBar_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), NavigationBar_createElement(DropdownItem, {
        text: "Open File",
        onClick: function onClick() {
          console.log("Open File");
        }
      })]);
    }
  }), NavigationBar_createElement(Button_Button, {
    text: "Edit",
    disabled: false,
    onClick: function onClick() {
      createDropdown("App_EditBtn", "App_EditDD", [NavigationBar_createElement(DropdownItem, {
        text: "Undo",
        onClick: function onClick() {
          console.log("Undo");
        }
      }), NavigationBar_createElement(DropdownItem, {
        text: "Redo",
        onClick: function onClick() {
          console.log("Redo");
        }
      })]);
    }
  }), NavigationBar_createElement(Button_Button, {
    text: "View",
    disabled: true
  }), NavigationBar_createElement(Button_Button, {
    text: "Extra",
    disabled: true
  }), NavigationBar_createElement(Button_Button, {
    text: "?",
    disabled: true
  })));
}
;// CONCATENATED MODULE: ./src/AppViews/MainAppView.js
/* provided dependency */ var MainAppView_createElement = __webpack_require__(153)["n"];


function MainAppView() {
  var count = 0;
  return MainAppView_createElement("div", null, MainAppView_createElement("h1", null, "Main App View"), MainAppView_createElement("p", null, "This is the main app view!"), MainAppView_createElement(InfoBox_InfoBox, {
    id: "count",
    text: count,
    width: "100px"
  }), MainAppView_createElement(Button_Button, {
    text: "Count up!",
    onClick: function onClick() {
      document.getElementById("count").innerHTML = ++count;
    }
  }), MainAppView_createElement(Button_Button, {
    text: "Count down!",
    onClick: function onClick() {
      document.getElementById("count").innerHTML = --count;
    }
  }));
}
;// CONCATENATED MODULE: ./src/AppViews/AnotherView.js
/* provided dependency */ var AnotherView_createElement = __webpack_require__(153)["n"];

function AnotherView_MainAppView() {
  return AnotherView_createElement("div", null, AnotherView_createElement("h1", null, "This is a temporary view!"), AnotherView_createElement("p", null, "You can close it."), AnotherView_createElement("img", {
    src: ASSETS_PATH + "/200w.gif",
    style: {
      width: "250px",
      display: "block",
      margin: "auto"
    }
  }));
}
;// CONCATENATED MODULE: ./src/index.js
/* provided dependency */ var src_createElement = __webpack_require__(153)["n"];






function init() {
  var root = document.getElementsByTagName("body")[0];
  root.append(src_createElement(WindowContent_WindowContent, null, src_createElement(NavigationBar, null), src_createElement(ViewContainer_ViewContainer, null)));
  addView("25%", src_createElement(WebindowsAppOverview, null), false);
  addView("75%", src_createElement(MainAppView, null), false);
}
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  addView("25%", src_createElement(AnotherView_MainAppView, null));
});
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRTtNQUFFZ0IsS0FBSyxFQUFFLE9BQU87TUFBRWdLLE9BQU8sRUFBRSxPQUFPO01BQUVwQyxNQUFNLEVBQUU7SUFBTztFQUFFLENBQy9ELENBQ0EsQ0FBQztBQUVkOzs7QUNiZ0U7QUFDTjtBQUNTO0FBQ2Q7QUFDSjtBQUNBO0FBRWpELFNBQVNzQyxJQUFJQSxDQUFBLEVBQUc7RUFDWixJQUFNQyxJQUFJLEdBQUd0TSxRQUFRLENBQUN1TSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFckRELElBQUksQ0FBQ3pGLE1BQU0sQ0FDUHpILGlCQUFBLENBQUMwQywyQkFBYSxRQUNWMUMsaUJBQUEsQ0FBQ3lNLGFBQWEsTUFBRSxDQUFDLEVBQ2pCek0saUJBQUEsQ0FBQ3NKLDJCQUFhLE1BQUUsQ0FDTCxDQUNuQixDQUFDO0VBRUQzQyxPQUFPLENBQUMsS0FBSyxFQUFFM0csaUJBQUEsQ0FBQ21MLG9CQUFvQixNQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDL0N4RSxPQUFPLENBQUMsS0FBSyxFQUFFM0csaUJBQUEsQ0FBQzRNLFdBQVcsTUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQzFDO0FBRUFoTSxRQUFRLENBQUNZLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxVQUFDb0QsQ0FBQyxFQUFLO0VBQzVDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCOEIsT0FBTyxDQUFDLEtBQUssRUFBRTNHLGlCQUFBLENBQUNnTix1QkFBVyxNQUFFLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRkMsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9qc3guanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0Ryb3Bkb3duL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzcz9kZjAxIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmNzcz80M2U1Iiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3M/NTYxMyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb25uZWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9DbG9zZUJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9yZW1vdmVWaWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy91dGlscy9tYXRoLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2FkZFZpZXcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb25uZWN0L1dlYmluZG93c01lc3NhZ2VSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguY3NzP2E3MjEiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3TGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzP2VkNDAiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0xpc3QvQXBwT3ZlcnZpZXdMaW5rL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzPzRmOGMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvQXBwVmlld3MvV2ViaW5kb3dzQXBwT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9CdXR0b25CYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3M/NTNmYyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcz82M2ZlIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRHJvcGRvd24vRHJvcGRvd25JdGVtL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRHJvcGRvd24vaW5kZXguY3NzPzkwNTgiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9Ecm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9NYWluQXBwVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL0Fub3RoZXJWaWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBhcHBlbmRDaGlsZChlbGVtZW50LCBjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgcmV0dXJuIGNoaWxkLmZvckVhY2goKG5lc3RlZENoaWxkKSA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XHJcbiAgICBpZiAoIWNoaWxkKSByZXR1cm47XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQ/Lm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGQgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BcHBPdmVydmlld19fU2VlQWxzbyB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHBPdmVydmlld19fU2VlQWxzbyB7XFxyXFxuICAgIG1hcmdpbjogMTRweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25CYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsU0FBUztJQUNUOzs7c0dBR2tHO0FBQ3RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25CYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlZpZXdDb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uVmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5DbG9zZUJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVmlld0NvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNsb3NlQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuV2luZG93Q29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuV2luZG93Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcclxufVxyXG4uQnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbn1cclxuLkJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOzZFQUN5RTtBQUM3RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XFxyXFxufVxcclxcbi5CdXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b246ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5Ecm9wZG93bkl0ZW0ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1LjVweCk7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDFweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4uRHJvcGRvd25JdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMjAwKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRHJvcGRvd24vaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuRHJvcGRvd24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uRHJvcGRvd25JdGVtIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUuNXB4KTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAxcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uRHJvcGRvd25JdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS0yMDApO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkljb24ge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JbmZvQm94IHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTEwMCk7XHJcbiAgICBib3JkZXI6IHZhcigtLXllbGxvdy0yMDApIDFweCBzb2xpZDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5mb0JveCB7XFxyXFxuICAgIG1hcmdpbjogOHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0xMDApO1xcclxcbiAgICBib3JkZXI6IHZhcigtLXllbGxvdy0yMDApIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5wdXQge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhdCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSAwcHggdmFyKC0tZ3JleS0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUI7OztpR0FHNkY7QUFDakdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmF0KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXFxyXFxuICAgICAgICBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXNuKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgMHB4IHZhcigtLWdyZXktMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpbmRvd0NvbnRlbnQocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJXaW5kb3dDb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgc3JjPXtwcm9wcy5zcmN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJJY29uXCIgKyAocHJvcHMuY2xhc3NOYW1lID8gXCIgXCIgKyBwcm9wcy5jbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5pc0dyZXkgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuIiwiY29uc3QgV0JORF9SRVEgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5jb25zdCBST09UX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9mb2xkZXJcIjtcclxuY29uc3QgRklMRV9QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZmlsZVwiO1xyXG5jb25zdCBQVUJMSUNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9cIjtcclxuY29uc3QgQVNTRVRTX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvQXNzZXRzL1wiO1xyXG5jb25zdCBJQ09OU19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL0Fzc2V0cy9JY29ucy9cIjtcclxuY29uc3QgRklMRVNfUkVRID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZmlsZXMvXCI7XHJcblxyXG5leHBvcnQgeyBQVUJMSUNfUEFUSCwgQVNTRVRTX1BBVEgsIElDT05TX1BBVEgsIEZJTEVfUEFUSCwgUk9PVF9QQVRILCBGSUxFU19SRVEgfTtcclxuIiwiaW1wb3J0IEljb24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvblwiO1xyXG5pbXBvcnQgeyBBU1NFVFNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG9zZUJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNsb3NlQmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRPdXRzZXRTaGFkb3cgd2luQ2wtQkdDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZE91dHNldFNoYWRvdyB3aW5DbC1CR0NvbG9yXCJcclxuICAgICAgICAgICAgICAgIHNyYz17QVNTRVRTX1BBVEggKyBcIi9JbWdfQnV0dG9uX0Nsb3NlLlBOR1wifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlVmlldyhpZCkge1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IHZpZXdXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHZpZXcpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgbGV0IHByZXZWaWV3O1xyXG4gICAgbGV0IHJlc2l6ZVZpZXc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN1YlZpZXdzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBwcmV2VmlldyA9IHN1YlZpZXdzW2kgLSAxXTtcclxuICAgICAgICAgICAgcmVzaXplVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYFZpZXdSZXNpemVIYW5kbGVMZWZ0YClbaSAtIDFdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2Vmlld1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUocHJldlZpZXcpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICBwcmV2Vmlldy5zdHlsZS53aWR0aCA9IHByZXZWaWV3V2lkdGggKyB2aWV3V2lkdGggKyAxMiArIFwicHhcIjtcclxuXHJcbiAgICBpZiAocmVzaXplVmlldykgcmVzaXplVmlldy5yZW1vdmUoKTtcclxuICAgIGlmICh2aWV3KSB2aWV3LnJlbW92ZSgpO1xyXG59XHJcbiIsImltcG9ydCBDbG9zZUJhciBmcm9tIFwiLi4vQ2xvc2VCYXJcIjtcclxuaW1wb3J0IHJlbW92ZVZpZXcgZnJvbSBcIi4uL3JlbW92ZVZpZXdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3cgVmlld1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy53aWR0aCB9fVxyXG4gICAgICAgICAgICBvbkNvbnRleHRtZW51PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmlzQ2xvc2FibGUgJiYgPENsb3NlQmFyIG9uQ2xpY2s9eygpID0+IHJlbW92ZVZpZXcocHJvcHMuaWQpfSAvPn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvKipcclxuICogU3VidHJhY3RzIGEgdmFsdWUgZnJvbSBhbm90aGVyIHVudGlsIGxpbWl0LlxyXG4gKiBJZiBsaW1pdCBpcyBtZXQsIHRoZW4gc3VidHJhY3QgZnJvbSB2YWx1ZSB0aGUgcmVzdC5cclxuICogRGVmYXVsdCBsaW1pdCBpcyAxNTBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHN1YnRyYWN0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbSAtIFRoZSB2YWx1ZSB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0PTE1MF0gLSBUaGUgbGltaXQgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHggYW5kIHkgcmVwcmVzZW50aW5nIHRoZSBzdWJ0cmFjdGVkIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIHN1YnRyYWN0RnJvbSh2YWx1ZSwgZnJvbSwgbGltaXQgPSAxNTApIHtcclxuICAgIGxldCByZW1haW5pbmdGcm9tID0gZnJvbSAtIHZhbHVlO1xyXG4gICAgbGV0IHN1YnRyYWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmIChyZW1haW5pbmdGcm9tIDwgbGltaXQpIHtcclxuICAgICAgICBjb25zdCB0b1N1YnRyYWN0ID0gdmFsdWUgLSBNYXRoLmFicyhsaW1pdCAtIGZyb20pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Zyb20gPSBsaW1pdDtcclxuICAgICAgICBzdWJ0cmFjdGVkVmFsdWUgPSB2YWx1ZSAtIHRvU3VidHJhY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgeDogc3VidHJhY3RlZFZhbHVlLCB5OiByZW1haW5pbmdGcm9tIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFtcHMgYSB2YWx1ZSBiZXR3ZWVuIGFuIHVwcGVyIGFuZCBsb3dlciBib3VuZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNsYW1wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VyIGJvdW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIHVwcGVyIGJvdW5kLlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjbGFtcGVkIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdWJ0cmFjdHMgYW4gZXF1YWwgc2hhcmUgZnJvbSBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGJhc2VkIG9uIHRoZSB0b3RhbCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHRvdGFsIHZhbHVlIHRvIHNwbGl0IGFtb25nIHRoZSBlbGVtZW50cy5cclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgb2YgdmFsdWVzIHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXkgYWZ0ZXIgc3VidHJhY3RpbmcgdGhlIGVxdWFsIHNoYXJlIGZyb20gZWFjaCBlbGVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3RFcXVhbFNoYXJlKHZhbHVlLCBhcnJheSkge1xyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gYXJyYXk7XHJcbiAgICBjb25zdCBzaGFyZSA9IHZhbHVlIC8gYXJyYXkubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhcnJheVtpXSAtIHNoYXJlO1xyXG4gICAgICAgIGFycmF5W2ldID0gTWF0aC5tYXgobmV3VmFsdWUsIDE1MCk7XHJcbiAgICAgICAgdmFsdWUgLT0gYXJyYXlbaV0gLSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgaWYgdHdvIG51bWJlcnMgYXJlIG5lYXJseSBlcXVhbCB3aXRoaW4gYSBzcGVjaWZpZWQgZXBzaWxvbiB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTEgLSBUaGUgZmlyc3QgbnVtYmVyIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0yIC0gVGhlIHNlY29uZCBudW1iZXIgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtlcHNpbG9uPTFdIC0gVGhlIGFjY2VwdGFibGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBudW1iZXJzLlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBuZWFybHkgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmZ1bmN0aW9uIG5lYXJseUVxdWFsKG51bTEsIG51bTIsIGVwc2lsb24gPSAxKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpIDwgZXBzaWxvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gZXF1YWwgc2hhcmUgdG8gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBiYXNlZCBvbiB0aGUgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB0b3RhbCB2YWx1ZSB0byBzcGxpdCBhbW9uZyB0aGUgZWxlbWVudHMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IG9mIHZhbHVlcyB0byBhZGQgdG8uXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBzcHJlYWRWYWx1ZUFjcm9zc0FycmF5KHZhbHVlLCBhcnIpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFyci5sZW5ndGg7XHJcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gYXJyO1xyXG4gICAgY29uc3QgZXF1YWxWYWx1ZSA9IHZhbHVlIC8gbGVuZ3RoO1xyXG4gICAgY29uc3Qgc3ByZWFkQXJyYXkgPSBhcnIubWFwKChudW0pID0+IG51bSArIGVxdWFsVmFsdWUpO1xyXG4gICAgcmV0dXJuIHNwcmVhZEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgeyBzdWJ0cmFjdEZyb20sIGNsYW1wLCBzdWJ0cmFjdEVxdWFsU2hhcmUsIG5lYXJseUVxdWFsLCBzcHJlYWRWYWx1ZUFjcm9zc0FycmF5IH07XHJcbiIsImltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IHsgc3VidHJhY3RGcm9tLCBjbGFtcCB9IGZyb20gXCJAd2ViaW5kb3dzL3V0aWxzL21hdGhcIjtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBuZXcgdmlldyB0byB0aGUgdmlldyBjb250YWluZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbml0V2lkdGggLSBUaGUgaW5pdGlhbCB3aWR0aCBvZiB0aGUgbmV3IHZpZXcuXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBUaGUgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5ldyB2aWV3LlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2xvc2FibGUgLSBJbmNsdWRlIGEgYnV0dG9uIHRvIGNsb3NlIHRoZSB2aWV3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVmlldyhpbml0V2lkdGgsIGNvbnRlbnQsIGlzQ2xvc2FibGUgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBzdWJXaW5kb3dXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdDb250YWluZXJcIilbMF07XHJcbiAgICBjb25zdCBzdWJXaW5kb3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBjb25zdCByZXNpemVIYW5kbGVMZWZ0ID0gPGRpdiBjbGFzc05hbWU9XCJWaWV3UmVzaXplSGFuZGxlTGVmdFwiPjwvZGl2PjtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIGxldCBkZXNpcmVkV2lkdGggPSAocGFyc2VJbnQoaW5pdFdpZHRoKSAqIHdpbmRvd1dpZHRoKSAvIDEwMDtcclxuICAgIGlmIChzdWJXaW5kb3dzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBsYXN0V2luZG93ID0gc3ViV2luZG93c1tzdWJXaW5kb3dzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaW5kb3dXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxhc3RXaW5kb3cpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICAgICAgaWYgKGxhc3RXaW5kb3dXaWR0aCA8IDE3NSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gc3VidHJhY3RGcm9tKGRlc2lyZWRXaWR0aCwgbGFzdFdpbmRvd1dpZHRoKTtcclxuICAgICAgICBkZXNpcmVkV2lkdGggPSB4O1xyXG4gICAgICAgIGxhc3RXaW5kb3cuc3R5bGUud2lkdGggPSB5IC0gNCArIFwicHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGlkID0gYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aCArIDF9YDtcclxuICAgIGNvbnN0IG5ld1N1YldpbmRvdyA9IDxWaWV3IGlkPXtpZH0gd2lkdGg9e2Rlc2lyZWRXaWR0aCAtIDggKyBcInB4XCJ9IGlzQ2xvc2FibGU9e2lzQ2xvc2FibGV9PjwvVmlldz47XHJcblxyXG4gICAgaWYgKHN1YldpbmRvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN1YldpbmRvd1dyYXBwZXIuYXBwZW5kKHJlc2l6ZUhhbmRsZUxlZnQpO1xyXG4gICAgfVxyXG4gICAgbmV3U3ViV2luZG93LmFwcGVuZChjb250ZW50KTtcclxuICAgIHN1YldpbmRvd1dyYXBwZXIuYXBwZW5kKG5ld1N1YldpbmRvdyk7XHJcblxyXG4gICAgcmVzaXplSGFuZGxlTGVmdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgICAgIGxldCBzdWJXaW5kb3dDdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aCAtIDF9YCk7XHJcbiAgICAgICAgbGV0IHN1YldpbmRvd05leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RofWApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXdzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc3ViV2luZG93Q3VycmVudCA9IHN1YlZpZXdzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIHN1YldpbmRvd05leHQgPSBzdWJWaWV3c1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNhdmVkV2lkdGhDdXJyZW50ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YldpbmRvd0N1cnJlbnQpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aE5leHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJXaW5kb3dOZXh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aERpZmYgPSBlLmNsaWVudFggLSAoc3ViV2luZG93Q3VycmVudC5vZmZzZXRMZWZ0ICsgc2F2ZWRXaWR0aEN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDdXJyZW50V2lkdGggPSBjbGFtcChcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgd2lkdGhEaWZmLFxyXG4gICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHNhdmVkV2lkdGhOZXh0IC0gNTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmV4dFdpZHRoID0gY2xhbXAoXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoTmV4dCAtIHdpZHRoRGlmZixcclxuICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyBzYXZlZFdpZHRoTmV4dCAtIDUwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN1YldpbmRvd0N1cnJlbnQuc3R5bGUud2lkdGggPSBuZXdDdXJyZW50V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHN1YldpbmRvd05leHQuc3R5bGUud2lkdGggPSBuZXdOZXh0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiY2xhc3MgV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyIHtcclxuICAgIG9uV2luZG93UmVzaXplKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfcmVzaXplXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Jlc2l6ZVN0YXJ0KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfcmVzaXplX3N0YXJ0XCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Jlc2l6ZUVuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X3Jlc2l6ZV9lbmRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93QmVmb3JlRXhwYW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfYmVmb3JlX2V4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dFeHBhbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19leHBhbmRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93QmVmb3JlVW5leHBhbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19iZWZvcmVfdW5leHBhbmRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93VW5leHBhbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd191bmV4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dPcGVuKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfb3BlblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dDbG9zZShjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2Nsb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgd2luZG93RXZlbnRzID0gbmV3IFdlYmluZG93c01lc3NhZ2VSZWNlaXZlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2luZG93RXZlbnRzO1xyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBhZGRWaWV3IGZyb20gXCIuL2FkZFZpZXdcIjtcclxuaW1wb3J0IHdpbmRvd0V2ZW50cyBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L1dlYmluZG93c01lc3NhZ2VSZWNlaXZlclwiO1xyXG5pbXBvcnQgeyBzcHJlYWRWYWx1ZUFjcm9zc0FycmF5IH0gZnJvbSBcIkB3ZWJpbmRvd3MvdXRpbHMvbWF0aFwiO1xyXG5cclxuZnVuY3Rpb24gVmlld0NvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdDb250YWluZXJcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5sZXQgd2luZG93V2lkdGhTdGFydCA9IDA7XHJcbmxldCBzYXZlZFdpZHRocyA9IFtdO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93QmVmb3JlRXhwYW5kKChkYXRhKSA9PiB7XHJcbiAgICBzYXZlVmlld1dpZHRocyhkYXRhKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dCZWZvcmVVbmV4cGFuZCgoZGF0YSkgPT4ge1xyXG4gICAgc2F2ZVZpZXdXaWR0aHMoZGF0YSk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93UmVzaXplU3RhcnQoKGRhdGEpID0+IHtcclxuICAgIHNhdmVWaWV3V2lkdGhzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd1Jlc2l6ZUVuZCgoKSA9PiB7XHJcbiAgICBjbGVhclZpZXdXaWR0aHMoKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dSZXNpemUoKGRhdGEpID0+IHtcclxuICAgIGFkanVzdFZpZXdTaXplcyhkYXRhKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dFeHBhbmQoKGRhdGEpID0+IHtcclxuICAgIGFkanVzdFZpZXdTaXplcyhkYXRhKTtcclxuICAgIGNsZWFyVmlld1dpZHRocygpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd1VuZXhwYW5kKChkYXRhKSA9PiB7XHJcbiAgICBhZGp1c3RWaWV3U2l6ZXMoZGF0YSk7XHJcbiAgICBjbGVhclZpZXdXaWR0aHMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjbGVhclZpZXdXaWR0aHMoKSB7XHJcbiAgICB3aW5kb3dXaWR0aFN0YXJ0ID0gMDtcclxuICAgIHNhdmVkV2lkdGhzID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVWaWV3V2lkdGhzKGRhdGEpIHtcclxuICAgIHdpbmRvd1dpZHRoU3RhcnQgPSBkYXRhLndpbmRvd1NpemUud2lkdGg7XHJcbiAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhdmVkV2lkdGhzLnB1c2gocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViVmlld3NbaV0pLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGp1c3RWaWV3U2l6ZXMoZGF0YSkge1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkYXRhLndpbmRvd1NpemUud2lkdGg7XHJcbiAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgY29uc3QgbmV3V2lkdGhzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gc2F2ZWRXaWR0aHNbaV07XHJcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoUHJlYyA9IGN1cnJlbnRXaWR0aCAvIHdpbmRvd1dpZHRoU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgbmV3V2lkdGggPSB3aW5kb3dXaWR0aCAqIGN1cnJlbnRXaWR0aFByZWM7XHJcbiAgICAgICAgbmV3V2lkdGhzLnB1c2gobmV3V2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpZmYgPSB3aW5kb3dXaWR0aCAtIG5ld1dpZHRocy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgIGNvbnN0IGFkanVzdGVkV2lkdGhzID0gc3ByZWFkVmFsdWVBY3Jvc3NBcnJheShkaWZmLCBuZXdXaWR0aHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdWJWaWV3c1tpXS5zdHlsZS53aWR0aCA9IGFkanVzdGVkV2lkdGhzW2ldIC0gOCArIFwicHhcIjtcclxuICAgICAgICBpZiAoaSA9PSBzdWJWaWV3cy5sZW5ndGggLSAxKSBzdWJWaWV3c1tpXS5zdHlsZS53aWR0aCA9IGFkanVzdGVkV2lkdGhzW2ldIC0gNCAqIChpICsgMSkgKyBcInB4XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFZpZXcsIGFkZFZpZXcsIFZpZXdDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdMaXN0KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvXCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX0+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0XCI+e2NoaWxkcmVufTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3SW1hZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiIH19IC8+O1xyXG59XHJcblxyXG4vL0FTU0VUU19QQVRIICsgXCJGaWxlRXhwbG9yZXIucG5nXCJcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIxNHB4XCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+e3Byb3BzLnRleHR9PC9wPjtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpbmtcIlxyXG4gICAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpbmsocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99IHRleHQ9e3Byb3BzLnRleHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGlzdCBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3RcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3SW1hZ2UgZnJvbSBcIi4vQXBwT3ZlcnZpZXdJbWFnZVwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiBmcm9tIFwiLi9BcHBPdmVydmlld0Rlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpbmsgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwT3ZlcnZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld1wiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcE92ZXJ2aWV3TGlzdCwgQXBwT3ZlcnZpZXdJbWFnZSwgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiwgQXBwT3ZlcnZpZXcsIEFwcE92ZXJ2aWV3TGluayB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JveChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwiSW5mb0JveFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy53aWR0aCB9fT5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQXBwT3ZlcnZpZXcsXHJcbiAgICBBcHBPdmVydmlld0xpbmssXHJcbiAgICBBcHBPdmVydmlld0xpc3QsXHJcbiAgICBBcHBPdmVydmlld0Rlc2NyaXB0aW9uLFxyXG4gICAgQXBwT3ZlcnZpZXdJbWFnZSxcclxufSBmcm9tIFwiQHdlYmluZG93cy9BcHBPdmVydmlld1wiO1xyXG5pbXBvcnQgeyBBU1NFVFNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJbmZvQm94IGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYmluZG93c0FwcE92ZXJ2aWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwT3ZlcnZpZXc+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0ltYWdlIHNyYz17YCR7QVNTRVRTX1BBVEh9L1dlYmluZG93c0FwcC5wbmdgfSAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiB0ZXh0PVwiVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBhIFdlYmluZG93cyBhcHAuXCIgLz5cclxuICAgICAgICAgICAgPEluZm9Cb3hcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJDbGljayB3aXRoIFJNQiB0byBjcmVhdGUgZXh0cmEgdmlld3MhXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwcHhcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaXN0IHRleHQ9XCJZb3UgY2FuIGRvOlwiPlxyXG4gICAgICAgICAgICAgICAgPEFwcE92ZXJ2aWV3TGluayB0ZXh0PVwidGhpc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaW5rIHRleHQ9XCJ0aGF0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxBcHBPdmVydmlld0xpbmsgdGV4dD1cImV2ZXJ5dGhpbmdcIiAvPlxyXG4gICAgICAgICAgICA8L0FwcE92ZXJ2aWV3TGlzdD5cclxuICAgICAgICA8L0FwcE92ZXJ2aWV3PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25CYXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQmFyXCIgc3R5bGU9e3sgZ2FwOiBwcm9wcz8uZ2FwID8/IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRGl2aWRlckJpZ1ZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDIycHg7IG1hcmdpbi1ibG9jazogMnB4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IEJ1dHRvbkJhciBmcm9tIFwiLi9CdXR0b25CYXJcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbkJhckNvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3dcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uQmFyLCBCdXR0b25CYXJDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duSXRlbShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRyb3Bkb3duSXRlbVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdLnBhcmVudEVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEcm9wZG93blwiKVswXS5wYXJlbnRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEcm9wZG93blwiKVswXS5wYXJlbnRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihhbmNob3JJZCwgaWQsIGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGFuY2hvckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3JJZCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRHJvcGRvd25JdGVtXCIpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0pIHJldHVybjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucGFyZW50RWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEcm9wZG93blwiKVswXS5wYXJlbnRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucGFyZW50RWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbGVtID0gKFxyXG4gICAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJEcm9wZG93biB3aW5DbC1CR0NvbG9yIHdpbkNsLUhhcmRPdXRzZXRTaGFkb3dcIj5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFuY2hvckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFuY2hvckVsZW0pLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIikpO1xyXG4gICAgZWxlbS5zdHlsZS50b3AgPSBhbmNob3JFbGVtLm9mZnNldFRvcCArIGFuY2hvckhlaWdodCArIFwicHhcIjtcclxuICAgIGVsZW0uc3R5bGUubGVmdCA9IGFuY2hvckVsZW0ub2Zmc2V0TGVmdCArIFwicHhcIjtcclxuXHJcbiAgICBhbmNob3JFbGVtLmFwcGVuZChlbGVtKTtcclxuICAgIGFuY2hvckVsZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYW5jaG9yRWxlbS5zdHlsZS5jb2xvciA9IFwidmFyKC0tYmxhY2spXCI7XHJcbiAgICBhbmNob3JFbGVtLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRvdHRlZCB2YXIoLS1ibGFjaylcIjtcclxuICAgIGFuY2hvckVsZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG59XHJcbiIsImltcG9ydCB7IEJ1dHRvbkJhckNvbnRhaW5lciwgQnV0dG9uQmFyIH0gZnJvbSBcIkB3ZWJpbmRvd3MvQnV0dG9uQmFyc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0Ryb3Bkb3duL0Ryb3Bkb3duSXRlbVwiO1xyXG5pbXBvcnQgY3JlYXRlRHJvcGRvd24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRHJvcGRvd25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKFwiQXBwX0ZpbGVCdG5cIiwgXCJBcHBfRmlsZUREXCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTmV3IEZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk9wZW4gRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW4gRmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEcm9wZG93bihcIkFwcF9FZGl0QnRuXCIsIFwiQXBwX0VkaXRERFwiLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlVuZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmVkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkV4dHJhXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgIDwvQnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQXBwVmlldygpIHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TWFpbiBBcHAgVmlldzwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIG1haW4gYXBwIHZpZXchPC9wPlxyXG4gICAgICAgICAgICA8SW5mb0JveCBpZD1cImNvdW50XCIgdGV4dD17Y291bnR9IHdpZHRoPVwiMTAwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ291bnQgdXAhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50XCIpLmlubmVySFRNTCA9ICsrY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ291bnQgZG93biFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIikuaW5uZXJIVE1MID0gLS1jb3VudDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5BcHBWaWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+VGhpcyBpcyBhIHRlbXBvcmFyeSB2aWV3ITwvaDE+XHJcbiAgICAgICAgICAgIDxwPllvdSBjYW4gY2xvc2UgaXQuPC9wPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e0FTU0VUU19QQVRIICsgXCIvMjAwdy5naWZcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgV2luZG93Q29udGVudCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgVmlld0NvbnRhaW5lciwgYWRkVmlldyB9IGZyb20gXCJAd2ViaW5kb3dzL1ZpZXdzXCI7XHJcbmltcG9ydCBXZWJpbmRvd3NBcHBPdmVydmlldyBmcm9tIFwiLi9BcHBWaWV3cy9XZWJpbmRvd3NBcHBPdmVydmlld1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9BcHBWaWV3cy9OYXZpZ2F0aW9uQmFyXCI7XHJcbmltcG9ydCBNYWluQXBwVmlldyBmcm9tIFwiLi9BcHBWaWV3cy9NYWluQXBwVmlld1wiO1xyXG5pbXBvcnQgQW5vdGhlclZpZXcgZnJvbSBcIi4vQXBwVmlld3MvQW5vdGhlclZpZXdcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG5cclxuICAgIHJvb3QuYXBwZW5kKFxyXG4gICAgICAgIDxXaW5kb3dDb250ZW50PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxyXG4gICAgICAgICAgICA8Vmlld0NvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvV2luZG93Q29udGVudD5cclxuICAgICk7XHJcblxyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8V2ViaW5kb3dzQXBwT3ZlcnZpZXcgLz4sIGZhbHNlKTtcclxuICAgIGFkZFZpZXcoXCI3NSVcIiwgPE1haW5BcHBWaWV3IC8+LCBmYWxzZSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8QW5vdGhlclZpZXcgLz4pO1xyXG59KTtcclxuXHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJfdHlwZW9mIiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3R5bGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0b1N0cmluZyIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiV2luZG93Q29udGVudCIsImNsYXNzTmFtZSIsIkljb24iLCJpZCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwiaXNHcmV5Iiwib25DbGljayIsIldCTkRfUkVRIiwiUk9PVF9QQVRIIiwiRklMRV9QQVRIIiwiUFVCTElDX1BBVEgiLCJBU1NFVFNfUEFUSCIsIklDT05TX1BBVEgiLCJGSUxFU19SRVEiLCJDbG9zZUJhciIsInJlbW92ZVZpZXciLCJ2aWV3IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2aWV3V2lkdGgiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3ViVmlld3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldlZpZXciLCJyZXNpemVWaWV3IiwiaSIsInByZXZWaWV3V2lkdGgiLCJyZW1vdmUiLCJWaWV3Iiwib25Db250ZXh0bWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzQ2xvc2FibGUiLCJzdWJ0cmFjdEZyb20iLCJmcm9tIiwibGltaXQiLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdGcm9tIiwic3VidHJhY3RlZFZhbHVlIiwidG9TdWJ0cmFjdCIsIk1hdGgiLCJhYnMiLCJ4IiwieSIsImNsYW1wIiwibWluIiwibWF4Iiwic3VidHJhY3RFcXVhbFNoYXJlIiwiYXJyYXkiLCJzaGFyZSIsIm5ld1ZhbHVlIiwibmVhcmx5RXF1YWwiLCJudW0xIiwibnVtMiIsImVwc2lsb24iLCJzcHJlYWRWYWx1ZUFjcm9zc0FycmF5IiwiYXJyIiwiZXF1YWxWYWx1ZSIsInNwcmVhZEFycmF5IiwibWFwIiwibnVtIiwiYWRkVmlldyIsImluaXRXaWR0aCIsImNvbnRlbnQiLCJzdWJXaW5kb3dXcmFwcGVyIiwic3ViV2luZG93cyIsInJlc2l6ZUhhbmRsZUxlZnQiLCJ3aW5kb3dXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImRlc2lyZWRXaWR0aCIsImxhc3RXaW5kb3ciLCJsYXN0V2luZG93V2lkdGgiLCJfc3VidHJhY3RGcm9tIiwibmV3U3ViV2luZG93IiwiYXBwZW5kIiwic3ViV2luZG93Q3VycmVudCIsInN1YldpbmRvd05leHQiLCJzYXZlZFdpZHRoQ3VycmVudCIsInNhdmVkV2lkdGhOZXh0IiwiaGFuZGxlIiwid2lkdGhEaWZmIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJuZXdDdXJyZW50V2lkdGgiLCJuZXdOZXh0V2lkdGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5Iiwib25XaW5kb3dSZXNpemUiLCJjYWxsYmFjayIsImRhdGEiLCJldmVudCIsIm9uV2luZG93UmVzaXplU3RhcnQiLCJvbldpbmRvd1Jlc2l6ZUVuZCIsIm9uV2luZG93QmVmb3JlRXhwYW5kIiwib25XaW5kb3dFeHBhbmQiLCJvbldpbmRvd0JlZm9yZVVuZXhwYW5kIiwib25XaW5kb3dVbmV4cGFuZCIsIm9uV2luZG93T3BlbiIsIm9uV2luZG93Q2xvc2UiLCJ3aW5kb3dFdmVudHMiLCJWaWV3Q29udGFpbmVyIiwid2luZG93V2lkdGhTdGFydCIsInNhdmVkV2lkdGhzIiwic2F2ZVZpZXdXaWR0aHMiLCJjbGVhclZpZXdXaWR0aHMiLCJhZGp1c3RWaWV3U2l6ZXMiLCJ3aW5kb3dTaXplIiwicHVzaCIsIm5ld1dpZHRocyIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRXaWR0aFByZWMiLCJuZXdXaWR0aCIsImRpZmYiLCJyZWR1Y2UiLCJhIiwiYiIsImFkanVzdGVkV2lkdGhzIiwiQXBwT3ZlcnZpZXdMaXN0IiwidGV4dCIsIkFwcE92ZXJ2aWV3SW1hZ2UiLCJBcHBPdmVydmlld0Rlc2NyaXB0aW9uIiwibWFyZ2luIiwibWluV2lkdGgiLCJMaW5rIiwiaHJlZiIsIkFwcE92ZXJ2aWV3TGluayIsInRvIiwiQXBwT3ZlcnZpZXciLCJJbmZvQm94IiwiV2ViaW5kb3dzQXBwT3ZlcnZpZXciLCJCdXR0b25CYXIiLCJfcHJvcHMkZ2FwIiwiZ2FwIiwiQnV0dG9uQmFyQ29udGFpbmVyIiwiQnV0dG9uIiwiRHJvcGRvd25JdGVtIiwicGFyZW50RWxlbWVudCIsInBvaW50ZXJFdmVudHMiLCJib3JkZXIiLCJjcmVhdGVEcm9wZG93biIsImFuY2hvcklkIiwiYW5jaG9yRWxlbSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZWxlbSIsImFuY2hvckhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJjb2xvciIsIk5hdmlnYXRpb25CYXIiLCJjb25zb2xlIiwibG9nIiwiTWFpbkFwcFZpZXciLCJjb3VudCIsImlubmVySFRNTCIsImRpc3BsYXkiLCJBbm90aGVyVmlldyIsImluaXQiLCJyb290IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiXSwic291cmNlUm9vdCI6IiJ9