require("!style!css!../stylesheet.css");
import SourcesHelper from './sourcesHelper.js';
import NewsHelper from './newsHelper.js';

window.onload = () => {
  let dropbox = document.getElementById("sources");
  let sourcesHelper = new SourcesHelper(dropbox);
  sourcesHelper.load();

  let newsHelper = new NewsHelper(document.getElementById("feed"));
  dropbox.addEventListener("change", function() 
    { 
      newsHelper.load(this.value);
    });
  
};