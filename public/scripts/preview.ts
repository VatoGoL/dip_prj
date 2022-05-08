/**
 * Функция для чтения определенного куки взята со страницы https://learn.javascript.ru/cookie 
 * @param name - Название поля куки
 * @returns - Возвращает значение поля куки
 */
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//чтение кода для работы с аккаунтом пользователя
let search: URLSearchParams = new URLSearchParams(document.location.search);
let person_id: string = search.get("id");
let token = getCookie("code");
let count_group = 5;

let url = "/method/" + "users.get?"
            + "user_ids=" + person_id
            + "&fields=" + "city," + "bdate," + "sex," + "about," + "status," + "education," + "photo_200"
            + "&name_case=nom"
            + "&access_token=" + token 
            + "&v=5.131";
/** 
 * Подкгрузка дополнительной информации об аккаунте
*/
fetch(url).then((response) => { return response.json(); })
.then((data) => {
    console.log(data["response"][0]);
    if(data["response"][0]["last_name"] !== undefined){
        document.getElementById("surname").innerHTML = data["response"][0]["last_name"];
    }
    if(data["response"][0]["first_name"] !== undefined){
        document.getElementById("name").innerHTML = data["response"][0]["first_name"];
    }
    if(data["response"][0]["bdate"] !== undefined){
        document.getElementById("bday").innerHTML = data["response"][0]["bdate"];
    }
    if(data["response"][0]["status"] !== undefined){
        document.getElementById("status").innerHTML = data["response"][0]["status"];
    }
    if(data["response"][0]["about"] !== undefined){
        document.getElementById("about").innerHTML = data["response"][0]["about"];
    }
    if(data["response"][0]["city"] !== undefined){
        document.getElementById("city").innerHTML = data["response"][0]["city"]["title"];
    }
    if(data["response"][0]["education"] !== undefined){
        document.getElementById("education").innerHTML = data["response"][0]["education"]["university_name"];
    }
    if(data["response"][0]["sex"] !== undefined){
        if(data["response"][0]["sex"] === 1){
            document.getElementById("sex").innerHTML = "Женский";
        }
        else if( data["response"][0]["sex"] === 2){
            document.getElementById("sex").innerHTML = "Мужской";
        }
    }
    if(data["response"][0]["photo_200"] !== undefined){
        document.getElementById("photo").setAttribute("src", data["response"][0]["photo_200"]);
    }

    document.getElementById("next").setAttribute("href", `https://vk.com/im?sel=${person_id}`);
});

/** 
 * Подкгрузка дополнительной информации об группах пользователя
*/

url = "/method/" + "groups.get?"
+ "user_id=" + person_id
+ "&count=" + count_group
+ "&access_token=" + token 
+ "&v=5.131";

fetch(url).then((response) => { return response.json(); })
.then((data) => {
    if(data["response"] !== undefined){
        for(let i = 0; i < count_group; i++){
            url = "/method/" + "groups.getById?"
            + "group_id=" + data["response"]["items"][i]
            + "&access_token=" + token 
            + "&v=5.131";
    
            fetch(url).then((response) => {return response.json();})
            .then((data_n) => {
                let tmp = `<p class="table__text-two">${data_n["response"][0]["name"]}</p>`
                document.getElementById("group").insertAdjacentHTML("beforeend", tmp);
            });
        }
    }
    else{
        let tmp = `<p class="table__text-two">Обишка загрузки</p>`
                document.getElementById("group").insertAdjacentHTML("beforeend", tmp);
    }
    
})