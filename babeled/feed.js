"use strict";

window.onload = function () {
  var helper = new NewsHelper(document.getElementById("feed"));
  helper.load();
};