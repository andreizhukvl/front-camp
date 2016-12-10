webpackJsonp([1],{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(7);\n\nvar API_KEY = 'd1450e81d3cb4c4ba3f2f5c772206b14';\nvar API_ARTICLE_BASE_URL = 'https://newsapi.org/v1/articles?source=';\n\nvar NewsHelper = function () {\n  function NewsHelper(container) {\n    _classCallCheck(this, NewsHelper);\n\n    this.container = container;\n  }\n\n  _createClass(NewsHelper, [{\n    key: 'load',\n    value: function load(selectedValue) {\n      var _this = this;\n\n      if (selectedValue !== \"select source\") {\n        fetch(API_ARTICLE_BASE_URL + selectedValue + \"&apiKey=\" + API_KEY).then(function (result) {\n          if (result.ok) {\n            return result.json();\n          }\n        }).then(function (data) {\n          var newsHTML = '';\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var article = _step.value;\n\n              newsHTML += '<h1 class=\"title\">' + article.title + '</h1>\\n           <img src=\"' + article.urlToImage + '\"></img>\\n           <p class=\"description\">' + article.description + '</p>\\n           <p class=\"link_to_article\"><a href=\"' + article.url + '\">Read full article</a></p>\\n           <p class=\"author\">By ' + article.author + ' on (' + new Date(article.publishedAt).toLocaleString() + ')</p>';\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n\n          _this.container.innerHTML = newsHTML;\n        }).catch(function () {});\n      }\n    }\n  }]);\n\n  return NewsHelper;\n}();\n\nmodule.exports = NewsHelper;\n\n//////////////////\n// WEBPACK FOOTER\n// ./scripts/newsHelper.js\n// module id = 6\n// module chunks = 1\n//# sourceURL=webpack:///./scripts/newsHelper.js?");

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(8);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./node_modules/css-loader/index.js!./stylesheet_lazy.css\", function() {\n\t\t\tvar newContent = require(\"!!./node_modules/css-loader/index.js!./stylesheet_lazy.css\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/style-loader!./~/css-loader!./stylesheet_lazy.css\n// module id = 7\n// module chunks = 1\n//# sourceURL=webpack:///./stylesheet_lazy.css?./~/style-loader!./~/css-loader");

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(4)();\n// imports\n\n\n// module\nexports.push([module.id, \"img\\r\\n{\\r\\n  height: 400px;\\r\\n  display: block;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n@media (max-width: 1200px)\\r\\n{\\r\\n  img\\r\\n  {\\r\\n    width: 90%;\\r\\n    height: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 400px)\\r\\n{\\r\\n  img\\r\\n  {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n#feed h1\\r\\n{\\r\\n  color: #bc6363;\\r\\n}\\r\\n\\r\\n.article:hover\\r\\n{\\r\\n  background-color: #dfdfdf;\\r\\n}\\r\\n\\r\\n.article\\r\\n{\\r\\n  padding-bottom: 0.75rem;\\r\\n}\\r\\n\\r\\na:link {\\r\\n    color: #845754;\\r\\n}\\r\\n\\r\\na:visited {\\r\\n    color: #a6563e;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./stylesheet_lazy.css\n// module id = 8\n// module chunks = 1\n//# sourceURL=webpack:///./stylesheet_lazy.css?./~/css-loader");

/***/ }

});