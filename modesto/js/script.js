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

/***/ "./source/js/components/burger.js":
/*!****************************************!*\
  !*** ./source/js/components/burger.js ***!
  \****************************************/
/*! exports provided: setBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBurger\", function() { return setBurger; });\nvar burger = document.body.querySelector('.burger');\nvar menu = document.body.querySelector('.header__nav');\nvar setBurger = function setBurger() {\n  burger.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    burger.classList.toggle('opened');\n    menu.classList.toggle('closed');\n  });\n};\n\n\n//# sourceURL=webpack:///./source/js/components/burger.js?");

/***/ }),

/***/ "./source/js/components/form.js":
/*!**************************************!*\
  !*** ./source/js/components/form.js ***!
  \**************************************/
/*! exports provided: setForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setForm\", function() { return setForm; });\nvar first = document.body.querySelector('.form__first');\nvar second = document.body.querySelector('.form__second');\nvar next = first.querySelector('button');\nvar back = second.querySelector('button');\nvar submit = second.querySelector('button[type=\"submit\"]');\nvar checkbox = second.querySelector('input[type=\"checkbox\"]');\nvar checkInputs = function checkInputs(elements, checks) {\n  elements.forEach(function (element) {\n    var errorMessage = element.parentElement.querySelector('span');\n    if (errorMessage && !errorMessage.classList.contains('none')) {\n      errorMessage.classList.add('none');\n    }\n    ;\n    if (element.value && element.value !== '') {\n      checks.push(element.value);\n    } else {\n      errorMessage.classList.remove('none');\n    }\n  });\n};\nvar setForm = function setForm() {\n  second.classList.add('hidden');\n  next.addEventListener('click', function () {\n    var inputs = first.querySelectorAll('input');\n    var values = [];\n    checkInputs(inputs, values);\n    if (values.length === inputs.length) {\n      first.classList.add('hidden');\n      second.classList.remove('hidden');\n    }\n  });\n  back.addEventListener('click', function () {\n    first.classList.remove('hidden');\n    second.classList.add('hidden');\n  });\n  submit.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    var inputs = second.querySelectorAll('input');\n    var values = [];\n    checkInputs(inputs, values);\n    if (values.length === inputs.length && checkbox.checked) {\n      second.classList.add('hidden');\n      document.querySelector('.form__text h2').textContent = 'Спасибо за регистрацию!';\n      document.querySelector('.form__text h2').style.marginBottom = '0';\n      document.querySelector('.form__text h2').style.textAlign = 'center';\n      document.querySelector('.form__text p').remove();\n    }\n    if (values.length === inputs.length && !checkbox.checked) {\n      checkbox.parentElement.querySelector('label').style.color = 'red';\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./source/js/components/form.js?");

/***/ }),

/***/ "./source/js/components/langs.js":
/*!***************************************!*\
  !*** ./source/js/components/langs.js ***!
  \***************************************/
/*! exports provided: setLangs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLangs\", function() { return setLangs; });\nvar langs = document.body.querySelectorAll('.header__langs button');\nvar setLangs = function setLangs() {\n  langs.forEach(function (lang) {\n    lang.addEventListener('click', function () {\n      langs.forEach(function (item) {\n        item.classList.remove('langs__active');\n      });\n      lang.classList.add('langs__active');\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./source/js/components/langs.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ \"./source/js/components/burger.js\");\n/* harmony import */ var _components_langs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/langs */ \"./source/js/components/langs.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ \"./source/js/components/form.js\");\n\n\n\nif (document.body) {\n  Object(_components_burger__WEBPACK_IMPORTED_MODULE_0__[\"setBurger\"])();\n  Object(_components_langs__WEBPACK_IMPORTED_MODULE_1__[\"setLangs\"])();\n  Object(_components_form__WEBPACK_IMPORTED_MODULE_2__[\"setForm\"])();\n}\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });