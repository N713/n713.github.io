/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/inputs.js":
/*!****************************************!*\
  !*** ./source/js/components/inputs.js ***!
  \****************************************/
/*! exports provided: setInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInputs\", function() { return setInputs; });\nvar inputs = document.body.querySelectorAll(\".bikes__add input[type='text']\");\nvar buttons = document.body.querySelectorAll('.bikes__add button');\nvar lists = document.body.querySelectorAll('.list');\nvar setInputs = function setInputs() {\n  if (inputs.length === buttons.length) {\n    buttons.forEach(function (button, index) {\n      button.addEventListener('click', function () {\n        if (inputs[index].value && inputs[index].value !== '') {\n          inputs[index].classList.remove('error');\n          lists[index].insertAdjacentHTML('beforeend', \"<li>\".concat(inputs[index].value, \"</li>\"));\n        } else {\n          inputs[index].classList.add('error');\n        }\n      });\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./source/js/components/inputs.js?");

/***/ }),

/***/ "./source/js/components/tabs.js":
/*!**************************************!*\
  !*** ./source/js/components/tabs.js ***!
  \**************************************/
/*! exports provided: setTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTabs\", function() { return setTabs; });\nvar tabs = document.body.querySelectorAll('.tabs__tab');\nvar deskTabs = document.body.querySelectorAll('.tabs__desk h2');\nvar setTabs = function setTabs() {\n  if (tabs.length === deskTabs.length) {\n    if (window.matchMedia('(min-width: 850px)').matches) {\n      tabs.forEach(function (tab, index) {\n        deskTabs[0].classList.add('active');\n        tab.classList.add('closed');\n        tabs[0].classList.remove('closed');\n        deskTabs[index].addEventListener('click', function () {\n          deskTabs.forEach(function (tab) {\n            tab.classList.remove('active');\n          });\n          deskTabs[index].classList.add('active');\n          tabs.forEach(function (tab) {\n            tab.classList.add('closed');\n          });\n          tabs[index].classList.remove('closed');\n        });\n      });\n    } else {\n      tabs.forEach(function (tab) {\n        tab.classList.add('closed');\n        tab.querySelector('.tabs__info').classList.add('none');\n        tab.addEventListener('click', function (evt) {\n          if (evt.target.tagName === 'H2') {\n            tab.classList.toggle('closed');\n            tab.querySelector('.tabs__info').classList.toggle('none');\n          }\n        });\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./source/js/components/tabs.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tabs */ \"./source/js/components/tabs.js\");\n/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inputs */ \"./source/js/components/inputs.js\");\n\n\nObject(_components_tabs__WEBPACK_IMPORTED_MODULE_0__[\"setTabs\"])();\nObject(_components_inputs__WEBPACK_IMPORTED_MODULE_1__[\"setInputs\"])();\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });