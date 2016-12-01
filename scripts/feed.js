require("!style!css!../stylesheet.css");
import SourcesHelper from './sourcesHelper.js';
import NewsHelper from './newsHelper.js';

export function run() {
  applyLayout();

  let dropbox = document.getElementById("sources");
  let sourcesHelper = new SourcesHelper(dropbox);
  sourcesHelper.load();

  dropbox.addEventListener("change", () => {
    let newsHelper = new NewsHelper(document.getElementById("feed"));
    newsHelper.load(dropbox.value);
  });
}

function applyLayout() {
  let content = document.getElementById("content");
  content.style.display = 'initial';

  let startButton = document.getElementById("start");
  startButton.style.display = 'none';
}