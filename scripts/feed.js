require("!style!css!../stylesheet.css");

import NewsHelper from './newsHelper.js';

window.onload = () => {
  let helper = new NewsHelper(document.getElementById("feed"));
  helper.load();
};