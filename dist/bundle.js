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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/a/a.js":
/*!***********************!*\
  !*** ./blocks/a/a.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _a = __webpack_require__(/*! ./a.scss */ \"./blocks/a/a.scss\");\n\nvar _a2 = _interopRequireDefault(_a);\n\nvar _a3 = __webpack_require__(/*! ./a.pug */ \"./blocks/a/a.pug\");\n\nvar _a4 = _interopRequireDefault(_a3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar A = function (_Block) {\n    _inherits(A, _Block);\n\n    _createClass(A, [{\n        key: 'name',\n        get: function get() {\n            return 'a';\n        }\n\n        /**\r\n         * Кнопка\r\n         * @param {Object} obj\r\n         * @param {string} obj.text - текст кнопки\r\n         * @param {string} [obj.type]\r\n         */\n\n    }]);\n\n    function A(_ref) {\n        var text = _ref.text,\n            _ref$href = _ref.href,\n            href = _ref$href === undefined ? '#' : _ref$href;\n\n        _classCallCheck(this, A);\n\n        var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this));\n\n        _this.el.classList.toggle('a');\n        _this.el.innerHTML = text;\n        _this.el.href = href;\n\n        return _this;\n    }\n\n    return A;\n}(_block2.default);\n\nexports.default = A;\n\n//# sourceURL=webpack:///./blocks/a/a.js?");

/***/ }),

/***/ "./blocks/a/a.pug":
/*!************************!*\
  !*** ./blocks/a/a.pug ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/a/a.pug?");

/***/ }),

/***/ "./blocks/a/a.scss":
/*!*************************!*\
  !*** ./blocks/a/a.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./a.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/a/a.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/a/a.scss?");

/***/ }),

/***/ "./blocks/block.js":
/*!*************************!*\
  !*** ./blocks/block.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Block = function () {\n    _createClass(Block, [{\n        key: 'name',\n        get: function get() {\n            throw new Error('Invalid component name');\n        }\n    }]);\n\n    function Block() {\n        _classCallCheck(this, Block);\n\n        this.el = document.createElement(this.name);\n    }\n\n    /**\r\n     * Вставка элемента на старинцу\r\n     * @param {Element} root - родительский элемент\r\n     */\n\n\n    _createClass(Block, [{\n        key: 'append',\n        value: function append(root) {\n            root.appendChild(this.el);\n        }\n    }]);\n\n    return Block;\n}();\n\nexports.default = Block;\n\n//# sourceURL=webpack:///./blocks/block.js?");

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _button = __webpack_require__(/*! ./button.scss */ \"./blocks/button/button.scss\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _button3 = __webpack_require__(/*! ./button.pug */ \"./blocks/button/button.pug\");\n\nvar _button4 = _interopRequireDefault(_button3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Button = function (_Block) {\n    _inherits(Button, _Block);\n\n    _createClass(Button, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Кнопка\r\n         * @param {Object} obj\r\n         * @param {string} obj.text - текст кнопки\r\n         * @param {string} [obj.type]\r\n         */\n\n    }]);\n\n    function Button(_ref) {\n        var text = _ref.text,\n            _ref$style = _ref.style,\n            style = _ref$style === undefined ? 'button__default' : _ref$style,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? 'button' : _ref$type;\n\n        _classCallCheck(this, Button);\n\n        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));\n\n        _this.el.classList.toggle('button');\n\n        _this.el.innerHTML = (0, _button4.default)({\n            text: text,\n            type: type,\n            style: style\n        });\n\n        _this.button = _this.el.querySelector('button');\n        _this.button.addEventListener('click', function (event) {\n            return _this.onClick(event);\n        });\n\n        return _this;\n    }\n\n    _createClass(Button, [{\n        key: 'onClick',\n        value: function onClick(event) {}\n    }]);\n\n    return Button;\n}(_block2.default);\n\nexports.default = Button;\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/button/button.pug":
/*!**********************************!*\
  !*** ./blocks/button/button.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (style, text, type) {pug_html = pug_html + \"\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([\"item__button\",\"\"+style+\"\"], [false,true]), false, true)+pug.attr(\"type\", \"\"+type+\"\", true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";}.call(this,\"style\" in locals_for_with?locals_for_with.style:typeof style!==\"undefined\"?style:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined,\"type\" in locals_for_with?locals_for_with.type:typeof type!==\"undefined\"?type:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/button.pug?");

/***/ }),

