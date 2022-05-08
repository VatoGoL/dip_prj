/**
 * @autor Иван
 * Перенапаравляем пользователя на страницу получения токена
 * при нажатии на "кнопку"
*/
let log_but = document.getElementById("index");
if(log_but !== undefined) {
    log_but.addEventListener("click",()=>{
        
        window.location.href = "https://oauth.vk.com/authorize?client_id=8149748&display=page&redirect_uri=https://oauth.vk.com/blank.html" +
        "&scope=groups,photos" + "&response_type=token" + "&v=5.52";
        
    }, true);
}

let submit = document.getElementById("submit");
/*
 * @autor Иван
 * Проверяяет введен ли токен в форму, чтобы продолжить работу с сайта
*/
submit.addEventListener("click", (event) => { 
    let token = document.getElementById("token");
    if(token["value"] === ""){
        event.preventDefault();
        alert("Введите токен для продолжения");  
    }
});



