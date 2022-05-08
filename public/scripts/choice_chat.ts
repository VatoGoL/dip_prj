/**
 * @autor Иван
 * @class
*/
class Card {
    /** @member {number} */
    private static count: number = 0;
    /** @member {number} */
    private id: number;
    /** @member {number} */
    private person_id: number;
    /** @member {string} */
    private name: string;
    /** @member {string} */
    private surname: string;
    /** @member {string} */
    private groups: string;
    /** @member {string} */
    private photo_url: string;
    /**
     * @constructor
     * @param {number} person_id - id человека
     * @param {string} name 
     * @param {string} surname 
     * @param {string} groups 
     * @param {string} photo_url 
     */
    constructor(person_id: number, name: string, surname: string, groups: string, photo_url: string = "") {
        this.person_id = person_id;
        this.id = Card.count;
        this.name = name;
        this.surname = surname;
        this.groups = groups;
        this.photo_url = photo_url;

        Card.count++;
    }
    /**
     * @this {Card}
     * @returns {number} - Колличество объектов класса Card
     */
    public static getCount(): number {
        return Card.count;
    }
    /**
     * @this {Card}
     * @returns {number} - Уникальный номер объекта класса Card 
     */
    public getId(): number {
        return this.id;
    }
    /**
     * @this {Card}
     * @returns {number} - Получение vk id пользователя привязанного к объекту типа Card
     */
    public getPersonId(): number {
        return this.person_id;
    }
    /**
     * Функция составляет html объект карточки человека и встраивает его в страницу
     * @this {Card}
     * @returns {number} - true карточка отрисована
     */
    public drawCard(): boolean {
        let create: boolean = true;

        
        let card: string = ` <div class="card">
                        <div class="card__image-box">
                            <img class="card__image" src="${this.photo_url}" alt="Пользователь ${this.id}"/>
                        </div>
                        <div class="card__info-box">
                            <p class="card__info-name card__text-centr">${this.name} ${this.surname}</p>
                            <h4 class="card__info-text card__text-centr">Что у вас общего?</h4>
                            <p class="card__info-title card__s">Сообщество:</p>
                            <ul class="card__ul">`
        
        card += `<li class="card__info-text-li">
                    ${this.groups}
                </li>`;
        
        card +=`</ul>
                
            </div>
            <form class="card__chat" action="../preview/preview.html" method="get">
                <span class="card__start-span">
                    <input type="text" class="card__none" name="id"/>
                    <input type="submit" class="card__start-chat" value="Начать общение!"/>
                </span>
            </form>
        </div>`;
        
        const catalog = document.getElementsByClassName('catalog')[0];
        catalog.insertAdjacentHTML("beforeend", card);
        this.initialize();
        return create;
    } 
    public initialize() {
        //записываем id человека в форму чтобы потом обработать
        const temp = document.getElementsByClassName('card__none');
        temp[this.id]["value"] = this.person_id;
    }
}

/**
 * Функция для генерации случайного числа от 0 до max взята с сайта mdn
 * @function
 * @param {number} max - число до которого нужно сгенерировать случайное значение 
 * @returns Возвращается сгенерированное случайное значение
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
let code: string = search.get("token");
let old_code = getCookie("code");

//Проверка на то что это новый токен
if(typeof(old_code) !== undefined) {
    if(old_code !== code){
        let date: Date = new Date(86400 - Date.now());
        let time: string = date.toISOString();

        document.cookie = encodeURIComponent("code") + "=" +  encodeURIComponent(code) + "; path=/" + ";max-age="+encodeURIComponent(time) + ";";
    }
    
}



const max_future_friends: number = 3;
const max_members: number = 100;
let token = document.cookie.slice(5); //"code=" - 5 символов
let url = "/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";
/**
 * Получение групп пользователя
 * @returns промис с массивом групп 
 */
let fGroup = fetch(url, {
    method: 'GET',
    headers: {
        "Origin": "http://localhost",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
    }, 
})
.then((response) => {return response.json();})
.then((data) => {
    return data["response"]["items"];
});

