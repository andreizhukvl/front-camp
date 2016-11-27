import NewsHelper from './newsHelper.js';

window.onload = () => {
  let helper = new NewsHelper(document.getElementById("feed"));
  helper.load();
};