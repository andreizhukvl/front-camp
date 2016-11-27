/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _newsHelper = __webpack_require__(1);
	
	var _newsHelper2 = _interopRequireDefault(_newsHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	  var helper = new _newsHelper2.default(document.getElementById("feed"));
	  helper.load();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var API_URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=d1450e81d3cb4c4ba3f2f5c772206b14';
	
	var NewsHelper = function () {
	  function NewsHelper(container) {
	    _classCallCheck(this, NewsHelper);
	
	    this.container = container;
	  }
	
	  _createClass(NewsHelper, [{
	    key: 'load',
	    value: function load() {
	      var _this = this;
	
	      fetch(API_URL).then(function (result) {
	        if (result.ok) {
	          return result.json();
	        }
	      }).then(function (data) {
	        var newsHTML = '';
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var article = _step.value;
	
	            newsHTML += '<h1 class="title">' + article.title + '</h1>\n         <img src="' + article.urlToImage + '"></img>\n         <p class="description">' + article.description + '</p>\n         <p class="link_to_article"><a href="' + article.url + '">Read full article</a></p>\n         <p class="author">By ' + article.author + ' on (' + new Date(article.publishedAt).toLocaleString() + ')</p>';
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        _this.container.innerHTML = newsHTML;
	      });
	    }
	  }]);
	
	  return NewsHelper;
	}();
	
	exports.default = NewsHelper;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map