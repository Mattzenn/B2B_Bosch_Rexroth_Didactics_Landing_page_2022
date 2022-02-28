/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n\n/*! WOW - v1.1.2 - 2015-04-07\n* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */\n\n(function () {\n  var a,\n      b,\n      c,\n      d,\n      e,\n      f = function f(a, b) {\n    return function () {\n      return a.apply(b, arguments);\n    };\n  },\n      g = [].indexOf || function (a) {\n    for (var b = 0, c = this.length; c > b; b++) {\n      if (b in this && this[b] === a) return b;\n    }\n\n    return -1;\n  };\n\n  b = function () {\n    function a() {}\n\n    return a.prototype.extend = function (a, b) {\n      var c, d;\n\n      for (c in b) {\n        d = b[c], null == a[c] && (a[c] = d);\n      }\n\n      return a;\n    }, a.prototype.isMobile = function (a) {\n      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);\n    }, a.prototype.createEvent = function (a, b, c, d) {\n      var e;\n      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent(\"CustomEvent\"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;\n    }, a.prototype.emitEvent = function (a, b) {\n      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : \"on\" + b in (null != a) ? a[\"on\" + b]() : void 0;\n    }, a.prototype.addEvent = function (a, b, c) {\n      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent(\"on\" + b, c) : a[b] = c;\n    }, a.prototype.removeEvent = function (a, b, c) {\n      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent(\"on\" + b, c) : delete a[b];\n    }, a.prototype.innerHeight = function () {\n      return \"innerHeight\" in window ? window.innerHeight : document.documentElement.clientHeight;\n    }, a;\n  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {\n    function a() {\n      this.keys = [], this.values = [];\n    }\n\n    return a.prototype.get = function (a) {\n      var b, c, d, e, f;\n\n      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {\n        if (c = f[b], c === a) return this.values[b];\n      }\n    }, a.prototype.set = function (a, b) {\n      var c, d, e, f, g;\n\n      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {\n        if (d = g[c], d === a) return void (this.values[c] = b);\n      }\n\n      return this.keys.push(a), this.values.push(b);\n    }, a;\n  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {\n    function a() {\n      \"undefined\" != typeof console && null !== console && console.warn(\"MutationObserver is not supported by your browser.\"), \"undefined\" != typeof console && null !== console && console.warn(\"WOW.js cannot detect dom mutations, please call .sync() after loading new content.\");\n    }\n\n    return a.notSupported = !0, a.prototype.observe = function () {}, a;\n  }()), d = this.getComputedStyle || function (a) {\n    return this.getPropertyValue = function (b) {\n      var c;\n      return \"float\" === b && (b = \"styleFloat\"), e.test(b) && b.replace(e, function (a, b) {\n        return b.toUpperCase();\n      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;\n    }, this;\n  }, e = /(\\-([a-z]){1})/g, this.WOW = function () {\n    function e(a) {\n      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);\n    }\n\n    return e.prototype.defaults = {\n      boxClass: \"wow\",\n      animateClass: \"animated\",\n      offset: 0,\n      mobile: !0,\n      live: !0,\n      callback: null\n    }, e.prototype.init = function () {\n      var a;\n      return this.element = window.document.documentElement, \"interactive\" === (a = document.readyState) || \"complete\" === a ? this.start() : this.util().addEvent(document, \"DOMContentLoaded\", this.start), this.finished = [];\n    }, e.prototype.start = function () {\n      var b, c, d, e;\n      if (this.stopped = !1, this.boxes = function () {\n        var a, c, d, e;\n\n        for (d = this.element.querySelectorAll(\".\" + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) {\n          b = d[a], e.push(b);\n        }\n\n        return e;\n      }.call(this), this.all = function () {\n        var a, c, d, e;\n\n        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) {\n          b = d[a], e.push(b);\n        }\n\n        return e;\n      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) {\n        b = e[c], this.applyStyle(b, !0);\n      }\n      return this.disabled() || (this.util().addEvent(window, \"scroll\", this.scrollHandler), this.util().addEvent(window, \"resize\", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {\n        return function (b) {\n          var c, d, e, f, g;\n\n          for (g = [], c = 0, d = b.length; d > c; c++) {\n            f = b[c], g.push(function () {\n              var a, b, c, d;\n\n              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) {\n                e = c[a], d.push(this.doSync(e));\n              }\n\n              return d;\n            }.call(a));\n          }\n\n          return g;\n        };\n      }(this)).observe(document.body, {\n        childList: !0,\n        subtree: !0\n      }) : void 0;\n    }, e.prototype.stop = function () {\n      return this.stopped = !0, this.util().removeEvent(window, \"scroll\", this.scrollHandler), this.util().removeEvent(window, \"resize\", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;\n    }, e.prototype.sync = function () {\n      return a.notSupported ? this.doSync(this.element) : void 0;\n    }, e.prototype.doSync = function (a) {\n      var b, c, d, e, f;\n\n      if (null == a && (a = this.element), 1 === a.nodeType) {\n        for (a = a.parentNode || a, e = a.querySelectorAll(\".\" + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) {\n          b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);\n        }\n\n        return f;\n      }\n    }, e.prototype.show = function (a) {\n      return this.applyStyle(a), a.className = a.className + \" \" + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, \"animationend\", this.resetAnimation), this.util().addEvent(a, \"oanimationend\", this.resetAnimation), this.util().addEvent(a, \"webkitAnimationEnd\", this.resetAnimation), this.util().addEvent(a, \"MSAnimationEnd\", this.resetAnimation), a;\n    }, e.prototype.applyStyle = function (a, b) {\n      var c, d, e;\n      return d = a.getAttribute(\"data-wow-duration\"), c = a.getAttribute(\"data-wow-delay\"), e = a.getAttribute(\"data-wow-iteration\"), this.animate(function (f) {\n        return function () {\n          return f.customStyle(a, b, d, c, e);\n        };\n      }(this));\n    }, e.prototype.animate = function () {\n      return \"requestAnimationFrame\" in window ? function (a) {\n        return window.requestAnimationFrame(a);\n      } : function (a) {\n        return a();\n      };\n    }(), e.prototype.resetStyle = function () {\n      var a, b, c, d, e;\n\n      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {\n        a = d[b], e.push(a.style.visibility = \"visible\");\n      }\n\n      return e;\n    }, e.prototype.resetAnimation = function (a) {\n      var b;\n      return a.type.toLowerCase().indexOf(\"animationend\") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, \"\").trim()) : void 0;\n    }, e.prototype.customStyle = function (a, b, c, d, e) {\n      return b && this.cacheAnimationName(a), a.style.visibility = b ? \"hidden\" : \"visible\", c && this.vendorSet(a.style, {\n        animationDuration: c\n      }), d && this.vendorSet(a.style, {\n        animationDelay: d\n      }), e && this.vendorSet(a.style, {\n        animationIterationCount: e\n      }), this.vendorSet(a.style, {\n        animationName: b ? \"none\" : this.cachedAnimationName(a)\n      }), a;\n    }, e.prototype.vendors = [\"moz\", \"webkit\"], e.prototype.vendorSet = function (a, b) {\n      var c, d, e, f;\n      d = [];\n\n      for (c in b) {\n        e = b[c], a[\"\" + c] = e, d.push(function () {\n          var b, d, g, h;\n\n          for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) {\n            f = g[b], h.push(a[\"\" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);\n          }\n\n          return h;\n        }.call(this));\n      }\n\n      return d;\n    }, e.prototype.vendorCSS = function (a, b) {\n      var c, e, f, g, h, i;\n\n      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) {\n        i = f[c], g = g || h.getPropertyCSSValue(\"-\" + i + \"-\" + b);\n      }\n\n      return g;\n    }, e.prototype.animationName = function (a) {\n      var b;\n\n      try {\n        b = this.vendorCSS(a, \"animation-name\").cssText;\n      } catch (c) {\n        b = d(a).getPropertyValue(\"animation-name\");\n      }\n\n      return \"none\" === b ? \"\" : b;\n    }, e.prototype.cacheAnimationName = function (a) {\n      return this.animationNameCache.set(a, this.animationName(a));\n    }, e.prototype.cachedAnimationName = function (a) {\n      return this.animationNameCache.get(a);\n    }, e.prototype.scrollHandler = function () {\n      return this.scrolled = !0;\n    }, e.prototype.scrollCallback = function () {\n      var a;\n      return !this.scrolled || (this.scrolled = !1, this.boxes = function () {\n        var b, c, d, e;\n\n        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {\n          a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));\n        }\n\n        return e;\n      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();\n    }, e.prototype.offsetTop = function (a) {\n      for (var b; void 0 === a.offsetTop;) {\n        a = a.parentNode;\n      }\n\n      for (b = a.offsetTop; a = a.offsetParent;) {\n        b += a.offsetTop;\n      }\n\n      return b;\n    }, e.prototype.isVisible = function (a) {\n      var b, c, d, e, f;\n      return c = a.getAttribute(\"data-wow-offset\") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;\n    }, e.prototype.util = function () {\n      return null != this._util ? this._util : this._util = new b();\n    }, e.prototype.disabled = function () {\n      return !this.config.mobile && this.util().isMobile(navigator.userAgent);\n    }, e;\n  }();\n}).call(undefined);\n\n//# sourceURL=webpack://B2B_Bosch_Rexroth_Didactics_Landing_page_2022/./pages/index.js?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://B2B_Bosch_Rexroth_Didactics_Landing_page_2022/./pages/index.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/index.js");
/******/ 	
/******/ })()
;