/***/ "./blocks/button/button.scss":
/*!***********************************!*\
  !*** ./blocks/button/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./button.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/button/button.scss?");

/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _input = __webpack_require__(/*! ./input.pug */ \"./blocks/input/input.pug\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _input3 = __webpack_require__(/*! ./input.scss */ \"./blocks/input/input.scss\");\n\nvar _input4 = _interopRequireDefault(_input3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Input = function (_Block) {\n    _inherits(Input, _Block);\n\n    _createClass(Input, [{\n        key: 'name',\n        get: function get() {\n            return 'input';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n         * @param {string} obj.placeholder - текст кнопки,\r\n         * @param {string} [obj.type] - тип инпута (по умолчанию text)\r\n         */\n\n    }]);\n\n    function Input(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? 'text' : _ref$type,\n            _ref$value = _ref.value,\n            value = _ref$value === undefined ? '' : _ref$value;\n\n        _classCallCheck(this, Input);\n\n        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));\n\n        _this.el.classList.toggle('input', true);\n\n        _this.el.placeholder = placeholder;\n        _this.el.value = value;\n        _this.el.type = type;\n\n        _this.el.addEventListener('input', function (event) {\n            return _this.onInput(event);\n        });\n\n        return _this;\n    }\n\n    /**\r\n     * @override\r\n     */\n\n\n    _createClass(Input, [{\n        key: 'onInput',\n        value: function onInput(event) {}\n    }]);\n\n    return Input;\n}(_block2.default);\n\nexports.default = Input;\n\n//# sourceURL=webpack:///./blocks/input/input.js?");

/***/ }),

/***/ "./blocks/input/input.pug":
/*!********************************!*\
  !*** ./blocks/input/input.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/input/input.pug?");

/***/ }),

/***/ "./blocks/input/input.scss":
/*!*********************************!*\
  !*** ./blocks/input/input.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./input.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/input/input.scss?");

/***/ }),

/***/ "./blocks/list/list.js":
/*!*****************************!*\
  !*** ./blocks/list/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _list = __webpack_require__(/*! ./list.pug */ \"./blocks/list/list.pug\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _list3 = __webpack_require__(/*! ./list.scss */ \"./blocks/list/list.scss\");\n\nvar _list4 = _interopRequireDefault(_list3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar List = function (_Block) {\n    _inherits(List, _Block);\n\n    _createClass(List, [{\n        key: 'name',\n        get: function get() {\n            return 'ul';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n         * @param {array} obj.user - массив объектов пользователей\r\n         *\r\n         */\n\n    }]);\n\n    function List(_ref) {\n        var user = _ref.user;\n\n        _classCallCheck(this, List);\n\n        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));\n\n        var list = '';\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = user[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var u = _step.value;\n\n                list += (0, _list2.default)({\n                    name: u.name,\n                    id: u.id\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n\n        _this.el.innerHTML = list;\n        _this.el.classList.toggle('list', true);\n\n        return _this;\n    }\n\n    return List;\n}(_block2.default);\n\nexports.default = List;\n\n//# sourceURL=webpack:///./blocks/list/list.js?");

/***/ }),

/***/ "./blocks/list/list.pug":
/*!******************************!*\
  !*** ./blocks/list/list.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (id, name) {pug_html = pug_html + \"\\u003Cli class=\\\"item__user\\\"\\u003E\\u003Cdiv class=\\\"item__avatar\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", \"./avatar/\"+id+\".jpg\", true, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"item__name\\\"\\u003E\" + (pug.escape(null == (pug_interp = name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\";}.call(this,\"id\" in locals_for_with?locals_for_with.id:typeof id!==\"undefined\"?id:undefined,\"name\" in locals_for_with?locals_for_with.name:typeof name!==\"undefined\"?name:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/list/list.pug?");

/***/ }),

/***/ "./blocks/list/list.scss":
/*!*******************************!*\
  !*** ./blocks/list/list.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./list.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/list/list.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/list/list.scss?");

/***/ }),

