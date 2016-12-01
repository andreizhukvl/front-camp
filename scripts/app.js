function onRunAppClick() {
    require.ensure(["./feed"], function() {
        let feed = require('./feed');
        feed.run();
    });
}

window.onload = () => {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", onRunAppClick);
};