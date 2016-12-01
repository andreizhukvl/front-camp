require("!style!css!../stylesheet.css");
import SourcesHelper from './sourcesHelper.js';

window.onload = () => {
  let dropbox = document.getElementById("sources");
  let sourcesHelper = new SourcesHelper(dropbox);
  sourcesHelper.load();

  let button = document.getElementById("magic_button");

  button.addEventListener("click", function() 
  {
    let dropbox = document.getElementById("sources");

    require.ensure(["./newsHelper"], function() {
      let NewsHelper = require("./newsHelper");
      let newsHelper = new NewsHelper(document.getElementById("feed"));
      newsHelper.load(dropbox.value);
    });
  });
};