/***/ "./blocks/messages/messages.js":
/*!*************************************!*\
  !*** ./blocks/messages/messages.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _messages = __webpack_require__(/*! ./messages.pug */ \"./blocks/messages/messages.pug\");\n\nvar _messages2 = _interopRequireDefault(_messages);\n\nvar _messages3 = __webpack_require__(/*! ./messages.scss */ \"./blocks/messages/messages.scss\");\n\nvar _messages4 = _interopRequireDefault(_messages3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Messages = function (_Block) {\n    _inherits(Messages, _Block);\n\n    _createClass(Messages, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Кнопка\r\n         * @param {Object} obj\r\n         * @param {string} obj.text - текст сообщения\r\n         * @param {string} obj.style - стиль сообщения received, sent\r\n         * @param {string} obj.user - имя отправителя сообщения\r\n         * @param {string} obj.time - время отправки сообщения\r\n         */\n\n    }]);\n\n    function Messages(_ref) {\n        var message = _ref.message;\n\n        _classCallCheck(this, Messages);\n\n        var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this));\n\n        var list = '';\n        var scrollDiv = document.createElement('div');\n        scrollDiv.classList.toggle('item__scroll');\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = message[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var m = _step.value;\n\n                list += (0, _messages2.default)({\n                    user: m.user,\n                    text: m.text,\n                    time: m.time,\n                    style: m.style\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n\n        scrollDiv.innerHTML = list;\n        _this.el.appendChild(scrollDiv);\n        _this.el.classList.toggle('messages');\n\n        return _this;\n    }\n\n    return Messages;\n}(_block2.default);\n\nexports.default = Messages;\n\n//# sourceURL=webpack:///./blocks/messages/messages.js?");

/***/ }),

/***/ "./blocks/messages/messages.pug":
/*!**************************************!*\
  !*** ./blocks/messages/messages.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (style, text, time, user) {pug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"item__wrap\",\"\"+style+\"\"], [false,true]), false, true)) + \"\\u003E\\u003Cdiv class=\\\"item__content\\\"\\u003E\\u003Cp class=\\\"item__user\\\"\\u003E\" + (pug.escape(null == (pug_interp = user) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cspan class=\\\"item__text\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"item__time\\\"\\u003E\" + (pug.escape(null == (pug_interp = time) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"style\" in locals_for_with?locals_for_with.style:typeof style!==\"undefined\"?style:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined,\"time\" in locals_for_with?locals_for_with.time:typeof time!==\"undefined\"?time:undefined,\"user\" in locals_for_with?locals_for_with.user:typeof user!==\"undefined\"?user:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/messages/messages.pug?");

/***/ }),

/***/ "./blocks/messages/messages.scss":
/*!***************************************!*\
  !*** ./blocks/messages/messages.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./messages.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/messages/messages.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/messages/messages.scss?");

/***/ }),

/***/ "./blocks/textarea/textarea.js":
/*!*************************************!*\
  !*** ./blocks/textarea/textarea.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _textarea = __webpack_require__(/*! ./textarea.pug */ \"./blocks/textarea/textarea.pug\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\nvar _textarea3 = __webpack_require__(/*! ./textarea.scss */ \"./blocks/textarea/textarea.scss\");\n\nvar _textarea4 = _interopRequireDefault(_textarea3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Textarea = function (_Block) {\n    _inherits(Textarea, _Block);\n\n    _createClass(Textarea, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n           * @param {string} obj.placeholder - текст кнопки,\r\n         * @param {string} [obj.type] - тип инпута (по умолчанию text)\r\n         */\n\n    }]);\n\n    function Textarea(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$value = _ref.value,\n            value = _ref$value === undefined ? '' : _ref$value;\n\n        _classCallCheck(this, Textarea);\n\n        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this));\n\n        _this.el.classList.toggle('textarea', true);\n        _this.el.innerHTML = (0, _textarea2.default)({\n            placeholder: placeholder,\n            value: value\n        });\n        return _this;\n    }\n\n    return Textarea;\n}(_block2.default);\n\nexports.default = Textarea;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.js?");

/***/ }),

/***/ "./blocks/textarea/textarea.pug":
/*!**************************************!*\
  !*** ./blocks/textarea/textarea.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (placeholder, value) {pug_html = pug_html + \"\\u003Cdiv class=\\\"item__wrap\\\"\\u003E\\u003Ctextarea\" + (\" class=\\\"item__textarea\\\"\"+pug.attr(\"placeholder\", \"\"+placeholder+\"\", true, true)+pug.attr(\"value\", \"\"+value+\"\", true, true)) + \"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"placeholder\" in locals_for_with?locals_for_with.placeholder:typeof placeholder!==\"undefined\"?placeholder:undefined,\"value\" in locals_for_with?locals_for_with.value:typeof value!==\"undefined\"?value:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.pug?");

/***/ }),