fGroup.then( (data) => {
    
    /**
     * @function
     * @returns Колличество участников групп и сами группы
     */
    async function getCountMembers() {
        
        let r: number[][] = [[],[]];
        
        for(let i = 0; i < max_future_friends; i++){
            let group_id = data[getRandomInt(data.length)]; 

            url = "/method/" + "groups.getById?" + "group_id=" + group_id + "&fields=members_count" + "&access_token=" + token + "&v=5.131";
            r[0][i] = group_id;
            r[1][i] = await fetch(url).then((response)=>{ 
                return response.json();
            })
            .then((data)=>{
                return data["response"][0]["members_count"];
            });
            
        };
        return r;
    }
    /**
     * Функция выполняет запрос и получает участников выбранных нами сообществ
     * из них выбирает человека и возвращает массив с группой и выбранным человеком
     * @function
     * @param {number[][]} count - массив с группами
     * @returns 
     */
    async function getMembers(count: number[][]) {
        
        let r: number[][] = [[],[]];
        for(let j = 0; j < max_future_friends; j++){
            let i = j;
            if(count[1][i] < max_members){
                url = "/method/" + "groups.getMembers?" + 
                "group_id=" + count[0][i] + 
                "&count=" + count[1][i] + 
                "&access_token=" + token + "&v=5.131";
            }
            else{ 
                url = "/method/" + "groups.getMembers?" + 
                "group_id=" + count[0][i] + 
                "&offset=" + Math.floor(count[1][i]/max_members) + 
                "&count=" + max_members + 
                "&access_token=" + token + "&v=5.131";
            }
            r[0][i] = count[0][i];
            r[1][i] = await fetch(url).then((response)=>{ 
                return response.json();
            })
            .then((data)=>{
                if(data["response"] !== undefined){
                    let result = data["response"]["items"];
                    return result[getRandomInt(result.length)];
                }
                else{
                    j--;
                }
                
            });
            
        };
        return r;
    }
    /**
     * Создание элементов класса типа Card из полученной информации 
     * @param {number[][]} data - [0] id группы /[1] id человека
     */
    async function createFriend(data: number[][]) {
        let result: Object[] = [];
            
        
        for(let i = 0; i < max_future_friends; i++){
            url = "/method/" + "groups.getById?" + 
                "group_id=" + data[0][i] + 
                "&access_token=" + token + "&v=5.131";
            let gr_name =  await fetch(url).then(
                (response) => { return response.json(); })
                .then((data) => {
                    
                    return data["response"][0]["name"];
                });

            url = "/method/" + "users.get?" + 
                "user_ids=" + data[1][i] +
                "&fields=photo_200" +
                "&name_case=nom" +  
                "&access_token=" + token + "&v=5.131";
            let person = await fetch(url).then(
                (response) => { return response.json(); })
            .then((data)=>{ 
                return data["response"][0];
            });
            
            result[i] = {
                "group_name": gr_name,
                "friend_firstname": person["first_name"],
                "friend_lastname": person["last_name"],
                "friends_photo": person["photo_200"],
                "friend_id": person["id"],
            }
        }

        //Создаём карточки будущих друзей
        let friends: Card[] = [];
        for(let i = 0; i < max_future_friends; i++){
            friends[i] = new Card(result[i]["friend_id"], 
                                  result[i]["friend_firstname"], 
                                  result[i]["friend_lastname"], 
                                  result[i]["group_name"], 
                                  result[i]["friends_photo"]);
            friends[i].drawCard();
        }
        document.getElementsByClassName("notification")[0].innerHTML = "Если не нравятся подобранные люди, нажми f5!";
    }


    //получаем колличество участников групп
    let c_members = getCountMembers();
    
    //получаем потенциальных друзей
    let members = c_members.then((data)=>{
        let result;
        
        //Возникают непонятные ошибки, будто нет в ответе поля "items", а решается она тем что нужно отправить запрос повторно
        result = getMembers(data);
            
        return result;
    });

    
    members.then((data)=>{
        //data - массив с id группы [0] и id участника группы [1]
        createFriend(data);
       
    })
    
    
   

    
});
