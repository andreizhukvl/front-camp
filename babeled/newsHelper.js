'use strict';

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

            newsHTML += '<p>' + article.title + '</p>';
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