/***/ "./blocks/textarea/textarea.scss":
/*!***************************************!*\
  !*** ./blocks/textarea/textarea.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./textarea.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _router = __webpack_require__(/*! ./modules/router */ \"./modules/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _dataBase = __webpack_require__(/*! ./modules/dataBase */ \"./modules/dataBase.js\");\n\nvar _dataBase2 = _interopRequireDefault(_dataBase);\n\nvar _login = __webpack_require__(/*! ./views/login/login */ \"./views/login/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _signup = __webpack_require__(/*! ./views/signup/signup */ \"./views/signup/signup.js\");\n\nvar _signup2 = _interopRequireDefault(_signup);\n\nvar _chat = __webpack_require__(/*! ./views/chat/chat */ \"./views/chat/chat.js\");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\nvar _users = __webpack_require__(/*! ./views/users/users */ \"./views/users/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    var router = new _router2.default();\n\n    var loginView = new _login2.default({\n        el: document.querySelector('.view-container.js-login')\n    });\n\n    var signupView = new _signup2.default({\n        el: document.querySelector('.view-container.js-signup')\n    });\n\n    var chatView = new _chat2.default({\n        el: document.querySelector('.view-container.js-chat')\n    });\n\n    var usersView = new _users2.default({\n        el: document.querySelector('.view-container.js-users')\n    });\n\n    window.dataBase = new _dataBase2.default();\n\n    router.route('login', loginView).route('signup', signupView).route('chat', chatView).route('users', usersView);\n\n    router.start();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/dataBase.js":
/*!*****************************!*\
  !*** ./modules/dataBase.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DataBase = function () {\n    function DataBase() {\n        _classCallCheck(this, DataBase);\n\n        this.db = {};\n    }\n\n    /**\r\n     * Добавить новый маршрут\r\n     * @param {string} path - маршрут\r\n     * @param {View} view - вьюха которая должна быть показана по маршруту\r\n     */\n\n\n    _createClass(DataBase, [{\n        key: 'addUser',\n        value: function addUser(name, password) {\n            this.db[name] = password;\n            return this;\n        }\n    }, {\n        key: '_onRoute',\n        value: function _onRoute(path) {\n            path = path.replace('#', '');\n\n            var view = this.routes[path];\n\n            if (this.current) {\n                this.current.hide();\n            }\n\n            if (view) {\n                view.show();\n                this.current = view;\n            }\n        }\n    }, {\n        key: 'start',\n        value: function start() {\n            var _this = this;\n\n            window.addEventListener('hashchange', function () {\n                _this._onRoute(location.hash);\n            });\n\n            this._onRoute(location.hash);\n        }\n    }]);\n\n    return DataBase;\n}();\n\nexports.default = DataBase;\n\n//# sourceURL=webpack:///./modules/dataBase.js?");

/***/ }),

