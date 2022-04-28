let gender_input:boolean = false;
// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//чтение кода для работы с аккаунтом пользователя
let search: URLSearchParams = new URLSearchParams(document.location.search);
let code: string = search.get("token");
let old_code = getCookie("code");
console.log(code);

//Проверка на то что это новый код
if(typeof(old_code) !== undefined) {
    if(old_code !== code){
        let date: Date = new Date(86400 - Date.now());
        let time: string = date.toISOString();

        document.cookie =  encodeURIComponent("code")+ "=" +  encodeURIComponent(code) + "; path=/" + ";max-age="+encodeURIComponent(time) + ";";
    }
    
}

//Выбираем пол для собседников
const gender = document.getElementsByClassName("settings__radio");
for(let i = 0; i < gender.length; i++) {
    gender[i].addEventListener("change",() => {
        gender_input = true;
    })
}

//проверка формы перед отправкой
const button = document.getElementsByClassName("settings__submit")[0];

button.addEventListener("click", (event) => {
    //проверка полей ввода возраста
    const age_min = document.getElementById("age-min");
    const age_max = document.getElementById("age-max");
    
    if(+age_min["value"] < 0 ||
       +age_min["value"] > +age_max["value"] || 
       +age_max["value"] > 99) {
        event.preventDefault();    
        alert("Вы указали нереалистичный возраст");
    }

    //Проверка на то что пользователь указал пол
    if(gender_input === false){
        event.preventDefault();    
        alert("Укажите пол");
    }
    
    /*const city = document.getElementById("city");

    const res = fetch("https://htmlweb.ru/json/geo/search/" + city["value"], {"method": "POST"});

    res.then((response) => { return response.json(); })
    .then((data) => {
        if(data["status"] === 404){
            event.preventDefault();  
            alert(city["value"] +": населенный пукт не найден не найден!");
        }
    }).catch();*/
    
    
    

});




