window.onload = () => {
  let helper = new NewsHelper(document.getElementById("feed"));
  helper.load();
};