/***/ "./modules/router.js":
/*!***************************!*\
  !*** ./modules/router.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = function () {\n    function Router() {\n        _classCallCheck(this, Router);\n\n        this.routes = {};\n    }\n\n    /**\r\n     * Добавить новый маршрут\r\n     * @param {string} path - маршрут\r\n     * @param {View} view - вьюха которая должна быть показана по маршруту\r\n     */\n\n\n    _createClass(Router, [{\n        key: 'route',\n        value: function route(path, view) {\n            this.routes[path] = view;\n            return this;\n        }\n    }, {\n        key: '_onRoute',\n        value: function _onRoute(path) {\n            path = path.replace('#', '');\n\n            var view = this.routes[path];\n\n            if (this.current) {\n                this.current.hide();\n            }\n\n            if (view) {\n                view.show();\n                this.current = view;\n            }\n        }\n    }, {\n        key: 'start',\n        value: function start() {\n            var _this = this;\n\n            window.addEventListener('hashchange', function () {\n                _this._onRoute(location.hash);\n            });\n\n            this._onRoute(location.hash);\n        }\n    }]);\n\n    return Router;\n}();\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./modules/router.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/a/a.scss":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/a/a.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".a {\\n  text-align: center;\\n  display: inline-block;\\n  padding: 7px 27px;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  font-size: 20px;\\n  color: #63b3ec;\\n  width: 100%; }\\n  .a:hover {\\n    color: #278cd4; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/a/a.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".button .item__button {\\n  border: none;\\n  outline: none;\\n  width: 100%;\\n  cursor: pointer;\\n  white-space: nowrap;\\n  vertical-align: middle;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: background-color .35s ease-in-out;\\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4); }\\n\\n.button .button__default {\\n  padding: 10px 20px;\\n  background-color: #63b3ec;\\n  color: white;\\n  border-radius: 3px; }\\n\\n.button .button__href {\\n  padding: 4px 20px;\\n  background-color: transparent;\\n  color: #63b3ec; }\\n\\n.button .button__default:hover {\\n  background-color: #41a8f2; }\\n\\n.button .button__href:hover {\\n  color: #278cd4; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/button/button.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".input {\\n  padding: 9px 15px;\\n  outline: none;\\n  border: 1px solid #434343;\\n  border-radius: 4px;\\n  width: 100%;\\n  transition: border-color .35s ease-in-out;\\n  font-size: 14px;\\n  box-sizing: border-box; }\\n  .input:focus {\\n    border-color: #0976c4; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/input/input.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/list/list.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/list/list.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".list {\\n  padding: 0 20px;\\n  list-style-type: none; }\\n  .list .item__user {\\n    margin: 0 0 5px 0;\\n    cursor: pointer; }\\n  .list .item__avatar {\\n    display: inline-block;\\n    width: 44px;\\n    height: 44px;\\n    line-height: 44px;\\n    text-align: center;\\n    border-radius: 30px;\\n    overflow: hidden; }\\n  .list .item__avatar img {\\n    max-width: 150%;\\n    max-height: 150%;\\n    vertical-align: middle; }\\n  .list .item__name {\\n    line-height: 42px;\\n    vertical-align: top;\\n    padding: 0 0 0 20px;\\n    display: inline-block;\\n    width: 57%;\\n    height: 30px;\\n    overflow: hidden; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/list/list.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/messages/messages.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/messages/messages.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".messages {\\n  font-size: 12px;\\n  position: relative;\\n  overflow: hidden;\\n  height: 330px;\\n  width: 100%; }\\n  .messages .item__scroll {\\n    overflow: auto;\\n    height: 100%;\\n    position: absolute;\\n    right: -18px;\\n    padding: 0 2px 0 0; }\\n  .messages .item__wrap {\\n    margin-bottom: 10px; }\\n  .messages .sent {\\n    margin-left: 10%;\\n    text-align: right; }\\n  .messages .received {\\n    margin-right: 10%;\\n    text-align: left; }\\n  .messages .item__content {\\n    display: inline-block;\\n    padding: 15px 25px;\\n    border-radius: 5px;\\n    text-align: left; }\\n  .messages .item__user {\\n    margin: 0 0 9px 0;\\n    font-weight: 600;\\n    color: #505ca0; }\\n  .messages .item__time {\\n    padding: 3px 0 0 14px;\\n    font-size: 13px;\\n    float: right; }\\n  .messages .received .item__content {\\n    background-color: #ddf1ff; }\\n  .messages .sent .item__content {\\n    background-color: #b2d5ee; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/messages/messages.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".textarea:focus {\\n  border-color: #0976c4; }\\n\\n.textarea .item__wrap {\\n  margin: 0 32px 0 0;\\n  height: 100%; }\\n\\n.textarea .item__textarea {\\n  border: 1px solid #434343;\\n  text-align: start;\\n  resize: none;\\n  padding: 9px 15px;\\n  border-radius: 3px;\\n  outline: none;\\n  width: 100%;\\n  height: 100%; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".chat-view {\\n  width: 320px;\\n  height: 500px;\\n  border: 1px solid grey;\\n  margin: 10px;\\n  display: inline-block;\\n  vertical-align: top; }\\n  .chat-view .chat-view__messages {\\n    padding: 20px; }\\n  .chat-view .chat-view__textarea {\\n    padding: 20px; }\\n  .chat-view .chat-view__a {\\n    margin: 0;\\n    background-color: #dcedff; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/chat/chat.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".login-view {\\n  width: 320px;\\n  height: 500px;\\n  border: 1px solid grey;\\n  margin: 10px;\\n  display: inline-block;\\n  vertical-align: top; }\\n  .login-view .login-view__name, .login-view .login-view__pwd, .login-view .button {\\n    margin: 20px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/login/login.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".signup-view {\\n  width: 320px;\\n  height: 500px;\\n  border: 1px solid grey;\\n  margin: 10px;\\n  display: inline-block;\\n  vertical-align: top; }\\n  .signup-view .signup-view__name,\\n  .signup-view .signup-view__pwd,\\n  .signup-view .signup-view__pwd-repeat,\\n  .signup-view .button {\\n    margin: 20px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/signup/signup.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/users/users.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/users/users.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".users-view {\\n  width: 320px;\\n  height: 500px;\\n  border: 1px solid grey;\\n  margin: 10px;\\n  display: inline-block;\\n  vertical-align: top; }\\n  .users-view .users-view__a {\\n    margin: 0;\\n    background-color: #dcedff; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/users/users.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./views/chat/chat.js":
/*!****************************!*\
  !*** ./views/chat/chat.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _messages = __webpack_require__(/*! ../../blocks/messages/messages */ \"./blocks/messages/messages.js\");\n\nvar _messages2 = _interopRequireDefault(_messages);\n\nvar _textarea = __webpack_require__(/*! ../../blocks/textarea/textarea */ \"./blocks/textarea/textarea.js\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\nvar _a = __webpack_require__(/*! ../../blocks/a/a */ \"./blocks/a/a.js\");\n\nvar _a2 = _interopRequireDefault(_a);\n\nvar _view = __webpack_require__(/*! ../view */ \"./views/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _chat = __webpack_require__(/*! ./chat.scss */ \"./views/chat/chat.scss\");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\nvar _chat3 = __webpack_require__(/*! ./chat.pug */ \"./views/chat/chat.pug\");\n\nvar _chat4 = _interopRequireDefault(_chat3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatView = function (_View) {\n    _inherits(ChatView, _View);\n\n    _createClass(ChatView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'chat-view';\n        }\n    }]);\n\n    function ChatView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, ChatView);\n\n        var _this = _possibleConstructorReturn(this, (ChatView.__proto__ || Object.getPrototypeOf(ChatView)).call(this, { el: el }));\n\n        _this.render(_chat4.default);\n\n        _this.messages = new _messages2.default({\n            message: [{\n                text: 'Тестовый текст',\n                user: 'Маша Петрова',\n                time: '10:30',\n                style: 'received'\n            }, {\n                text: 'Тестовый текст сообщения',\n                user: 'Петя Иванов',\n                time: '12:30',\n                style: 'sent'\n            }, {\n                text: 'Длинный тестовый текст сообщения Длинный тестовый текст сообщения Длинный тестовый текст сообщения ',\n                user: 'Маша Петрова',\n                time: '12:40',\n                style: 'received'\n            }, {\n                text: 'Тест',\n                user: 'Петя Иванов',\n                time: '12:45',\n                style: 'sent'\n            }, {\n                text: 'Тестовый текст сообщения',\n                user: 'Петя Иванов',\n                time: '12:53',\n                style: 'sent'\n            }]\n        });\n\n        _this.textarea = new _textarea2.default({\n            placeholder: 'Начните набирать сообщение'\n        });\n\n        _this.a = new _a2.default({\n            text: 'Контакты',\n            href: '#users'\n        });\n\n        _this.addBlock('messages', _this.messages).addBlock('textarea', _this.textarea).addBlock('a', _this.a);\n\n        return _this;\n    }\n\n    return ChatView;\n}(_view2.default);\n\nexports.default = ChatView;\n\n//# sourceURL=webpack:///./views/chat/chat.js?");

