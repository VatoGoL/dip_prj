var log_but = document.getElementById("index");
if (log_but !== undefined) {
    log_but.addEventListener("click", function () {
        window.location.href = "https://oauth.vk.com/authorize?client_id=8149748&display=page&redirect_uri=https://oauth.vk.com/blank.html" +
            "&scope=groups,photos" + "&response_type=token" + "&v=5.52";
    }, true);
}
var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    var token = document.getElementById("token");
    if (token["value"] === "") {
        event.preventDefault();
        alert("Введите токен для продолжения");
    }
});
/*http://localhost:3000/pages/search_settings/search_settings.html*/
