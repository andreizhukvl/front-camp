require("!style!css!../stylesheet.css");
import SourcesHelper from './sourcesHelper.js';

window.onload = () => {
  let dropbox = document.getElementById("sources");
  let sourcesHelper = new SourcesHelper(dropbox);
  sourcesHelper.load();

  dropbox.addEventListener("change", function() 
  {
    let sourceValue = this.value;

    require.ensure(["./newsHelper"], function() {
      let NewsHelper = require("./newsHelper");
      let newsHelper = new NewsHelper(document.getElementById("feed"));
      newsHelper.load(sourceValue);
    });
  });
};