/***/ }),

/***/ "./views/chat/chat.pug":
/*!*****************************!*\
  !*** ./views/chat/chat.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"chat-view\\\"\\u003E\\u003Ch1 class=\\\"chat-view__a\\\"\\u003E\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"chat-view__messages\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"chat-view__textarea\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/chat/chat.pug?");

/***/ }),

/***/ "./views/chat/chat.scss":
/*!******************************!*\
  !*** ./views/chat/chat.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./chat.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/chat/chat.scss?");

/***/ }),

/***/ "./views/login/login.js":
/*!******************************!*\
  !*** ./views/login/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _input = __webpack_require__(/*! ../../blocks/input/input */ \"./blocks/input/input.js\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _button = __webpack_require__(/*! ../../blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _view = __webpack_require__(/*! ../view */ \"./views/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _login = __webpack_require__(/*! ./login.scss */ \"./views/login/login.scss\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _login3 = __webpack_require__(/*! ./login.pug */ \"./views/login/login.pug\");\n\nvar _login4 = _interopRequireDefault(_login3);\n\nvar _a = __webpack_require__(/*! ../../blocks/a/a */ \"./blocks/a/a.js\");\n\nvar _a2 = _interopRequireDefault(_a);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginView = function (_View) {\n    _inherits(LoginView, _View);\n\n    _createClass(LoginView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'login-view';\n        }\n    }]);\n\n    function LoginView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, LoginView);\n\n        var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this, { el: el }));\n\n        _this.render(_login4.default);\n\n        _this.name = new _input2.default({\n            placeholder: 'Имя'\n        });\n\n        _this.pwd = new _input2.default({\n            placeholder: 'Пароль',\n            type: 'password'\n        });\n\n        _this.pwd.onInput = function (value) {\n            console.log(value);\n        };\n\n        _this.a = new _a2.default({\n            text: 'Регистрация',\n            href: '#signup'\n        });\n\n        _this.button = new _button2.default({\n            text: 'Войти',\n            type: 'submit'\n        });\n\n        var self = _this;\n        _this.button.onClick = function () {\n            var name = self.name.el.value;\n            var password = self.pwd.el.value;\n            if (dataBase.db[name] === password) location.hash = '#chat';\n        };\n\n        _this.addBlock('name', _this.name).addBlock('pwd', _this.pwd).addBlock('submit', _this.button).addBlock('a', _this.a);\n        return _this;\n    }\n\n    return LoginView;\n}(_view2.default);\n\nexports.default = LoginView;\n\n//# sourceURL=webpack:///./views/login/login.js?");

