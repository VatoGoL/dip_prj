
class Card {
    private static count: number = 0;
    private id: number;
    private name: string;
    private surname: string;
    private groups: string[];
    private photo_url: string;

    constructor(name: string, surname: string, groups: string[], photo_url: string = "") {
        this.id = Card.count;
        this.name = name;
        this.surname = surname;
        this.groups = groups;
        this.photo_url = photo_url;

        Card.count++;
    }

    public static getCount(): number {
        return Card.count;
    }
    public getId(): number {
        return this.id;
    }

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
        for(let i = 0; i < this.groups.length; i++){
            card += `<li class="card__info-text-li">
                        ${this.groups[i]}
                    </li>`;
        }
        card +=`</ul>
                
            </div>
            <form class="card__chat" action="../chat/chat.html">
                <span class="card__start-span">
                    <input type="submit" class="card__start-chat" value="Начать общение!"/>
                </span>
            </form>
        </div>`;
        
        const catalog = document.getElementsByClassName('catalog')[0];
        catalog.insertAdjacentHTML("beforeend", card);

        return create;
    } 
}


//разбор get запроса
const get_request: URLSearchParams = new URLSearchParams (window.location.search);

const gender_s = get_request.get('gender');
const min_age = get_request.get('age-min');
const max_age = get_request.get('age-max');
const city = get_request.get('city');

/*let card_1 = new Card("Анатолий", "Батонов", ["Мемуары ценителей научных мемов","Cut the Crap"], "../../resources/choise-chat/one.png");*/
let token = document.cookie.slice(5); //"code=" - 5 символов
let url = "https://api.vk.com/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";

let req = fetch(url, {
    method: 'GET',
    headers: {
        "Origin": "http://localhost",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
    }, 
    
    
   
}).
then((response) => {return response.json();})
.then((data) => {
    console.log(data);
});


//let code: string = document.location.search
/* https://htmlweb.ru/geo/api_get_data.php */