/***/ }),

/***/ "./views/login/login.pug":
/*!*******************************!*\
  !*** ./views/login/login.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"login-view\\\"\\u003E\\u003Cdiv class=\\\"login-view__name\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"login-view__pwd\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"login-view__submit\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"login-view__a\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/login/login.pug?");

/***/ }),

/***/ "./views/login/login.scss":
/*!********************************!*\
  !*** ./views/login/login.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./login.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/login/login.scss?");

/***/ }),

/***/ "./views/signup/signup.js":
/*!********************************!*\
  !*** ./views/signup/signup.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _input = __webpack_require__(/*! ../../blocks/input/input */ \"./blocks/input/input.js\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _button = __webpack_require__(/*! ../../blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _view = __webpack_require__(/*! ../view */ \"./views/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _signup = __webpack_require__(/*! ./signup.scss */ \"./views/signup/signup.scss\");\n\nvar _signup2 = _interopRequireDefault(_signup);\n\nvar _signup3 = __webpack_require__(/*! ./signup.pug */ \"./views/signup/signup.pug\");\n\nvar _signup4 = _interopRequireDefault(_signup3);\n\nvar _a = __webpack_require__(/*! ../../blocks/a/a */ \"./blocks/a/a.js\");\n\nvar _a2 = _interopRequireDefault(_a);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignupView = function (_View) {\n    _inherits(SignupView, _View);\n\n    _createClass(SignupView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'signup-view';\n        }\n    }]);\n\n    function SignupView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, SignupView);\n\n        var _this = _possibleConstructorReturn(this, (SignupView.__proto__ || Object.getPrototypeOf(SignupView)).call(this, { el: el }));\n\n        _this.render(_signup4.default);\n\n        _this.name = new _input2.default({\n            placeholder: 'Имя'\n        });\n\n        _this.pwd = new _input2.default({\n            placeholder: 'Пароль',\n            type: 'password'\n        });\n\n        _this.pwdRepeat = new _input2.default({\n            placeholder: 'Повтор пароля',\n            type: 'password-repeat'\n        });\n\n        _this.button = new _button2.default({\n            text: 'Войти',\n            type: 'submit'\n        });\n\n        _this.a = new _a2.default({\n            text: 'Логин',\n            href: '#login'\n        });\n\n        var self = _this;\n        _this.button.onClick = function () {\n            var name = self.name.el;\n            var password = self.pwd.el;\n            var pwdRepeat = self.pwdRepeat.el;\n            if (password.value !== pwdRepeat.value) {\n                pwdRepeat.style.borderColor = 'red';\n            } else {\n                if (!dataBase.db[name.value]) {\n                    dataBase.addUser(name.value, password.value);\n                    location.hash = '#chat';\n                } else {\n                    if (dataBase.db[name.value] === password.value) location.hash = '#chat';\n                }\n            }\n        };\n\n        _this.addBlock('name', _this.name).addBlock('pwd', _this.pwd).addBlock('pwd-repeat', _this.pwdRepeat).addBlock('submit', _this.button).addBlock('a', _this.a);\n        return _this;\n    }\n\n    return SignupView;\n}(_view2.default);\n\nexports.default = SignupView;\n\n//# sourceURL=webpack:///./views/signup/signup.js?");

/***/ }),

/***/ "./views/signup/signup.pug":
/*!*********************************!*\
  !*** ./views/signup/signup.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"signup-view\\\"\\u003E\\u003Cdiv class=\\\"signup-view__name\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"signup-view__pwd\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"signup-view__pwd-repeat\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"signup-view__submit\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"signup-view__a\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/signup/signup.pug?");

/***/ }),

/***/ "./views/signup/signup.scss":
/*!**********************************!*\
  !*** ./views/signup/signup.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./signup.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/signup/signup.scss?");

/***/ }),

/***/ "./views/users/users.js":
/*!******************************!*\
  !*** ./views/users/users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _list = __webpack_require__(/*! ../../blocks/list/list */ \"./blocks/list/list.js\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _button = __webpack_require__(/*! ../../blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _view = __webpack_require__(/*! ../view */ \"./views/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _users = __webpack_require__(/*! ./users.scss */ \"./views/users/users.scss\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _users3 = __webpack_require__(/*! ./users.pug */ \"./views/users/users.pug\");\n\nvar _users4 = _interopRequireDefault(_users3);\n\nvar _a = __webpack_require__(/*! ../../blocks/a/a */ \"./blocks/a/a.js\");\n\nvar _a2 = _interopRequireDefault(_a);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersView = function (_View) {\n    _inherits(UsersView, _View);\n\n    _createClass(UsersView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'users-view';\n        }\n    }]);\n\n    function UsersView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, UsersView);\n\n        var _this = _possibleConstructorReturn(this, (UsersView.__proto__ || Object.getPrototypeOf(UsersView)).call(this, { el: el }));\n\n        _this.render(_users4.default);\n\n        _this.list = new _list2.default({\n            user: [{ name: 'Света Иванова', id: 1 }, { name: 'Коля Петров', id: 2 }, { name: 'Вася Сидоров', id: 3 }, { name: 'Маша Лебедев', id: 4 }]\n        });\n\n        _this.a = new _a2.default({\n            text: 'Чат ',\n            href: '#chat'\n        });\n\n        _this.addBlock('list', _this.list).addBlock('a', _this.a);\n        return _this;\n    }\n\n    return UsersView;\n}(_view2.default);\n\nexports.default = UsersView;\n\n//# sourceURL=webpack:///./views/users/users.js?");

/***/ }),

/***/ "./views/users/users.pug":
/*!*******************************!*\
  !*** ./views/users/users.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"users-view\\\"\\u003E\\u003Ch1 class=\\\"users-view__a\\\"\\u003E\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"users-view__list\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/users/users.pug?");

/***/ }),

/***/ "./views/users/users.scss":
/*!********************************!*\
  !*** ./views/users/users.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./users.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/users/users.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/users/users.scss?");

/***/ }),

/***/ "./views/view.js":
/*!***********************!*\
  !*** ./views/view.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n    function View(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, View);\n\n        this.el = el;\n        this.hide();\n    }\n\n    _createClass(View, [{\n        key: \"render\",\n        value: function render(template) {\n            this.el.innerHTML = template();\n        }\n    }, {\n        key: \"show\",\n        value: function show() {\n            this.el.hidden = false;\n        }\n    }, {\n        key: \"hide\",\n        value: function hide() {\n            this.el.hidden = true;\n        }\n    }, {\n        key: \"addBlock\",\n        value: function addBlock(name, block) {\n            this.el.querySelector(\".\" + this.bemName + \"__\" + name).appendChild(block.el);\n            return this;\n        }\n    }]);\n\n    return View;\n}();\n\nexports.default = View;\n\n//# sourceURL=webpack:///./views/view.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });